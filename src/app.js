const express = require('express');
const session = require('express-session');
const helmet = require('helmet');
const path = require('path');
const { auth, requiresAuth } = require('express-openid-connect');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const config = require('./config');
const { notFound, errorHandler } = require('./errorHandler');
const logger = require('./logger');

const app = express();

// Database setup
const db = new sqlite3.Database('./terrapredict.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  logger.info('Connected to the SQLite database.');
});

db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  auth0_id TEXT UNIQUE,
  nombre TEXT,
  apellido TEXT,
  compania TEXT,
  empleados TEXT,
  correo TEXT UNIQUE,
  telefono TEXT,
  sitio_web TEXT,
  pais TEXT,
  sector TEXT,
  services TEXT,
  setup_completed BOOLEAN DEFAULT 0
)`);

// Middleware configuration
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://maps.googleapis.com", "https://cdn.jsdelivr.net", "https://cdn.tailwindcss.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net", "https://cdnjs.cloudflare.com"],
      imgSrc: ["'self'", "data:", "https:", "blob:"],
      connectSrc: ["'self'", "https://maps.googleapis.com", "https://dev-4x1um64ylha3t08k.us.auth0.com"],
      fontSrc: ["'self'", "https://cdnjs.cloudflare.com"],
    },
  },
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// Session configuration
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: true
}));

// Auth0 configuration
app.use(auth({
  authRequired: false,
  auth0Logout: true,
  secret: config.auth0ClientSecret,
  baseURL: `http://localhost:${config.port}`,
  clientID: config.auth0ClientId,
  issuerBaseURL: `https://${config.auth0Domain}`,
  routes: {
    login: false,
  },
}));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/auth/status', (req, res) => {
  res.json({
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user
  });
});

app.get('/login', (req, res) => {
  res.oidc.login({
    returnTo: '/dashboard'
  });
});

app.get('/dashboard', requiresAuth(), (req, res) => {
  const auth0Id = req.oidc.user.sub;
  db.get('SELECT setup_completed FROM users WHERE auth0_id = ?', [auth0Id], (err, row) => {
    if (err) {
      logger.error('Error checking setup status:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (!row || !row.setup_completed) {
      return res.redirect('/setup');
    }
    res.sendFile(path.join(__dirname, '../public/dashboard.html'));
  });
});

app.get('/setup', requiresAuth(), (req, res) => {
  const auth0Id = req.oidc.user.sub;
  db.get('SELECT setup_completed FROM users WHERE auth0_id = ?', [auth0Id], (err, row) => {
    if (err) {
      logger.error('Error checking setup status:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (row && row.setup_completed) {
      return res.redirect('/dashboard');
    }
    res.sendFile(path.join(__dirname, '../public/setup.html'));
  });
});

app.get('/api/user', requiresAuth(), (req, res) => {
  const auth0Id = req.oidc.user.sub;
  db.get('SELECT * FROM users WHERE auth0_id = ?', [auth0Id], (err, row) => {
    if (err) {
      logger.error('Error fetching user data:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (!row) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (row.sector) row.sector = JSON.parse(row.sector);
    if (row.services) row.services = JSON.parse(row.services);
    res.json(row);
  });
});

app.post('/api/setup', requiresAuth(), (req, res) => {
  const { nombre, apellido, compania, empleados, correo, telefono, sitio_web, pais, sector, services } = req.body;
  const auth0Id = req.oidc.user.sub;

  db.get('SELECT * FROM users WHERE auth0_id = ?', [auth0Id], (err, existingUser) => {
    if (err) {
      logger.error('Error checking existing user:', err);
      return res.status(500).json({ success: false, error: 'Internal server error' });
    }

    const query = existingUser
      ? `UPDATE users SET 
          nombre = ?, apellido = ?, compania = ?, empleados = ?, correo = ?, 
          telefono = ?, sitio_web = ?, pais = ?, sector = ?, services = ?, setup_completed = 1
          WHERE auth0_id = ?`
      : `INSERT INTO users 
          (auth0_id, nombre, apellido, compania, empleados, correo, telefono, sitio_web, pais, sector, services, setup_completed) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)`;

    const params = existingUser
      ? [nombre, apellido, compania, empleados, correo, telefono, sitio_web, pais, JSON.stringify(sector), JSON.stringify(services), auth0Id]
      : [auth0Id, nombre, apellido, compania, empleados, correo, telefono, sitio_web, pais, JSON.stringify(sector), JSON.stringify(services)];

    db.run(query, params, function(err) {
      if (err) {
        logger.error('Error saving user data:', err);
        return res.status(500).json({ success: false, error: err.message });
      }
      logger.info('User setup completed:', { auth0Id, nombre, apellido });
      res.json({ success: true });
    });
  });
});

// Debug route to log database contents
app.get('/api/debug/users', (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) {
      logger.error('Error fetching users:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    logger.info('Current database contents:', rows);
    res.json(rows);
  });
});

// Error handling
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(config.port, () => {
  logger.info(`🚀 Server running on http://localhost:${config.port}`);
});
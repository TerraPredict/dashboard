# 🌱 TerraPredict: Plataforma de Predicción de Microclimas para la Agricultura Sostenible 🌡️

## 📊 Índice

1. [Introducción](#introducción)
2. [Características](#características)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Instalación y Configuración](#instalación-y-configuración)
6. [Uso](#uso)
7. [Componentes del Sistema](#componentes-del-sistema)
8. [Flujo de Trabajo](#flujo-de-trabajo)
9. [Seguridad](#seguridad)
10. [Escalabilidad y Rendimiento](#escalabilidad-y-rendimiento)
11. [Contribución](#contribución)
12. [Licencia](#licencia)
13. [Contacto](#contacto)


## 🌟 Introducción

TerraPredict es una plataforma innovadora diseñada para revolucionar la agricultura en Panamá y América Latina mediante la predicción precisa de microclimas. Utilizando tecnología de vanguardia, incluyendo inteligencia artificial, datos satelitales y sensores IoT, TerraPredict ofrece a los agricultores herramientas poderosas para optimizar sus cultivos, reducir riesgos y aumentar la productividad de manera sostenible.

Este proyecto es una demostración (demo) que ilustra las capacidades de TerraPredict, centrándose principalmente en la interfaz de usuario y la experiencia del usuario. Aunque actualmente se enfoca en el frontend, ya incluye funcionalidades de backend como el almacenamiento en base de datos. Las futuras iteraciones integrarán completamente los componentes de IA y el procesamiento de datos satelitales e IoT.

## 🚀 Características

- 🌡️ Predicción de microclimas con alta precisión
- 💧 Optimización de riego basada en datos en tiempo real
- 🐛 Monitoreo y predicción de plagas
- 🌱 Recomendaciones personalizadas de cultivo
- 📊 Análisis detallado de rendimiento de cultivos
- 🛰️ Integración de imágenes satelitales para monitoreo de cultivos
- 🌪️ Gestión de riesgos climáticos
- 🌳 Vigilancia forestal y monitoreo de biodiversidad
- 🗺️ Cartografía de riesgos de infraestructuras agrícolas


## 💻 Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Base de Datos**: SQLite
- **Autenticación**: Auth0
- **Visualización de Datos**: Chart.js
- **Iconos**: Font Awesome
- **Animaciones**: Animate.css, Hover.css
- **Mapas**: (Pendiente de implementación) Mapbox o Google Maps API
- **Control de Versiones**: Git
- **Despliegue**: (Ejemplo) Vercel, Heroku


## 📁 Estructura del Proyecto

```plaintext
terrapredict-dashboard/
│
├── node_modules/
├── public/
│   ├── css/
│   ├── img/
│   ├── js/
│   ├── index.html
│   ├── dashboard.html
│   ├── setup.html
│   └── error.html
├── src/
│   ├── app.js
│   ├── auth.js
│   ├── config.js
│   ├── errorHandler.js
│   └── logger.js
├── terrapredict.db
├── package.json
├── package-lock.json
└── README.md
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (v14.0.0 o superior)
- npm (v6.0.0 o superior)
- Cuenta en Auth0


### Pasos de Instalación

1. **Clonar el repositorio**

```shellscript
git clone https://github.com/tu-usuario/terrapredict-dashboard.git
cd terrapredict-dashboard
```


2. **Instalar dependencias**

```shellscript
npm install
```


3. **Configurar variables de entorno**

Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:

```plaintext
PORT=3000
SESSION_SECRET=tu_secreto_de_sesion
AUTH0_CLIENT_ID=tu_client_id_de_auth0
AUTH0_CLIENT_SECRET=tu_client_secret_de_auth0
AUTH0_DOMAIN=tu_dominio_de_auth0
```


4. **Configurar Auth0**

1. Crea una cuenta en [Auth0](https://auth0.com/)
2. Crea una nueva aplicación y configura las URLs de callback
3. Copia el Client ID, Client Secret y Domain a tu archivo `.env`



5. **Inicializar la base de datos**

La base de datos SQLite se inicializará automáticamente al ejecutar la aplicación por primera vez.


6. **Ejecutar la aplicación**

```shellscript
npm start
```

La aplicación estará disponible en `http://localhost:3000`




## 🖥️ Uso

1. Accede a la aplicación a través de tu navegador
2. Regístrate o inicia sesión utilizando Auth0
3. Completa el proceso de configuración inicial
4. Explora el dashboard y las diferentes funcionalidades


## 🧩 Componentes del Sistema

### 1. Frontend (public/)

- **index.html**: Página de inicio
- **dashboard.html**: Panel principal del usuario
- **setup.html**: Página de configuración inicial
- **error.html**: Página de manejo de errores


### 2. Backend (src/)

- **app.js**: Punto de entrada de la aplicación, configura el servidor Express
- **auth.js**: Maneja la autenticación con Auth0
- **config.js**: Gestiona la configuración de la aplicación
- **errorHandler.js**: Maneja errores de la aplicación
- **logger.js**: Sistema de logging


### 3. Base de Datos

- **terrapredict.db**: Base de datos SQLite para almacenar información de usuarios y configuraciones


## 🔄 Flujo de Trabajo

1. El usuario accede a la aplicación y es autenticado a través de Auth0
2. Si es la primera vez, el usuario es dirigido a la página de configuración (setup.html)
3. Una vez configurado, el usuario accede al dashboard principal (dashboard.html)
4. El dashboard carga dinámicamente los widgets basados en los servicios seleccionados por el usuario
5. Los datos se actualizan periódicamente para mostrar la información más reciente


## 🔒 Seguridad

- Autenticación gestionada por Auth0
- Uso de HTTPS para todas las comunicaciones
- Implementación de CORS para prevenir accesos no autorizados
- Sanitización de entradas de usuario para prevenir inyecciones SQL
- Uso de variables de entorno para información sensible


## 📈 Escalabilidad y Rendimiento

- Arquitectura modular para facilitar la expansión
- Uso de caching para mejorar los tiempos de respuesta
- Optimización de consultas a la base de datos
- Diseño responsive para soportar múltiples dispositivos


## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request


## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

TerraPredict - [@terrapredict](https://twitter.com/terrapredict) - [info@terrapredict.com](mailto:info@terrapredict.com)

Link del Proyecto: [https://github.com/tu-usuario/terrapredict-dashboard](https://github.com/tu-usuario/terrapredict-dashboard)
# 🌱 TerraPredict: Plataforma de Predicción de Microclimas para la Agricultura Sostenible 🌡️

## 📊 Índice

1. [Introducción](#-introducción)
2. [Características](#-características)
3. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
4. [Estructura del Proyecto](#-estructura-del-proyecto)
5. [Instalación y Configuración](#️-instalación-y-configuración)
6. [Uso](#️-uso)
7. [Componentes del Sistema](#-componentes-del-sistema)
8. [Flujo de Trabajo](#-flujo-de-trabajo)
9. [Seguridad](#-seguridad)
10. [Escalabilidad y Rendimiento](#-escalabilidad-y-rendimiento)
11. [Licencia](#-licencia)
12. [Contacto](#-contacto)


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

## 🔧 Dashboard Dinámico y Personalización

TerraPredict ofrece una experiencia de usuario única y adaptable a través de su innovador sistema de dashboard dinámico. Esta característica avanzada permite que la interfaz se ajuste automáticamente a las necesidades específicas de cada agricultor, optimizando así la relevancia y utilidad de la información presentada.

### 🧩 Widgets Dinámicos

- **Adaptabilidad Automática**: El dashboard genera y muestra widgets de forma dinámica basándose en los servicios seleccionados por el usuario. Esto asegura que cada agricultor vea solo la información pertinente a sus operaciones.
- **Personalización Inteligente**: A medida que el usuario interactúa con la plataforma y utiliza diferentes servicios, el dashboard evoluciona, reflejando las áreas de mayor interés y uso.
- **Eficiencia en la Visualización**: Al mostrar solo los widgets relevantes, se optimiza el espacio en pantalla y se mejora la experiencia del usuario, permitiendo un acceso rápido y eficiente a la información crítica.


### 🔄 Configuración Flexible de Servicios

En futuras actualizaciones, TerraPredict introducirá capacidades avanzadas de configuración, permitiendo a los usuarios una mayor personalización de su experiencia:

- **Edición de Servicios**: Los usuarios podrán añadir, eliminar o modificar los servicios que utilizan directamente desde la interfaz de configuración.
- **Priorización de Información**: Se implementará la capacidad de reorganizar y priorizar los widgets en el dashboard según las preferencias individuales.
- **Ajustes Personalizados**: Cada widget podrá ser configurado individualmente, permitiendo a los usuarios definir parámetros específicos, como frecuencia de actualización de datos o umbrales de alerta.


### 🎨 Interfaz Adaptativa

- **Diseño Responsivo**: El dashboard se adapta perfectamente a diferentes dispositivos y tamaños de pantalla, desde computadoras de escritorio hasta tablets y smartphones.
- **Temas Personalizables**: En el futuro, los usuarios podrán elegir entre varios temas visuales o incluso crear los suyos propios, adaptando la apariencia del dashboard a sus preferencias.
- **Accesibilidad**: La interfaz está diseñada teniendo en cuenta las mejores prácticas de accesibilidad, asegurando que sea utilizable por agricultores con diversas necesidades.

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

Aquí tienes una versión mejorada de la sección de Instalación y Configuración:

## 🛠️ Instalación y Configuración

### Prerrequisitos 📋

- Node.js (v14.0.0 o superior) 🟢
- npm (v6.0.0 o superior) 📦
- Cuenta en Auth0 🔐


### Pasos de Instalación 🚀

1. **Clonar el repositorio** 📥

```shellscript
git clone https://github.com/tu-usuario/terrapredict-dashboard.git
cd terrapredict-dashboard
```


2. **Instalar dependencias** 📚

```shellscript
npm install
```


3. **Configurar variables de entorno** ⚙️

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```plaintext
PORT=3001
SESSION_SECRET=tu_secreto_de_sesion
AUTH0_CALLBACK_URL='http://localhost:3001/callback'
AUTH0_CLIENT_ID=tu_client_id_de_auth0
AUTH0_CLIENT_SECRET=tu_client_secret_de_auth0
AUTH0_DOMAIN=tu_dominio_de_auth0
```

> Nota: Para el SESSION_SECRET, debes usar un valor aleatorio y único. Puede ser cualquier cadena de texto larga y compleja. Lo importante es que sea difícil de adivinar y que se mantenga en secreto, es un valor utilizado para cifrar las cookies de sesión. No está relacionado con Auth0 y debe mantenerse en secreto. Asegúrate de que sea único para tu aplicación y no lo compartas públicamente.

4. **Configurar Auth0** 🔒

a. Crear una cuenta y aplicación:

1. Regístrate en [Auth0](https://auth0.com/) si aún no tienes cuenta
2. En el dashboard, ve a "Applications" → "Create Application"
3. Nombre: "TerraPredict" (o el que prefieras)
4. Tipo: "Regular Web Applications"
5. Haz clic en "Create"


b. Configurar URLs:

1. En "Settings" de tu aplicación Auth0:

1. Allowed Callback URLs: `http://localhost:3001/callback`
2. Allowed Logout URLs: `http://localhost:3001`



2. Guarda los cambios


c. Obtener credenciales:

1. Copia de "Settings":

1. Domain
2. Client ID
3. Client Secret



2. Pega estos valores en tu archivo `.env`



5. **Inicializar la base de datos** 💾

La base de datos SQLite se inicializará automáticamente al ejecutar la aplicación por primera vez.


6. **Ejecutar la aplicación** 🚀

```shellscript
npm start
```

La aplicación estará disponible en `http://localhost:3001` 🌐




### Verificación Final ✅

Asegúrate de que tu archivo `.env` se vea así (con tus valores específicos):

```plaintext
PORT=3001
SESSION_SECRET=tu_secreto_de_sesion
AUTH0_CALLBACK_URL='http://localhost:3001/callback'
AUTH0_CLIENT_ID=tu_client_id_de_auth0
AUTH0_CLIENT_SECRET=tu_client_secret_de_auth0
AUTH0_DOMAIN=tu_dominio_de_auth0
```

> Asegúrate de reemplazar `tu_secreto_de_sesion`, `tu_client_id_de_auth0`, `tu_client_secret_de_auth0`, y `tu_dominio_de_auth0` con los valores reales de tu aplicación Auth0.

¡Listo! Tu aplicación TerraPredict debería estar configurada y lista para funcionar. 🎉


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

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia Apache License. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

TerraPredict - [info@terrapredict.com](mailto:info@terrapredict.com)

Link del Proyecto: [https://github.com/tu-usuario/terrapredict-dashboard](https://github.com/tu-usuario/terrapredict-dashboard)
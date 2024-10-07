# Proyecto de Aplicación Web con Vue.js

## Descripción
Este proyecto es una aplicación web desarrollada en **Vue.js 3**. Incluye un sistema de inicio de sesión, consulta de sucursales desde una API externa, y manejo de estado global utilizando **Pinia**. Está diseñado para ser responsive y fácil de usar.

## Tecnologías Utilizadas
- **Vue.js 3**: Framework JavaScript progresivo para la construcción de interfaces de usuario.
- **Vue Router**: Gestión de rutas para la navegación entre páginas.
- **Pinia**: Librería de manejo de estado global para Vue.js.
- **TailwindCSS**: Framework de CSS para diseño responsivo.
- **Axios**: Librería para hacer solicitudes HTTP.
- **Vee-validate**: Validación de formularios.
- **Pinia Plugin Persisted State**: Plugin para persistir el estado de Pinia entre sesiones.

## Requisitos del Sistema
- **Node.js** >= 12.x
- **NPM** >= 6.x

## Instalación y Configuración

### 1. Clonar el Repositorio
- **Clona este repositorio en tu máquina local utilizando el siguiente comando:**

- **git clone https://github.com/tu-usuario/tu-repositorio.git**

### 2. Acceder a la Carpeta del Proyecto
- **Accede al directorio del proyecto recién clonado:**

- **cd tu-repositorio**

### 3.Instalar Dependencias
- **Instala todas las dependencias necesarias con el siguiente comando:**

- **npm install**

### 4. Configuración de Tailwind CSS

- **Asegúrate de que Tailwind CSS esté configurado correctamente. Deberías tener un archivo tailwind.config.js en la raíz del proyecto con la siguiente configuración:**

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

- **Verifica también que el archivo src/style.css incluya las directivas de Tailwind CSS:**
  
- **@tailwind base;**
- **@tailwind components;**
- **@tailwind utilities;**

### 5. Ejecutar el Proyecto en Modo Desarrollo
- **Inicia el servidor de desarrollo local utilizando el siguiente comando:**

- **npm run dev**

### 6. Datos de contacto

- **Apellido y Nombre:**
- Aguirre, Richard Adrián
- 370-4381395

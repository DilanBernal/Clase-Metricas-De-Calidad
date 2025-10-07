### **Explicación de cada sección**
1. Cambiar los nombres de variables de entorno en el archivo .env, hacer las configuraciones necesarias
 
2. Podemos usar mysql o usamos Docker:
 - 🚀 ¿Qué es Docker?
Docker es una plataforma que permite crear, ejecutar y gestionar contenedores. Un contenedor es un entorno aislado donde puedes ejecutar aplicaciones con todas sus dependencias sin preocuparte por diferencias entre sistemas operativos o configuraciones.
   2.1 Instalar Docker Desktop:
      **2.1.2 https://www.docker.com/products/docker-desktop/** */
 
      Configurar opciones importantes
 
      Durante la instalación, te aparecerán algunas opciones:
 
      ✅ Habilitar WSL 2 (Recomendado)
 
         Si tienes Windows 11 Home, necesitas habilitar WSL 2 (Windows Subsystem for Linux).
         Docker lo instalará automáticamente si no lo tienes.
 
      ✅ Usar Hyper-V y Containers
 
         Docker usa Hyper-V y Windows Containers por defecto.
         Si te pregunta, activa ambas opciones.
 
      ✅ Ubicación de instalación
 
         Puedes dejar la predeterminada (C:\Program Files\Docker).
 
 - 🏗️ ¿Qué es Docker Compose?
Docker Compose es una herramienta que permite definir y ejecutar múltiples contenedores con un solo archivo YAML. Se usa cuando una aplicación requiere varios servicios (ejemplo: backend, base de datos, cache, etc.).
 
- 🌍 ¿Qué es Docker Hub?
 
Docker Hub es un registro público y privado de imágenes de Docker. Es como un "GitHub para contenedores", donde puedes almacenar, compartir y descargar imágenes de Docker.
 
- Aquí usaremos Docker compose para levantar todos los servicios
 
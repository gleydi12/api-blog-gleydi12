# PROYECTO DE API PARA EL MANEJO DE UNA BASE DE DATOS DE GESTION DE TAREAS (TODO LIST)

## Descripción

Este proyecto consiste en la creación de una API que permita el manejo de una base de datos de gestión de tareas (TODO List). La API permitirá la creación, modificación, eliminación y consulta de tareas. 

## Tecnologías

- Node.js para conectar con la base de datos
- Express con TypeScript como servidor web
- MySQL / MariaDB (usando la libreía mysql2) como base de datos

## Base de datos

La base de datos ya la tiene creada en MySQL, se llama `tareas` y tiene una tabla llamada `tareas` con los siguientes campos:

- id (int, autoincremental, primary key)
- titulo (varchar)
- completado (boolean)

## Crear un repositorio partiendo de este (plantilla)

Para crear un repositorio a partir de este, se debe hacer clic en el botón "Use this template" que se encuentra en la parte superior de la página del repositorio.

## Clonar el repositorio desde la terminal usando el repositorio creado a partir de la plantilla

Para clonar el repositorio desde la terminal, se debe ejecutar el siguiente comando:

```bash 
git clone <url del repositorio>
```

## Instalación

Para instalar las dependencias del proyecto, se debe ejecutar el siguiente comando:

```bash
npm install
```

## Ajustes en el archivo .env

Se debe actualizar el archivo llamado `.env` en la raíz del proyecto con las siguientes variables de entorno:

```bash
DB_HOST=localhost
DB_USER=AÑADIR_LA_CONTRASEÑA_DE_MARIADB_ACÁ
DB_PASSWORD=AÑADIR_LA_CONTRASEÑA_DE_MARIADB_ACÁ
DB_NAME=tareas o el nombre de la base de datos que tenga configurado en su base de datos
DB_PORT=3306 o el puerto que tenga configurado en su base de datos
```


## Ejecución

Para ejecutar el proyecto, se debe ejecutar el siguiente comando:

```bash
npm run dev
```

## Documentación de la API (Postman collection)

La documentación de la API se encuentra en el siguiente archivo de Postman:

```bash
API-TO-DO.json
```

## Importar la collection de Postman

Para importar la collection de Postman, se debe seguir los siguientes pasos:

1. Abrir Postman.
2. Hacer clic en el botón "Import" que se encuentra en la parte superior izquierda.
3. Seleccionar el archivo desde la carpeta del reposiorio.

## Endpoints para la API (/tareas)

- GET /tareas: Obtiene todas las tareas.
- GET /tareas/:id: Obtiene una tarea por su id.
- POST /tareas: Crea una nueva tarea.
- PUT /tareas/:id: Actualiza una tarea por su id.
- DELETE /tareas/:id: Elimina una tarea por su id.

## Autor

- Nombre: Carlos Andres Perez Ubeda
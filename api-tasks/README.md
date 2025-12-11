# 📌 Tasks API – Node.js + MySQL

API REST para gestionar tareas (crear, listar, actualizar y eliminar) utilizando **Node.js**, **Express** y **MySQL**.

---

## ⚡ Requisitos

- Node.js instalado
- MySQL instalado y corriendo
- Base de datos creada (`tasksdb`) con la tabla `tasks`:

```sql
CREATE TABLE tasks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(100) NOT NULL,
  descripcion TEXT,
  estado TINYINT DEFAULT 0
);

🚀 Instalación

Clona el proyecto o descarga el código.

Abre una terminal en la carpeta del proyecto.

Instala las dependencias:

npm install

▶️ Ejecutar la aplicación

Inicia el servidor:

node server.js


Si usas Nodemon para desarrollo:

npx nodemon server.js

Conexión con MySQL

La conexión se configura en db.js con tus credenciales de MySQL:

const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "tasksdb"
});

module.exports = db;
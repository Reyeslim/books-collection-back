# API REST y CORS con CRUD de Usuarios y Colecciones de Libros

## 📌 Objetivo del Ejercicio

El objetivo de este ejercicio es que construyas una aplicación **Full Stack** sencilla para gestionar usuarios y sus colecciones de libros. Aprenderás a consumir una API REST desde el frontend y a crear un backend con un CRUD básico.

## 📂 Funcionalidades

Vas a desarrollar:

- Un **frontend** sencillo en **HTML, CSS y JavaScript** que permita mostrar los usuarios y sus colecciones de libros.
- Un **backend** en **Node.js con Express** que maneje la información de los usuarios y libros.
- **Conexión con una API REST** ya creada.
- Implementar **CORS** correctamente para permitir la comunicación entre frontend y backend.

## 🎯 Requisitos

1. **Frontend:**

   - Página principal con dos botones:
   - Botón para **mostrar todos los usuarios**.
   - Botón para **mostrar todos los libros**.

2. **Backend:**
   - Crear un CRUD en Express para:
     - Obtener todos los usuarios (`GET /api/users`).
     - Obtener todos los libros (`GET /api/users`).

## 🔗 Endpoints Disponibles

**Usuarios:**

- `GET /api/users` → Obtener todos los usuarios.

**Libros:**

- `GET /api/books` → Obtener todos los libros.

## 🛠️ Pasos para Realizar el Ejercicio

### **1️⃣ Configurar el Frontend**

1. Crea un proyecto con **HTML, CSS y JavaScript**
2. Usa `fetch` o `axios` para consumir los endpoints de la API REST.
3. Crea una página y agrega dos botones:
   - Botón "Mostrar usuarios".
   - Botón "Mostrar libros".

### **2️⃣ Configurar el Backend**

1. Crea un servidor con **Express**.
2. Implementa las rutas mencionadas en los endpoints.
3. Asegúrate de usar **CORS** para permitir que el frontend se conecte al backend.

## 🚀 Bonus

Si terminas antes, intenta agregar:

- Un **loader** mientras se cargan los datos.
- Manejo de **errores y mensajes de confirmación**.
- Agrega un botón "Ver Colección" en cada usuario para hacer una petición a `GET /api/users/:id` y mostrar su colección de libros.

---

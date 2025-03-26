const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/users", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api-books-ac3j.onrender.com/users"
    );
    const users = response.data;
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los usuarios");
  }
});

app.get("/books", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api-books-ac3j.onrender.com/books"
    );
    const books = response.data;
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los libros");
  }
});

app.listen(3000, () => {
  console.log("Express está escuchando en http://127.0.0.1:3000");
});

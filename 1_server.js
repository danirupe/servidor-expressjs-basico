const express = require("express");

const app = express();
const port = 8060;

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(port, () => {
  console.log(`Servidor activo en http://localhost:${port}`);
});

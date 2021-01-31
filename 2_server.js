const express = require("express");
const app = express();
const port = 8060;

let nombre = "Daniel";
let apellidos = "Ruiz";

let aficiones = ["Crossfit", "Programar", "Fútbol"];

function mostrarAficiones() {
  let contenido = "";
  aficiones.forEach((aficion) => {
    contenido += `<li>${aficion}</li>`;
  });
  return contenido;
}

let libros = [
  {
    titulo: "Clean Code JavaScript",
    autor: "Miguel A. Gómez",
  },
  {
    titulo: "Building frontend web apps with plain JavaScript",
    autor: "Gerd Wagner",
  },
];

function mostrarLibros() {
  let contenidoLibros = "";
  for (let i = 0; i < libros.length; i++) {
    contenidoLibros += `<li><b>${libros[i].titulo}:</b> ${libros[i].autor}</li>`;
  }
  return contenidoLibros;
}

let cantidadLibros = libros.length;
let visitas = 0;

app.get("/", (req, res) => {
  res.sendFile("/2_bienvenida.html", { root: __dirname });
});

app.get("/nombre", (req, res) => {
  res.send(`<html><body><h1>Mi nombre es: ${nombre}</h1></body></html>`);
});

app.get("/apellidos", (req, res) => {
  res.send(
    `<html><body><h1>Mis apellidos son: ${apellidos}</h1></body></html>`
  );
});

app.get("/aficiones", (req, res) => {
  res.send(
    `<html><body>
          <h1>Mis aficiones son:</h1>
          <ul>
            ${mostrarAficiones()}
          </ul>
        </body></html>`
  );
});
app.get("/aficiones", (req, res) => {
  res.send(
    `<html><body>
          <h1>Mis aficiones son:</h1>
          <ul>
            ${mostrarAficiones()}
          </ul>
        </body></html>`
  );
});

app.get("/libros", (req, res) => {
  res.send(
    `<html><body>
          <h1>Mis libros:</h1>
          <ul>
            ${mostrarLibros()}
          </ul>
        </body></html>`
  );
});

app.get("/libros/cantidad", (req, res) => {
  res.send(
    `<html><body>
          <h1>Cantidad de libros: ${cantidadLibros}</h1>
        </body></html>`
  );
});

app.get("/visitas", (req, res) => {
  visitas++;
  res.send(
    `<html><body><h1>La web ha recibido: ${visitas} visitas</h1></body></html>`
  );
});

app.listen(port, () => {
  console.log(`Servidor activo en http://localhost:${port}`);
});

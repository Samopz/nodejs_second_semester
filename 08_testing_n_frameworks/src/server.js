const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.header("Content-Type", "text/html");
  res.write("<h2>Hello World from get!</h2>");
  res.end();
});
app.post("/", (req, res) => {
  res.header("Content-Type", "text/html");
  res.write("Hello World from Post!");
  res.end();
});
// app.put("/", (req, res) => {
//   res.header("Content-Type", "text/html");
//   res.write("<h1>Hello World from put!</h1>");
//   res.end();
// });

app.get("/books", (req, res) => {
  res.write("Hello books!");
  res.write("Hello books!");
  res.write("Hello books!");
  res.write("Hello books!");
  res.write("Hello books!");
  res.end();
});

app.get("/books/more", (req, res) => {
  res.send({ message: "Hello books!", more: true });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

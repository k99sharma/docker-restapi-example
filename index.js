import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  return res.end("Welcome to my page!");
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT:${PORT}`);
});

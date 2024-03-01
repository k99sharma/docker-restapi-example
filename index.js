import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Person from "./Person.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

const dbUri = "mongodb://mongodb:27017/dockerRestApi";
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("DB connection successful.");
  })
  .catch((err) => {
    console.log("DB connection failed.");
    console.error(err);
  });

app.get("/", (req, res) => {
  const person = new Person({
    firstName: "Jon",
    lastName: "Doe",
    age: 23,
  });

  person
    .save()
    .then(() => {
      console.log("Person is saved.");
    })
    .catch((err) => {
      console.log("Person is not saved.");
      console.error(err);
    });

  return res.send({ person });
});

app.listen(PORT, () => {
  console.log(`Application Environment: ${process.env.ENV}`);
  console.log(`Server is running at PORT:${PORT}`);
});

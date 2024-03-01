import mongoose from "mongoose";

const Schema = mongoose.Schema;

const personSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const Person = mongoose.model("Person", personSchema);

export default Person;

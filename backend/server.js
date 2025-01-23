const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todos");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost/todolist");

app.use("/api/todos", todoRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require("fs");
const jsonServer = require("json-server");

const jsonMiddleware = jsonServer.router("db.json");

const app = express();
dotenv.config();

const todoRoutes = require("./routes/todo");

app.use(express.json());
app.use(cors());
app.use("/api", jsonMiddleware, todoRoutes);

app.get("/", (req, res) => {
    const todo = JSON.parse(fs.readFileSync("db.json")).todos;
    res.status(200).json(todo);
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running on port " + process.env.PORT || 3001);
});

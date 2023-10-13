const fs = require("fs");
exports.getTodos = async (req, res) => {
  try {
    const todo = JSON.parse(fs.readFileSync("db.json")).todos;
    res.status(200).json(todo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.addTodos = async (req, res) => {
  const todo = req.body;
  try {
    const id = JSON.parse(fs.readFileSync("db.json")).todos.length + 1;
    const todos = JSON.parse(fs.readFileSync("db.json")).todos;
    todos.push({ ...todo, id });
    fs.writeFileSync("db.json", JSON.stringify({ todos }));
    res.status(201).json("Todo added successfully!");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.updateTodos = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const todos = JSON.parse(fs.readFileSync("db.json")).todos;
    const index = todos.findIndex((todo) => todo.id === id);
    todos[index] = { id, title, completed };
    fs.writeFileSync("db.json", JSON.stringify({ todos }));
    res.status(200).json("Todo updated successfully!");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.deleteTodos = async (req, res) => {
  const { id } = req.params;
  try {
    const todos = JSON.parse(fs.readFileSync("db.json")).todos;
    const index = todos.findIndex((todo) => todo.id === id);
    todos.splice(index, 1);
    fs.writeFileSync("db.json", JSON.stringify({ todos }));
    res.status(200).json("Todo deleted successfully!");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

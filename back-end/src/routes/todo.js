const express = require("express");
const router = express.Router();
const {
  getTodos,
  addTodos,
  updateTodos,
  deleteTodos,
  getTodoById,
} = require("../controller/todo");

router.get("/todos", getTodos);
router.post("/todos", addTodos);
router.put("/todos/:id", updateTodos);
router.delete("/todos/:id", deleteTodos);
router.get("/todos/:id", getTodoById);

module.exports = router;

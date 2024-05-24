import { Router } from "express";
import { addTodo, updateTodo } from "../controller/todoController.js";

const todoRouter = Router();

// create
todoRouter.post("/createTodo", addTodo);

// update
todoRouter.post("/updateTodo/:id", updateTodo);

// // delete
// todoRouter.delete("/deleteTodo/:id")

// // read
// todoRouter.get("/getTodo",)

export default todoRouter;

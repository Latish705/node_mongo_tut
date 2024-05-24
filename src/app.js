import express from "express";
import todoRouter from "./routes/todoRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/todo", (req, res) => {});

// create todo
app.use("/todo", todoRouter);

//

// http://localhost:3000/todo/getTodo

export default app;

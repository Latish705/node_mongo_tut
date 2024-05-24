import { TodoModel } from "../model/todoModel.js";

export const addTodo = async (req, res) => {
  try {
    console.log(req.body);
    const { name, status } = req.body;
    if (!name || !status) {
      return res.status(400).send({
        success: false,
        message: "Name and status not provided",
      });
    }

    const todo = TodoModel.create({
      name,
      status,
    });

    if (!todo) {
      return res.status(400).send({
        success: false,
        messsage: "Couldn't able to create todo on mongo",
      });
    }

    return res.status(201).send({
      success: true,
      message: "Todo created successfully",
    });

    //collection todo
    // name status _id
  } catch (error) {
    console.log("Creating Todo failed ", error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(201).send({
        success: false,
        message: "Id not provided",
      });
    }
    const existingTodo = await TodoModel.findById(id);
    if (!existingTodo) {
      return res.status(201).send({
        success: false,
        message: "Todo not found with this id",
      });
    }
    const updateTodo = await TodoModel.updateOne(
      { _id: id },
      { $set: { status: true } }
    );

    const updatedTodo = await TodoModel.findOne({ _id: id });

    return res.status(200).send({
      success: true,
      message: "Update todo successfully",
    });
  } catch (error) {
    console.log("Updating todo failed", error);
  }
};

// const deleteTodo =

// const getTodo =

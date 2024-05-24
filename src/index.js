// run server => databases started successfully

import { connnectDb } from "./config/connectDb.js";
import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
connnectDb()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server started successfully at http://localhost:3000");
    });
  })
  .catch(() => {
    console.log("Server not started successfully");
  });

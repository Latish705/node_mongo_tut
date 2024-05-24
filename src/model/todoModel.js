import mongoose,{Schema} from "mongoose";

const todoSchema = new Schema({
    name:{
      type:String,   // "lksjdfl;js +"
      required:true,  // required
    },
    status:{
      type:Boolean,  // T F
      required:true,
    },
})


export const TodoModel = mongoose.model("Todo",todoSchema);  // todos 

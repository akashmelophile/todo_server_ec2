//define ur model schema
import mongoose, { mongo } from "mongoose";

//todo document structure 
const todoSchema=mongoose.Schema({
    todo:{type:String,require:true,unique:true}
})
//we are creating collections with name called todos with todoschema
const todoCollection=mongoose.model("todos",todoSchema)

export default todoCollection;
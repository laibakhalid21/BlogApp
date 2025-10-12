import mongoose from "mongoose";


const postSchema=new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true,
    },
    description:{
        type:String,
        unique:true,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    username:{
        type:String,
    },
},{timestamps:true}) //for createdat updateat by default when user creatd

const postModel =
  mongoose.models.Post || mongoose.model("Post", postSchema);

export default postModel;
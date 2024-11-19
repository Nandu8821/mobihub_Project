
const mongoose= require("mongoose");
const userlogSchema= new mongoose.Schema({
    googleId:String,
    displayName:String,
    email:String,
    image:String,
    role:{
        type:String,
        default:"user"
    }
}, {timestamps:true});

const userdb= new mongoose.model("loginuser", userlogSchema);
module.exports=userdb;
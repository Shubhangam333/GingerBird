const mongoose = require('mongoose');
const {ObjectId}=mongoose.Schema.Types;
const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        default:"https://res.cloudinary.com/walli/image/upload/v1601202527/m7nfpsuvux4za52y8klk.jpg"
    },
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
});

mongoose.model("User",UserSchema);
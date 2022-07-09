import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        maxlength: 22,
    },
    email:{
        type:String,
        required:true,
        unique : true,
        index : true
    },
    password:{
        type: String,
        required: true,
        trim:true
   
    },
   
},
     { timestamps: true }
);

export default  mongoose.models.User || mongoose.model("User", UserSchema);
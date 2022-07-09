import mongoose from "mongoose";


const contactSchema  = new mongoose.Schema({
     name:{
         type:String
     },
     email:{
         type:String,
     },
     phone:{
         type: Number,
     },
     message: {
         type:String
     }
})


export default  mongoose.models.Contact ||  mongoose.model("Contact", contactSchema);
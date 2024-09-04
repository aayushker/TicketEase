const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        //require:true
    },
    Email:{
        type:String,
        //require:true
    },
    PhoneNo:{
    type:Number,
   // require:true
    },
    DOB:{
    type:Number,
   //require:true
    },
    Password:{
        type:String,
        //require:true
    }
})
module.exports=mongoose.model("user",userSchema)
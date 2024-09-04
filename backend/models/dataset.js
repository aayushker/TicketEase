const mongoose=require('mongoose');
const dataSchema=new mongoose.Schema({
    Number:{
        type:Number,
        require:true
    },
    Name:{
    type:String,
    require:true
    },
    CityTown:{
        type:String,
        require:true
    },
    StateTerritory:{
        type:String,
        require:true
    }
   
})
module.exports=mongoose.model("dataset",dataSchema)
const mongoose = require("mongoose") 
    const umbrellaSchema = mongoose.Schema({ 
    color: String, 
    cost: {
        type:Number,
        min:2,
        max:12,} ,
    hieght: Number 
    }) 
 
    module.exports = mongoose.model("Umbrella", umbrellaSchema) 
const mongoose = require("mongoose") 
    const umbrellaSchema = mongoose.Schema({ 
    color: String, 
    cost: Number, 
    hieght: Number 
    }) 
 
    module.exports = mongoose.model("Umbrella", umbrellaSchema) 
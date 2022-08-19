const mongoose = require("mongoose")

let bookSchema1 = new mongoose.Schema({
    name : String, 
    author_id :{ type : Number, required : 1}, 
    price: Number, 
    Ratings : Number

},{timestamps :true})

module.exports = mongoose.model("Newbook",bookSchema1) 

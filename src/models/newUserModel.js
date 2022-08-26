const mongoose = require("mongoose")

// _id: ObjectId("61951bfa4d9fe0d34da86829"),
// name: "Sabiha Khan",
// balance:100, // Default balance at user registration is 100
// address:"New delhi",
// age: 90,
//  gender: “female” // Allowed values are - “male”, “female”, “other”
// isFreeAppUser: false // Default false value.
// }

//------SCHEMA Created-------
const userSchema = new mongoose.Schema({
name : String,
balance : {
    type:Number,
     default:100
    },
address : String,
age : Number,
gender: {
    type: String,
    enum: ["male", "female", "LGBTQ"]
},
isFreeAppUser:{
    type : Boolean,
     default :false
    }
    
}, {timestamps: true})

module.exports = mongoose.model('buyer', userSchema)  //Buyers
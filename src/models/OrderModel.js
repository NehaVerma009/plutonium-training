const mongoose = require("mongoose")

const ObjectId = mongoose.Schema.Types.Mixed

// _id: ObjectId("61951bfa4d9fe0d34da86344"),
// 	userId: “61951bfa4d9fe0d34da86829”,
// 	productId: “61951bfa4d9fe0d34da86344”
// 	amount: 0,
// 	isFreeAppUser: true, 
// 	date: “22/11/2021”
// }

//------SCHEMA Created-------

const orderSchema = new mongoose.Schema({
    userId : {type :ObjectId,
    ref: "buyer"   } ,
    productId: {type: ObjectId,
    ref: "products"},
    amount: Number,
    isFreeAppUser: {
        type: Boolean, 
        default : false
    },
    date: String
},{timestamps : true})

module.exports = mongoose.model('Order', orderSchema) //Orders
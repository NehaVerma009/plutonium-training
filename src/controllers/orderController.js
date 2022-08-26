const { headercheck } = require("../middlewares/commonMiddlewares");
const newUserModel = require("../models/newUserModel");
const OrderModel = require("../models/OrderModel");
let createOrder = require("../models/OrderModel");
const productModels = require("../models/productModels");
//const userModel = require("../models/userModel");

let createdOrder = async function (req, res) {
  let order = req.body;
  let header2 = req.headers["isfreeappuser"]
  order["isfreeappuser"]= header2
  const{userId,productId} = order                //destructuring
  
  if (!order.userId) {
    return res.send("Please Enter User ID!");
  }
  if (!order.productId) {
    return res.send("Please Enter User ID");
  }

  let userIdCheck = await newUserModel.findById(order.userId);
  let productIdCheck = await productModels.findById(order.productId);
  if (!(userIdCheck && productIdCheck)) {
    return res.send({ msg: "UserId or ProductId is invalid" });
  }


 
  if(order.isfreeappuser=== "true"){
    let order = req.body
    order.amount = 0
    req.body.isFreeAppUser= true 
    
    let savedOrder = await createOrder.create(order)
    //console.log(savedOrder)
    return   res.send(savedOrder)
      
  }else{

    order.amount = productIdCheck.price}
    if(userIdCheck.balance< productIdCheck.price){
      return res.send({msg : " User does not have sufficient Balance"})
      
    }else{
      let amount = productIdCheck.price
    let user = await newUserModel.findOneAndUpdate(
      {_id:userId},     //condition
      {$inc: {balance: -amount}},    //updation
      {new: true})     //return updated value

      console.log(user)
      
    }
    
  
  let date = new Date()

  order.date = date.toLocaleDateString()

  let savedOrder = await createOrder.create(order);

  res.send({ data: savedOrder });
};


module.exports.createdOrder = createdOrder;

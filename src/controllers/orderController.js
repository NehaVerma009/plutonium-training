const { headercheck } = require("../middlewares/commonMiddlewares");
const newUserModel = require("../models/newUserModel");
const OrderModel = require("../models/OrderModel");
let createOrder = require("../models/OrderModel");
const productModels = require("../models/productModels");

let createdOrder = async function (req, res) {
  let order = req.body;
  let header2 = req.headers["isfreeappuser"]
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

  if(order.isfreeappuser== true){
    order.amount = 0
  }else{
    order.amount = productIdCheck.price

  }

  let savedOrder = await createOrder.create(order);



  res.send({ data: savedOrder });
};


module.exports.createdOrder = createdOrder;

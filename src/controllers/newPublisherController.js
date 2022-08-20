const newPublisherModel= require("../models/newPublisherModel")

const Publisher = async function(req, res){
    let publisher1 = req.body
    let savedPublisher= await newPublisherModel.create(publisher1)
    res.send({msg:savedPublisher})

}
  
module.exports.Publisher= Publisher


let createProduct = require("../models/productModels")

let createdProduct= async function (req, res){
let product = req.body
let savedProduct = await  createProduct.create(product)
res.send({data : savedProduct})
}

module.exports.createdProduct = createdProduct
let createUser = require("../models/newUserModel")


let createdUser = async function (req, res){
let user = req.body

let savedUser = await  createUser.create(user)
res.send({data : savedUser})

}

module.exports.createdUser = createdUser
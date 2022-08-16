const bookModels= require("../models/bookModels")

const createBook = async function (req, res){
let data = req.body

let savedData = await bookModels.create(data)

res.send({message:savedData})

}

const getBookData = async function (req, res){
    let allBookData = await bookModels.find()

    res.send ({message : allBookData})

}

module.exports.createBook = createBook

module.exports.getBookData = getBookData
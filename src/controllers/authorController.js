const authorModel= require("../models/authorModel")
const BookModel2 = require ("../models/bookModel2")


let createAuthor = async function(req, res){
    let data= req.body
    let savedAuthor = await authorModel.create(data)
    res.send({msg : savedAuthor})
}

let createBook2 = async function(req, res){

    let data = req.body
    let savedBook = await BookModel2.create(data)
    res.send({msg : savedBook})

}

let getBook = async function (req, res){
    

    let authorData  = await authorModel.find({author_name: "Chetan Bhagat"})
    let getId = authorData[0].author_id
    let bookData = await BookModel2.find({author_id : getId}).select({name : 1})
    
    res.send({msg: bookData})

}

let updatedBook = async function (req, res){

    let priceOfBook = await BookModel2.findOneAndUpdate(
        {name:"Two states"},//condition 
        {$set: {price:100}},//to update
        {new : true} //to give back updated value

    )
let fetchId = priceOfBook.author_id
let getAuthorName = await authorModel.find({author_id:fetchId}).select({author_name :1,_id :0, })
let getUpdatedPrice = await BookModel2.find({name:"Two states"}).select({price: 1, _id : 0})

    res.send({msg: getAuthorName ,getUpdatedPrice})
    //console.log(fetchId)
    }

let rangeOfBook =async function(req, res){
    let range = await BookModel2.find({price:{$gte:50, $lte :100}}).select({author_id :1, _id:0})
    let abc = range.map(x=>x.author_id)
    let updatedRange = await authorModel.find({author_id:abc}).select({author_name:1 , _id:0})
    res.send(updatedRange)
} 


module.exports.createAuthor = createAuthor
module.exports.createBook2 = createBook2
module.exports.getBook = getBook
module.exports.updatedBook= updatedBook
module.exports.rangeOfBook= rangeOfBook

const newAuthorModel = require("../models/newAuthorModel")

const createAuthor = async function (req, res){
    let author = req.body
    let savedAuthor = await newAuthorModel.create(author)
    res.send({msg: savedAuthor})

}

module.exports.createAuthor= createAuthor
const newBookModel = require("../models/newBookModel");
const newAuthorModel = require("../models/newAuthorModel");
const newPublisherModel = require("../models/newPublisherModel");


const createBook = async function (req, res) {
  let book = req.body;
  if (!book.author) {
    return res.send("Author is required");
  }
  if (!book.publisher) {
    return res.send("Publisher is required");
  }
  let checkauthor = await newAuthorModel.findById(book.author);
  if (!checkauthor) {
    return res.send("Author is not present in collection");
  }
  let checkpublisher = await newPublisherModel.findById(book.publisher);
  if (!checkpublisher) {
    return res.send("Publisher is not present in Collection");
  }

  let savedBook = await newBookModel.create(book);
  res.send({ msg: savedBook });
};

const allBooks = async function (req, res) {
  let books = await newBookModel
    .find()
    .populate("author")
    .populate("publisher");
  res.send(books);
};

const updatedHardCover = async function (req, res) {
  let publisherId = await newPublisherModel
    .find({ name: ["Penguin", "HarperCollins"] }).select({ _id:1});
  let book1 = await newBookModel.updateMany(
    {publisher: publisherId}, //condition
     {isHardCover: true},   //update
     {upsert:true}  //update and Insert new value
     );

     let authorIds=await newAuthorModel.find({rating:{$gt:3.5}}).select({_id:1})
     let book2=await newBookModel.updateMany({author:authorIds},{$inc:{price:10}})

 

   res.send("Updation Done ");
};

module.exports.createBook = createBook;
module.exports.allBooks = allBooks;
module.exports.updatedHardCover = updatedHardCover;

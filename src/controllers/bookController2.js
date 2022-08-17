const bookModel = require ('../models/bookmodel2')

const createBook2 = async function (req, res ){
    let data = req.body

    let savedData = await bookModel .create(data)
    res.send ({msg : savedData })

}

const bookList2 = async function (req, res){
    let allBooks = await bookModel. find().select({bookName: 1, authorName :1, _id :0})
     res.send ({msg: allBooks})
    
}
const getBooksInYear = async function (req, res){
    let booksYear = req.query.year
    let BooksInYear = await bookModel.find({year : booksYear }).select({ bookName : 1})
    res.send({msg : BooksInYear})
}

const getParticularBooks = async function(req, res){
    let particularBook = req.query.authorName
    let getAllBook = await bookModel.find({authorName : particularBook})
    res.send({msg : getAllBook})
}

const getXINRBooks = async function (req, res){
    
    let getBook =  await bookModel.find({$or:[{"price.indianPrice":"Rs 100"},{"price.indianPrice":"Rs 200"},{"price.indianPrice":"Rs 500"}]}).select({ authorName:1,bookName:1, price :{indianPrice :1}, _id:0})
    res.send( {msg: getBook}  )

}

const getRandomBooks = async function (req, res ){
    let randomBook = await bookModel.find({$or: [{stockAvailable :true} ,{totalPages: {$gt : 200} }] })
    res.send({msg : randomBook})

}

module.exports.createBook2 = createBook2
module.exports.bookList2 = bookList2
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks
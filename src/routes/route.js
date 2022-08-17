const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const BookController2 = require ('../controllers/bookController2')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/createBook2", BookController2.createBook2)

router.get ("/bookList2", BookController2.bookList2)

router.get ("/getBooksInYear",BookController2.getBooksInYear)

router.get ("/getParticularBooks",BookController2.getParticularBooks)

router.get ("/getXINRBooks",BookController2.getXINRBooks )

router.get ("/getRandomBooks",BookController2.getRandomBooks)

module.exports = router;
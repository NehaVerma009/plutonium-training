const express = require('express');
//const Assignment1= require('../logger/logger')
//const Assignment2 = require('../validator/formatter')
//const Assignment3 =require('../util/helper')
const Assignment4 = require('../chunk/chunk')
const router = express.Router();

router.get('/test-me', function (req, res) {
//console.log('----------------Problem 1-----------')

   // Assignment1.test()

    //console.log('-------------Problem 2-----------')

    //Assignment2.toUpperCase()

    //console.log('-------------Problem 3--------------------')

    //  Assignment3.Bat()
    //  Assignment3.months()
    //  Assignment3.info()
    console.log('----------Problem 4 --------------')

    console.log('****Using Chunks*****')

    Assignment4.chunks()

    console.log('*****Using Tail******')

    Assignment4.tailed()

    console.log('*****Using fromPairs******')

    Assignment4.keyValue()

    console.log('*****Using union******')
    Asssignment4.uniqueArr()


    //res.send('Welcome to my Profile. I am '+ Assignment1.name+'  and a part of FunctionUp Plutonium cohort.')
    //res.send('Data Changed to Upper Case , lower Case & trimmed')
    res.send('This is Batch Data')
});


module.exports=router; 
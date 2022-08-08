const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})
//Array 

let movies= ['Don', 'Rang De Basanti','Silent Sea','Chak De India']

//     router.get('/movies', function(req, res){
//        //print movies
//         res.send (movies)


// })

//to get element from indexnumber
//  router.get('/movies/:indexNumber', function (req, res){
//     let requestParams = req.params.indexNumber
    
//     //res.send(movies[requestParams])
// })

//  router.get('/movies/:indexNumber',function(req,res){
//     const movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
//     let reqParams=req.params;
//     let index=reqParams.indexNumber;
//     if(index>=0 && index<=movies.length){
//         res.send(movies[index])
//     }
//     else{
//         res.send("Input Valid Index")
//     }
// })
// //Problem 4

// router.get('/films', function(req, res){
//     let arr = [ {
//         'id': 1,
//         'name': 'The Shining'
//        }, {
//         'id': 2,
//         'name': 'Incendies'
//        }, {
//         'id': 3,
//         'name': 'Rang de Basanti'
//        }, {
//         'id': 4,
//         'name': 'Finding Nemo'
//        }]
    

//     res.send(arr)
// })

//Problem 5

router.get('/films/:filmId', function(req, res){
    let list= [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       let requestParams = req.params
       let index=requestParams.filmId;
if(filmId==id[i]){
    res.send([i])


}

else{
    res.send()

}
})


module.exports = router;
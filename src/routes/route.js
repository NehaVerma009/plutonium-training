const { request } = require('express');
const express = require('express');
const router = express.Router();

router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random", function (req, res) {
    res.send("hi there")
})


router.get("/test-api", function (req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2", function (req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5", function (req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6", function (req, res) {
    res.send({ a: 56, b: 45 })
})

router.post("/test-post", function (req, res) {
    res.send([23, 45, 6])
})


router.post("/test-post-2", function (req, res) {
    res.send({ msg: "hi", status: true })
})

router.post("/test-post-3", function (req, res) {
    let id = req.body.user
    let pwd = req.body.password

    console.log(id, pwd)

    console.log(req.body)

    res.send({ msg: "hi", status: true })
})



router.post("/test-post-4", function (req, res) {
    let arr = [12, "functionup"]
    let ele = req.body. 
    arr.push(ele)
    res.send({ msg: arr, status: true })
})




// let players =
//     [
//         {
//             "name": "manish",
//             "dob": "1/1/1995",
//             "gender": "male",
//             "city": "jalandhar",
//             "sports": [
//                 "swimming"
//             ]
//         },
//         {
//             "name": "gopal",
//             "dob": "1/09/1995",
//             "gender": "male",
//             "city": "delhi",
//             "sports": [
//                 "soccer"
//             ],
//         },
//         {
//             "name": "lokesh",
//             "dob": "1/1/1990",
//             "gender": "male",
//             "city": "mumbai",
//             "sports": [
//                 "soccer"
//             ],
//         },
//     ]
// //Write a POST /players api that creates a new player ( i.e. that saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data)

// router.post('/players', function (req, res) {
//     let newPlayer = req.body
//     let newPlayersName = req.body.name


//     for (i = 0; i < players.length; i++) {
//         let object = players[i]

//         if (object.name == newPlayer.name) {

//             return res.send("This Player already exists")
//         }

//     }
//     players.push(newPlayer)
//     //LOGIC WILL COME HERE
//     res.send({ data: players, status: true })
// })


///------------Booking Problem ----------///


//Write an api that books a slot for a player with relevant details. The api looks like POST /players/playerName/bookings/bookingId

// Ensure the below conditions:
//1. PlayerName and bookingId are path params You have to ensure the playerName received must exist in the players collection. If the playerName doesn’t exist in the players collection return an error message that says something relevant about player not being found.	
// 2. For a valid playerName check if the bookingId is already present in the player’s booking. Again, for a repeated bookingId send an error message conveying the booking was already processed. For a relevant booki ngId(which is new), add the booking object from request body to bookings array

// let Players =  [{
//         "name": "manish",
//         "dob": "1/1/1995",
//         "gender": "male",
//         "city": "jalandhar",
//         "sports": [
//             "swimming"
//         ],
//     'bookingNumber': 1,
//         'sportId': ' ',
//         'centerId': ' ',
//         'type': 'private',
//         'slot': '16286598000000',
//         'bookedOn': '31/08/2021',
//         'bookedFor': '01/09/2021'
//     },
//     {
//         "name": "gopal",
//         "dob": "1/09/1995",
//         "gender": "male",
//         "city": "delhi",
//         "sports": [
//             "soccer"
//         ],
//         'bookingNumber': 2,
//         'sportId': ' ',
//         'centerId': ' ',
//         'type': 'private',
//         'slot': '16286598000000',
//         'bookedOn': '31/08/2021',
//         'bookedFor': '01/09/2021'
//     },
//     {
//         "name": "lokesh",
//         "dob": "1/1/1990",
//         "gender": "male",
//         "city": "mumbai",
//         "sports": [
//             "soccer"
//         ],
//         'bookingNumber': 3,
//         'sportId': ' ',
//         'centerId': ' ',
//         'type': 'private',
//         'slot': '16286598000000',
//         'bookedOn': '31/08/2021',
//         'bookedFor': '01/09/2021'
//     },

// ]

// router.post("/players/playerName/bookings/bookingId", function (req, res) {
//     let Players = req.params
//     let newPlayerName = req.params.name
    
//     for (i=0 ; i< Players.length; i++){
//         let object = Players[i]



//         if(object.name !== newPlayerName){

//             res.send ("This player doesn't exist ")

//         }
        
//     }
 
    
//     res.send()
// })



//---------Voting Problem ---------------

//You will be given an array of persons (i.e. an array of objects)..each person will have a {name:String, age:Number ,votingStatus :True/false(Boolean)} take input as query param as votingAge..and for all the people above that age , change votingStatus as true,also return an array consisting of only the person that can vote.

//WRITE A POST API TO THE ABOVE, take this as sample for array of persons:
let persons= 
[{
    name: "PK",
    age:10,
    votingStatus: false
},
{
    name: "SK",
    age:20,
    votingStatus: false
},
{
    name: "AA",
    age:70,
    votingStatus: false
},
{
    name: "SC",
    age:5,
    votingStatus: false
},
{
    name: "HO",
    age:40,
    votingStatus: false
}
 ]

 router.post ("/persons", function(req, res ){
    
    let personsEligibilityAge = req.query.age
    let perAge =" "

    for (i=0; i < persons.length; i++){
        perAge = persons[i].age

        if (perAge >= personsEligibilityAge){
            persons[i].votingStatus = true;
            
        }

        }
        let output = persons.filter(x=>x.votingStatus==true)
        res.send(output)


 })


module.exports = router;
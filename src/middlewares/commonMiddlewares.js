const bodyParser = require("body-parser")
const UserController1 = require("../controllers/newUserController")
// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }
const headercheck = function (req, res, next){
    let header = req.headers.isfreeappuser
    if(!header){
        return res.send(" The request is missing a mandatory header")
    } 
    req.isfreeappuser=header

    next()
}

module.exports.headercheck =headercheck







// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4


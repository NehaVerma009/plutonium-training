const jwt = require('jsonwebtoken')

let validating = async function(req,res,next){
let token = req.headers["x-Auth-token"]||req.headers["x-auth-token"];  //case sensitive
//   if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error. This means the user is not logged in.
  if (!token) return res.send({ status: false, msg: "token must be present" });

  //try & catch is used for error handling
  try{
    let decoded = jwt.verify(token,'functionup-plutonium-very-very-secret-key')
  }

catch(error){
 //console.log(error)
    return res.send({msg:error.message})
  }
  try{
    let decoded =  jwt.verify(token,'functionup-plutonium-very-very-secret-key')
    let userToModify = req.params.userId
    let userLoggedIn= decoded.userId
    if(userToModify!=userLoggedIn){
      return res.send({msg: " UnAuthorized User !"})
    }else{userId}
  }


  catch (error){}

  next()
}
  

  // let authorize = async function (req, res, next){
  //   let decoded = jwt.verify(token,'functionup-plutonium-very-very-secret-key')
  //   let userToModify = req.params.userId
  //   let userLoggedIn= req.decoded.userId
  //   if(userToModify!=userLoggedIn){
  //     return res.send({msg: " UnAuthorized User !"})
  //   }
  //   console.log(token)
  //   next()
  // }


  module.exports.validating = validating
  
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

/*
  Read all the comments multiple times to understand why we are doing what we are doing in login api and getUserData api
*/

const createUser = async function (req, res) {
  try{
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = req.body;
  if(Object.keys(data).length!= 0){
    let savedData = await userModel.create(data);
  //console.log(req.newAtribute);

 res.status(201).send({ msg: savedData });
 }
else
res.status(400).send({msg:"BAD REQUEST"})
}
catch(err){
  console.log("This is the error :",err.message)
  res.status(500).send({msg:"Error",error:err.message})
}
}

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

   let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(404).send(
      {
      status: false,
      msg: "username or the password is not correct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret (This is basically a fixed value only set at the server. This value should be hard to guess)
  // The same secret will be used to decode tokens 
  let token = jwt.sign(
    {//--------Payload--------------------
      userId: user._id.toString(),
      batch: "plutonium",
      organisation: "FunctionUp",
    },//---------------------------Secret Key -----------------------------
    "functionup-plutonium-very-very-secret-key"
  );
  res.setHeader("x-auth-token", token);
  
  res.status(200).send({ status: true, data: token });
  }
  catch(err){
    console.log("This is the error:",err.message)
    res.status(500).send({msg:err.message})
  }
};


const getUserData = async function (req, res) {
  
  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself

  // Decoding requires the secret again. 
  // A token can only be decoded successfully if the same secret was used to create(sign) that token.
  // And because this token is only known to the server, it can be assumed that if a token is decoded at server then this token must have been issued by the same server in past.
  // let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
  // if (!decodedToken)
  //   return res.send({ status: false, msg: "token is invalid" });
try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails){
    return res.status(404).send({ status: false, msg: "No such user exists" });
  }
  res.status(200).send({ status: true, data: userDetails });
}
  // Note: Try to see what happens if we change the secret while decoding the token
  catch(err){
    console.log("This is the error:",err.message)
    res.status(500).send({msg:err.message})
  }

};

//async keyword are used before function & it returns promises
const updateUser = async function (req, res) {
  // Do the same steps here:
  // Check if the token is present
  // Check if the token present is a valid token
  // Return a different error message in both these cases
try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(404).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.status(200).send({ status: updatedUser, data: updatedUser });
}
catch(err){
  console.log("This is the error:",err.message)
  res.status(500).send({msg:err.message})
}
};

let deleteUser= async function(req, res){
try{
  let userId = req.params.userId;
let user = await userModel.findById(userId);
  if(!user){
    return res.status(404).send("User doesnot exists !")
  }

  let deletedUser = await userModel.findOneAndUpdate(
    {_id: userId}, //condition
    {$set:{isDeleted:true}},//update
    {new:true})//return updated value,);
    
     token = req.headers["x-auth-token"]
  if(!token){
    return res.status(401).send({status: false, msg: "Please enter token"})
    }
    res.status(200).send({status :deletedUser, data: deletedUser })
  }
  catch(err){
    console.log("This is the error:",err.message)
    res.status(500).send({msg:err.message})
  }
  }

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser=deleteUser;
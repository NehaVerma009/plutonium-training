const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const moment = require("moment")
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://NehaVerma009:A9CEHRbpunBJ90to@cluster0.r6xdcuv.mongodb.net/Neha-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );
//<<<<<<< HEAD

  app.use(
    function(req, res,next){
        let timestamps = moment().format('MMMM Do YYYY, h:mm:ss a')
        let requestedURL = req.path
        let IpAddress= req.socket.remoteAddress
        console.log(timestamps,requestedURL,IpAddress)
        next()
    }
  )
//=======
  
//>>>>>>> 9e4c16d4ea1ae2e8bdde64eac93caf8467fd54bc

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

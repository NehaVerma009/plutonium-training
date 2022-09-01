const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const AssignController= require("../controllers/AssignController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId",CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getById",AssignController.getByID)
router.get("/weather",AssignController.getWeather)
router.get("/temperature",AssignController.getTemp)
router.get("/citiesWithTemp",AssignController.citiesWithTemp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;
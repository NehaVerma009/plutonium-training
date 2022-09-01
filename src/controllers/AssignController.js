let axios = require("axios")


let getByID = async function(req, res){
    try{
    let id = req.query.district_id
    let date = req.query.date
    //console.log(id)
    console.log(date)

    var options = {
        method: "get",
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
    }

    let result = await axios(options)
    console.log(result.data)
    //let data = result.data
//status code is for :ok
    res.status(200).send({msg:result.data})
    }
    catch(err){
        console.log(err)
        //response stastus code is for Internal Server error
        res.status(500).send({msg: err.message})
    }
}

module.exports.getByID = getByID

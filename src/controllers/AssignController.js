let axios = require("axios");

let getByID = async function (req, res) {
  try {
    let id = req.query.district_id;
    let date = req.query.date;
    //console.log(id)
    console.log(date);

    var options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`,
    };

    let result = await axios(options);
    console.log(result.data);
    //let data = result.data
    //status code is for :ok
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    //response stastus code is for Internal Server error
    res.status(500).send({ msg: err.message });
  }
};

let getWeather = async function (req, res) {
  try {
    let place = req.query.q;
    let id = req.query.appid;

    console.log(place);
    console.log(id);

    var options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${id}`,
    };

    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getTemp = async function (req, res) {
  try {
    let place = req.query.q;
    let id = req.query.appid;
    console.log(place);
    console.log(id);

    var options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${id}`,
    };

    let result = await axios(options);
    console.log(result.data.main);
    res.status(200).send({ msg: result.data.main });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let citiesWithTemp = async function (req, res) {
  try {
    let array = [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Kolkata",
      "Chennai",
      "London",
      "Moscow",
    ];
    let newarr = [];
    for (i = 0; i < array.length; i++) {
      let obj = { city: array[i] };
      console.log(array[i]);
      let result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${array[i]}&appid=dc0b488426e2831fcc56a0f8a5e01994`
      );
      console.log(result.data.main.temp);
      obj[array[i]] = result.data.main.temp;
      newarr.push(obj);
    }

    res.status(200).send({ msg: newarr });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let memeList = async function (req, res) {
  try {
    var options = {
      method: "post",
      url: `https://api.imgflip.com/caption_image?template_id=101470&text0=hi&text1=NehaVerma&username=chewie12345&password=meme@123`,
    };
    
    let result = await axios(options)
    console.log(result.data)
    res.status(200).send({msg:result.data})
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

module.exports.getByID = getByID;
module.exports.getWeather = getWeather;
module.exports.getTemp = getTemp;
module.exports.citiesWithTemp = citiesWithTemp;
module.exports.memeList = memeList;

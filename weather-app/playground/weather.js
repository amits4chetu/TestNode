const request = require('request');

const KEY = '6a0ead4bce35c8f7842d5eb3d22af956';

const url = 'https://api.darksky.net/forecast/6a0ead4bce35c8f7842d5eb3d22af956/39.9444071,-75.1631718'

request({url, json:true}, (error, response, body) => {

    if(!error && response.statusCode === 200) {

        console.log(body.currently.temperature);

    }
    else {

        console.log("Could not fetch data!")

    }

})
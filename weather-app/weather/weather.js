const request = require('request');

const KEY = '6a0ead4bce35c8f7842d5eb3d22af956';

module.exports.getTemperature = (lat, lng, callback) => {

    const url = `https://api.darksky.net/forecast/${KEY}/${lat},${lng}`

    request({url, json:true}, (error, response, body) => {

        if(!error && response.statusCode === 200) {

            callback(undefined, {
                temperature : body.currently.temperature,
                apparentTemperature :  body.currently.apparentTemperature
            });

        }
        else {

            callback("Could not fetch data!");

        }

    })

}
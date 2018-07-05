const yargs = require('yargs');
const axios = require('axios');

const KEY = '6a0ead4bce35c8f7842d5eb3d22af956';

var argv = yargs
            .options({
                a : {
                    demand: true,
                    describe: 'The address of the place you want coordinates of',
                    alias: 'address'
                }
            })
            .help()
            .alias('help', 'h')
            .argv;

var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${argv.address}`

axios.get(geocodeURL).then((response) => {

    if(response.data.status === 'ZERO_RESULTS') {

        throw new Error('Unable to get the coordinates!');

    }

    address = response.data.results[0].formatted_address,
    lat = response.data.results[0].geometry.location.lat,
    lng = response.data.results[0].geometry.location.lng

    var forecastAPIURL = `https://api.darksky.net/forecast/${KEY}/${lat},${lng}`

    axios.get(forecastAPIURL).then((response) => {
        
        var currentTemp  = response.data.currently.temperature;
        var appTemp = response.data.currently.apparentTemperature;
        console.log(`It is ${currentTemp}, but it feels like ${appTemp}`);

    })

}).catch((errorMessage) => {

    if(errorMessage.errno === "ENOTFOUND") {

        console.log('Could not connect to the google servers...');

    }
    else {

        console.log(e.message);

    }

})

const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

var argv = yargs
            .command('get', 'get the address details', {
                address : {
                    describe: 'the address of the place you want details of',
                    demand: true,
                    alias: 'a',
                    string: true
                }
            })
            .help()
            .alias('help', 'h')
            .argv;

/*
* Accessing through options
*
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
*/

var command = argv._[0];
geocode.getAddress(command, argv.address, (errorMessage, results) => {

    if(errorMessage) {

        console.log(errorMessage);

    }
    else {

        console.log(`The address is : ${results.address}`);
        weather.getTemperature(results.latitude, results.longitude, (error, temperatures) => {

            if(error) {

                console.log(error)

            }
            else if(error === undefined) {

                console.log(`The current temperature is : ${temperatures.temperature}F`);
                console.log(`But, it feels like : ${temperatures.apparentTemperature}F`);

            }

        })

    }

});





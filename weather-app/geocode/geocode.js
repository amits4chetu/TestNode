var request = require('request');
var url = 'https://maps.googleapis.com/maps/api/geocode/json';

module.exports.getAddress = (command, address, callback) => {

    if(command === 'get') {

        url += '?address='+encodeURIComponent(address);
        
        request({url, json:true} , (error, response, body) => {
    
            if(error) {
               
                callback('Could not connect to the Google servers!');
    
            }
            else if (body.status === 'ZERO_RESULTS') {
    
                callback('Unable to find that address!');
    
            }
            else if (body.status === 'OK') {
                
                try {

                    callback(undefined, {

                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng

                    })
    
                }
                catch(err) {
    
                    callback('Some error occurred while reading the response, please try again!');
    
                }
    
            }
        
        })  
    
    }
    else {
    
        console.log('You haven\'t provided any commands as yet!');
    
    }

}
var request = require('request');
var url = 'https://maps.googleapis.com/maps/api/geocode/json';

var geocodeAddress = (address) => {

    return new Promise((resolve, reject) => {

        url += '?address='+encodeURIComponent(address);

        request({url, json:true} , (error, response, body) => {
    
            if(error) {
               
                reject('Could not connect to the Google servers!');
    
            }
            else if (body.status === 'ZERO_RESULTS') {
    
                reject('Unable to find that address!');
    
            }
            else if (body.status === 'OK') {
                
                try {

                    resolve({

                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng

                    })
    
                }
                catch(err) {
    
                   reject('Some error occurred while reading the response, please try again!');
    
                }
    
            }
        
        }) 

    });

}

geocodeAddress("19146").then((result) => {

    console.log(JSON.stringify(result, undefined, 2))

}, (error) => {

    console.log(error);

})
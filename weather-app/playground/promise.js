// var somePromise = new Promise((resolve, reject) => {

//     resolve('Hey, the promise was resolved...');
//     reject('Fish man, could not resolve the promise...');

// });

// somePromise.then((message)  => {
//     console.log(message);
// }, (errorMessage) => {
//     console.log(errorMessage);
// })

var syncAdd = (a, b) => {

    return new Promise((resolve, reject) => {

        if (typeof a === 'number' && typeof b === 'number') {

            resolve(a + b);

        }
        else {

            reject('the input needs to be numbers...')

        }

    });

}

syncAdd(23, 25).then((result) => {
    console.log(result);
    return syncAdd(result, 44);
}).then((result) => {
    console.log(result)
}).catch((errorMessage) => {
    console.log(errorMessage);
})
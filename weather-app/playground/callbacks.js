var getUser = (id, callback) => {

    var user = {
        id,
        name : 'Vikram'
    }

    setTimeout(() => callback(user), 3000);
    console.log('Getting the user...')

}

getUser(23, (user) => {
    console.log(user);
})

var square = x => x * x;

console.log(square(9));

var person = {

    name : 'Kunal',

    sayHi : () => {
        console.log(arguments);
        console.log(`Hi, I'am ${this.name}`);
    },

    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi, I'am ${this.name}`);
    }

}

console.log(person.sayHi(1, 2, 3));
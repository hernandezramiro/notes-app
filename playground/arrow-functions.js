
//First option
/*var square = function(x) {
    var result = x * x;
    return result;
};*/

//Second option
/*var square = (x) => {
    var result = x * x;
    return result;
};*/

//Third option
//var square = (x) => x * x;

//Fourth option
var square = x => x * x;
console.log(square(9));

var user = {
    name: "Andrew",
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

console.log("Arrow functions");
//First Issue
user.sayHi(1, 2, 3);

console.log("Regular functions");
//Fixed issue
user.sayHiAlt(1, 2, 3);


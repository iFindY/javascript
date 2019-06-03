/**
 * constructor function
 * this one is old ES5
 * @param name
 * @param id
 */
function User2(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = e => console.log(this.name + ": hello there");
}

/**
 * not working with =>
 * @param name
 */
User2.prototype.exit = function (name) {
    console.log(this.name + " : im gone!");
};


/**
 * ES6 with constructor adn string  interpolation
 * @param name
 * @param id
 * @constructor
 */
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }

    hello() {
        console.log(`${this.name} : hello there`);
    }

    exit() {
        console.log(`${this.name} : im gone!`);
    }
}

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 33);
console.log(ivan);


/**
 * only objects can create context, function do not.
 * constructor (new) creates new context this refer to context o constructor
 * @type {{a: number, b: number, sum: obj.sum}}
 */
let obj = {
    a: 20,
    b: 10,
    sum: function () {
        console.log(this);

        // lost context
        function shout() {
            console.log(this);
        }

        shout();
    }
}
obj.sum();


/**
 * bind function to context
 * @type {{name: string}}
 */
let user = {
    name: "hans"
};

function sayName(sureName) {
    console.log(this);
    console.log(this.name + sureName);
}


function calc(number) {
    return this * number;
}

// call with string parameter only
console.log(sayName.call(user, 'Smith'));
// apply collection of parameter
console.log(sayName.apply(user, ['Snow']));
// bind objects to existing context. hardwired
let double = calc.bind(2)
console.log(double(3));
console.log(double(10));

/**
 * let and const work only inside {}
 * only created by reaching script workflow step
 * let is created for every loop with different value, var not
 * => have no context => window
 * => always  take context of parent object or function
 */


/**
 * default parameter
 * @param num
 * @param nam
 */
function calc2(num, nam = 3) {
    console.log(num * nam);
}

calc2(3);


/**
 * spread operator
 * @type {string[]}
 */
let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'live', 'bloger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

function logg(a, b, c,) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}

let num = [2, 5, 7];

logg(...num);


/**
 * client server communication
 *  object -> JSON <- json
 */
console.log(JSON.stringify(ivan));
console.log(JSON.parse(JSON.stringify(ivan)));

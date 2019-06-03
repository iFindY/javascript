// // создана до выполнения скрипта но не определена
// console.log("Arkadi: ".concat(message));
// var message = "start learning javascript"
// console.log("Arkadi: ".concat(message));
//
// // будет созданна только когда скрипт до нее дойдет. быстрее и экономине
// console.log("Arkadi: ".concat(otherMessage));
// let otherMessage = " Hello there"
// conole.log("Arkadi: ".concat(otherMessage));
//
// // let видна только в ее блоке кода
// {
//     let thirdMessage = " Hello there"
// }
// console.log("Arkadi: ".concat(thirdMessage));
//
// // как лет только нельзя менять
// const city = "hamburg"
//
// // types
// var number = 5;
// var string = "hi";
// var boool = true;
// var sym = Symbol();
// var object = {};
// null;
//
// //null
// console.log(smth);
// // undefined
// let smth;
// console.log(smth);

// access object fiedsl
let person = {name: "John", age: 25, smart: true}
console.log(person.name);
console.log((person["name"]));

let arr = [1, 2, 3, 4, "fife"];
console.log(arr[4]);

//
// alert("hi");
// let answer =confirm("na?");
// console.log(answer);

// function => do not have own context

console.log(parseInt("12.3"));

// call back functions preserv execution order
function learn(lang, callback) {
    console.log("I learn " + lang);
    callback();
}

learn("javascript", e => console.log("good job!"))
learn("javascript", function () {
    console.log("woah!")
})

function woha() {
    console.log("aha!")
}

learn("javascript", woha)


// objects setter and getter
let student = {
    name: "Peter"
};
student.age = 25;
console.log(student.age)
student.university = {
    name: "uni-hamburg",
    seat: {
        location: "stellingen",
        name: "informatik"
    }
}
console.log(student.university);
delete student.university;
console.log(student);

// with .i  not working
for (let i in student) {
    console.log("Prop:" + i + ": " + student[i])
}

console.log("##########")
console.log(Object.keys(student).length)

let arrr = [1, 2, 3, 4, 5, 6, 7];
arrr.pop()
console.log(arrr);
arrr.push(99);
console.log(arrr);
arrr.shift();
console.log(arrr);
arrr.unshift(11)
console.log(arrr);
arrr[77] = 77;
console.log("To long ?" + arrr.length);
for (let i = 0; i < arrr.length; i++) {
    console.log(arrr[i])
}

arrr.forEach(e => console.log("Hello " + (e + 1)));

arrr.forEach(function (item, index, array) {
    console.log("index: " + index + " item :" + item + " collection : " + array)
});

for (let i of arrr) {
    console.log("value of index iterator :" + i);
}

sortAr = ["b", "423", "1", "x", "t"]
console.log(sortAr.sort());
sortInt = ["2", "15", "1"]
console.log(sortInt.sort());

function compare(a, b) {
    return a - b;
}

console.log(sortInt.sort(compare));


sortAr.sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // Groß-/Kleinschreibung ignorieren
    var nameB = b.name.toUpperCase(); // Groß-/Kleinschreibung ignorieren
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // Namen müssen gleich sein
    return 0;
});


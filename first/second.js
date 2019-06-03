let box = document.getElementById('box');
// element[s] <-- псевда масив
let buttons = document.getElementsByTagName('button');
// element[s] <-- псевда масив
let buttonsClass = document.getElementsByClassName('box');
//  class: . tag: # attribute:[] returns: nodeList
let buttonsClassAll = document.querySelectorAll('.box')
// can access inner structure in tree format
let buttonsClassAll = document.querySelectorAll('.wrapper .box');

//  you can loop over a node list
buttonsClassAll.forEach(console.log("hi"));

console.log(buttonsClassAll)
console.log(buttonsClass)
console.log(buttons);
console.log(buttons[0]);
console.log(box);


box.style.backgroundColor = "green";
buttons[2].style.borderRadius = "100";

buttonsClassAll.forEach(function (item, index, list) {
    item.style.backgroundColor = "blue";
});

let div = document.createElement("div"),
    text = document.createTextNode("hello there");
console.log(div)
console.log(text);

// add a class black to the div
div.classList.add("black")

document.body.appendChild(div);

let wrapper = document.querySelector(".wrapper");
wrapper.appendChild(div);


// div before circle. circle  was selected previously
let circle = document.querySelectorAll(".circle");
document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
// replace btn1 will replace btn4
document.body.replaceChild(btn[1], btn[4]);


let btn = document.getElementsByTagName("button");
btn[1].onclick = function () {
    alert("hello there");
}
// overwrite function
btn[1].onclick = function () {
    alert("unexpected surprise, but a welcome one");
}


// extend button behavior
btn[2].addEventListener('click', e => {
    alert("I find your lack of faith disturbing");
});
btn[2].addEventListener('click', e => alert("Your focus determines your reality"));

btn[3].addEventListener("mouseenter", e => alert("Do. Or do not. There is no try"));

btn[4].addEventListener('click', e => alert("Your focus determines your reality :" + e.type + " on element" + e.target));

btn[5].addEventListener('click', e => {
    let target = e.target;
    target.style.display = "none";
});


// events bubble up the tree
let wrap = document.querySelector('.wrapper');
btn[6].addEventListener("click", e => alert("Do. Or do not. There is no try"));
wrap.addEventListener("click", e => alert("Do. Or do not. There is no try 2"));

let link = document.querySelector("a");
link.addEventListener("click", e => {
    e.preventDefault();
    alert("it's a trap");
});
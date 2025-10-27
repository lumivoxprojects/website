// const username = "rafael_goncalves";
// const height = 178;
// const place = "Porto, Portugal";

// const message = "User " + username + " is " + height * 2 + "cm.";

var header = document.querySelector("#header")
var body = document.querySelector("body")
var title = document.querySelector("h1")
var img = document.querySelector("img")
var images = document.querySelectorAll("img")
var size = 16;

var growText = function() {
    size = size + 1;
    header.style.fontSize = size + "px";
    changeText();
}

var shrinkText = function() {
    size = size - 1;
    header.style.fontSize = size + "px";
     changeText();
}

var changeText = function() {
    title.innerHTML = "Current Size: " + size;
}

// Window

var width = window.innerWidth;
var height = window.innerHeight;

window.addEventListener("scroll", function() {
    console.log("Scroll Amount: ", window.scrollY);
    
    if (window.scrollY > 100) {
        body.style.padding = "32px";
    } else {
        body.style.padding = "12px";
    }
})

header.addEventListener("mousemove", function(event) {
    var mouseX = event.offsetX;
    title.style.fontSize = 16 + mouseX / 100 + "px";
})

// Objects and Arrays
var user = {
    name: "Rafael",
    lastName: "Gonçalves",
    height: 178,
    isTeaching: true
};

var classNames = [
    "Rafa",
    "Clancy",
    "Morty",
    "Rick"
];

console.log(classNames)

var followElement = document.querySelector("#follow");

window.addEventListener("mousemove", function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    console.log("MouseX: ", mouseX, "mouseY: ", mouseY)
    followElement.style.top = mouseY + "px";
    followElement.style.left = mouseX + "px";
})

var randomImage = document.querySelector("#random-image")


setInterval(function() {
    var randomX = Math.round(Math.random() * (window.innerWidth - 200));
    var randomY = Math.round(Math.random() * (window.innerHeight - 200));
    var randomBlur = Math.round(Math.random() * 6);

    randomImage.style.left = randomX + 100 + "px";
    randomImage.style.top = randomY + 100 + "px";
    randomImage.style.filter = "blur(" + randomBlur + "px)";
}, 500)
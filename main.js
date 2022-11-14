const $ = (selector) => document.querySelector(selector);


let body = document.body;
let btn = document.getElementById("btn");

let btnText = $("#btn-text");
let btnImg = $("#btn-img");
let contentImg = $("#container-imagen");
let contentText = $("#container-text");
let img =$("image-meme")


btn.addEventListener("click", () => {
body.classList.toggle("dark-theme");

let estaModoOscuro = body.classList.contains("dark-theme"); 

if (estaModoOscuro) {
btn.innerText = "Modo Claro";
} else {
btn.innerText = "Modo Oscuro";
}
});

btnText.addEventListener("click", () => {
contentImg.style.display = "none";
contentText.style.display = "block";  
});

btnImg.addEventListener("click", () => {
contentImg.style.display = "block";
contentText.style.display = "none";
});


//url//
let inputURL = $("#url");
let imageContainer = $("#image-meme")

inputURL.addEventListener("input", (event) => {
imageContainer.style.backgroundImage = `url("${event.target.value}")`;
});

//text-settings//

let textareaTopText = $("#toptext");
let pTopText = $("#top-text")

textareaTopText.addEventListener("input", (event) => {
pTopText.innerText = event.target.value
})


let textareaBottomText = $("#bottomtext");
let pBottomText = $("#bottom-text")

textareaBottomText.addEventListener("input", (event) => {
pBottomText.innerText = event.target.value
})



let checkBoxTop = $("#withouttexsup");
let sinTopDiv = $("#top-text")

checkBoxTop.addEventListener("click", () => {
sinTopDiv.classList.toggle = ("hidden");
});



  
  
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
let textareaBottomText = $("#bottomtext");
let pBottomText = $("#bottom-text");
let checkBoxTop = $("#withouttexsup");
let checkBoxBottom = $("#withouttexinf");

textareaTopText.addEventListener("input", (event) => {
pTopText.innerText = event.target.value
})


textareaBottomText.addEventListener("input", (event) => {
pBottomText.innerText = event.target.value
})


//checkbox's


checkBoxTop.addEventListener("click", () =>{
pTopText.classList.toggle("hidden");
});

checkBoxBottom.addEventListener("click", () =>{
pBottomText.classList.toggle("hidden");
});
    


//typography

let typesTypography = $("#typesoftypo");
let canvasArea = $("#canvas"); 

typesTypography.addEventListener('change', (event)=>{
let choosenTypo = event.target.value;

canvasArea.style.fontFamily = choosenTypo;

});



  
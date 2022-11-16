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





/////////////////////TEXT PANEL/////////////////////////////

let textareaTopText = $("#toptext");
let pTopText = $("#top-text")
let textareaBottomText = $("#bottomtext");
let pBottomText = $("#bottom-text");
let checkBoxTop = $("#withouttexsup");
let checkBoxBottom = $("#withouttexinf");
let checkBackground = $("#withoutback");
let typesTypography = $("#typesoftypo");
//let canvasArea = $("#canvass"); 
let textLeft = $("#lefttext");
let textCenter = $("#centertext");
let textRight = $("#righttext");
let changeSize = $("#resizing")
let colorFont = $("#fontcolor");
let backColor = $("#backcolor");


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


checkBackground.addEventListener("click", () =>{
pBottomText.classList.toggle("hidden");
pTopText.classList.toggle("hidden");
});
    
   
//typography

typesTypography.addEventListener("change", (event) => {
let choosenTypo = event.target.value;

pBottomText.style.fontFamily = choosenTypo;
pTopText.style.fontFamily = choosenTypo;
});



//text align

textLeft.addEventListener("click", (event) => {

pTopText.style.textAlign = "left";
pBottomText.style.textAlign = "left";
})
  
textCenter.addEventListener("click", (event) => {

pTopText.style.textAlign = "center";
pBottomText.style.textAlign = "center";
})
 
textRight.addEventListener("click", (event) => {

pTopText.style.textAlign = "right";
pBottomText.style.textAlign = "right";
})



//re-sizing option

changeSize.addEventListener('input', (event)=>{
let newSize = event.target.value;
  
pTopText.style.fontSize = `${newSize}px`;
pBottomText.style.fontSize = `${newSize}px`;
})



//Color Selection

colorFont.addEventListener("change", (event) => {
let colorful = event.target.value;

pTopText.style.color = colorful;
pBottomText.style.color = colorful;
});


backColor.addEventListener("change", (event) => {
let coloring = event.target.value;
    
pTopText.style.backgroundColor = coloring;
pBottomText.style.backgroundColor = coloring; 
});
        

//Contouring

//Download Meme

let canvasArea = $("#canvass");
let btnDown = $ ("#btndownload");

console.log (canvasArea)


const descargarMeme = () => {
domtoimage.toBlob(canvasArea).then(function (blob) {
saveAs(blob, "aqui-mi-meme.jpg");
});
};

btnDown.addEventListener("click", descargarMeme);

  
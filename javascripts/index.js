//Section-a 

const leftContent = document.querySelector('.srv1');
const midContent = document.querySelector('.srv2');
const rightContent = document.querySelector('.srv3');
const allContent = document.querySelector('.top-service');
const allContent2 = document.querySelector('.main-service');


const serviceHeader = document.querySelector('.srv-header');
const serviceText = document.querySelector('.srv-text');

const imageContent1 = document.querySelector('.img-1');
const imageContent2 = document.querySelector('.img-2');

//Change text content on hover
window.onmouseover = function(hover){
   if(hover.target ==  allContent){
      imageContent1.style.opacity = "0.3";
      imageContent2.style.opacity = "0.3";
   }
   else if(hover.target ==  allContent2){
      imageContent1.style.opacity = "0.3";
      imageContent2.style.opacity = "0.3";
   }
}

leftContent.onmouseover = function(){
   serviceHeader.innerHTML = "INTRODUCTION";
   serviceText.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
   imageContent1.style.opacity = "0.9";
   imageContent2.style.opacity = "0.3";
}

midContent.onmouseover = function(){
   serviceHeader.innerHTML = "PRODUCTS";
   serviceText.innerHTML = " BBBBB Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
   imageContent1.style.opacity = "0.9";
   imageContent2.style.opacity = "0.9";
}

rightContent.onmouseover = function(){
   serviceHeader.innerHTML = "LOGISTIC";
   serviceText.innerHTML = " CCCCC Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
   imageContent1.style.opacity = "0.3";
   imageContent2.style.opacity = "0.9";
}

//change image opacity on hover

let trLang = document.querySelectorAll("#tr");
let engLang = document.querySelectorAll("#en");

for(i=0;i<engLang.length;i++){
   engLang[i].style.display = "none"
}

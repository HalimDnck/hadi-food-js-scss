/*Products*/
const fruitButton = document.getElementById('fruit-button');
const vegiButton = document.getElementById('vegi-button');
const healtButton = document.getElementById('healt-button');
const drinkButton = document.getElementById('drink-button');
const allButton = document.getElementById('all-button');



const fruits = document.querySelectorAll('#fruit');
const vegis = document.querySelectorAll('#vegi');
const healt = document.querySelectorAll('#healt');
const drinks = document.querySelectorAll('#drink');


fruitButton.addEventListener('click', function(){
   drinks.forEach((product) => {
      product.style.display="none";
   })
   vegis.forEach((product) => {
      product.style.display="none";
   })
   healt.forEach((product) => {
      product.style.display="none";
   })
   fruits.forEach((product) => {
      product.style.display="flex";
   })
})

vegiButton.addEventListener('click', function(){
   drinks.forEach((product) => {
      product.style.display="none";
   })
   fruits.forEach((product) => {
      product.style.display="none";
   })
   healt.forEach((product) => {
      product.style.display="none";
   })
   vegis.forEach((product) => {
      product.style.display="flex";
   })
})

healtButton.addEventListener('click', function(){
   drinks.forEach((product) => {
      product.style.display="none";
   })
   fruits.forEach((product) => {
      product.style.display="none";
   })
   vegis.forEach((product) => {
      product.style.display="none";
   })
   healt.forEach((product) => {
      product.style.display="flex";
   })
})

drinkButton.addEventListener('click', function(){
   healt.forEach((product) => {
      product.style.display="none";
   })
   fruits.forEach((product) => {
      product.style.display="none";
   })
   vegis.forEach((product) => {
      product.style.display="none";
   })
   drinks.forEach((product) => {
      product.style.display="flex";
   })
})

allButton.addEventListener('click', function(){
   healt.forEach((product) => {
      product.style.display="flex";
   })
   fruits.forEach((product) => {
      product.style.display="flex";
   })
   vegis.forEach((product) => {
      product.style.display="flex";
   })
   drinks.forEach((product) => {
      product.style.display="flex";
   })
})

/*Services and Import&Export*/
function scrollWin(x, y) {
   window.scrollBy(x, y);
}


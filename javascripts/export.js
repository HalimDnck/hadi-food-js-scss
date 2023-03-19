/*Import&Export*/
function scrollWin(x, y) {
   window.scrollBy(x, y);
}

let exportBtn = document.querySelector(".export-btn");
let importBtn = document.querySelector(".import-btn");

exportBtn.addEventListener("click", function(){
   exportBtn.style.background = "$main"
})

let trLang = document.querySelectorAll("#tr");
let engLang = document.querySelectorAll("#en");
let langBtn = document.querySelector(".lang-btn");



function checkLanguage(){
   if(langBtn.classList.contains("english")){
      for(i=0;i<engLang.length;i++){
         engLang[i].style.display = ""
      };
      for(i=0;i<trLang.length;i++){
         trLang[i].style.display = "none"
      };
   }
   else{
      for(i=0;i<trLang.length;i++){
         trLang[i].style.display = ""
      };
      for(i=0;i<engLang.length;i++){
         engLang[i].style.display = "none"
      };
   }
}
checkLanguage();


langBtn.addEventListener("click", function(){
   if(langBtn.classList.contains("english")){
      langBtn.classList.remove("english");
      langBtn.classList.add("turkish");
      for(i=0;i<engLang.length;i++){
         engLang[i].style.display = "none"
      };
      for(i=0;i<trLang.length;i++){
         trLang[i].style.display = ""
      };
   }
   else{
      langBtn.classList.add("english");
      langBtn.classList.remove("turkish");
      for(i=0;i<trLang.length;i++){
         trLang[i].style.display = "none"
      };
      for(i=0;i<engLang.length;i++){
         engLang[i].style.display = ""
      };
   }
});


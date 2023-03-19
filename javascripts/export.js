/*Import&Export*/
function scrollWin(x, y) {
   window.scrollBy(x, y);
}

let exportBtn = document.querySelector(".export-btn");
let importBtn = document.querySelector(".import-btn");
let text = document.querySelector(".text");

exportBtn.addEventListener("click", function(){
   exportBtn.style.background = "#4B8673";
   exportBtn.style.color = "white";
   importBtn.style.background = "white";
   importBtn.style.color = "#4B8673";
   text.innerHTML = exportText;

})

importBtn.addEventListener("click", function(){
   importBtn.style.background = "#4B8673";
   importBtn.style.color = "white";
   exportBtn.style.background = "white";
   exportBtn.style.color = "#4B8673";
   text.innerHTML = importText;
})












let exportText = "<img src='/images/export/globe.png' class='globe'>At <strong>hadi</strong>, we specialize in exporting high-quality dry fruits and vegetables to markets around the world.<br> With our commitment to excellence in every step of the process, from sourcing the finest produce to carefully packaging and delivering it to our customers, we are proud to offer a range of products that are sure to meet the needs of even the most discerning buyers.<br> Our experienced team of professionals has the expertise and knowledge needed to navigate the complexities of international trade, ensuring that your shipment arrives at its destination safely and on time.<br> We take pride in our attention to detail and our dedication to providing exceptional customer service, which has helped us build a reputation as a trusted supplier of premium dry fruits and vegetables.<br> Whether you are looking to source almonds, raisins, apricots, dates, or any other type of dry fruit, we have the products and the expertise to meet your needs.<br> Our selection of vegetables includes everything from dried tomatoes and peppers to mushrooms and onions, all of which are carefully sourced and packaged to ensure maximum freshness and quality.<br> At <strong>hadi</strong>, we believe that exporting should be a seamless process for our customers, which is why we handle all of the details, from logistics and documentation to customs clearance and delivery.<br> We are committed to providing our customers with a hassle-free experience, so they can focus on their core business while we take care of the rest.<br> If you are looking for a reliable and experienced supplier of high-quality dry fruits and vegetables, look no further than <strong>hadi</strong>. Contact us today to learn more about our products and services, and how we can help you achieve your business goals.";
let importText = "<img src='/images/export/arrow.png' class='arrow'>At <strong>hadi</strong>, we are dedicated to importing the highest quality dry fruits and vegetables from around the world.<br> With our extensive network of trusted suppliers and our commitment to excellence in every aspect of the importing process, we are able to provide our customers with a wide range of premium products that meet their specific needs.<br> Our experienced team of professionals has a deep understanding of the intricacies of international trade, including customs regulations, shipping logistics, and import documentation. We work closely with our suppliers to ensure that all of our products are carefully selected, inspected, and packaged to meet the highest standards of quality and freshness.<br> We offer a wide selection of dry fruits and vegetables, including almonds, raisins, apricots, dates, dried tomatoes, peppers, mushrooms, onions, and more.<br> All of our products are sourced from reputable suppliers who share our commitment to quality and sustainability.<br> At <strong>hadi</strong>, we believe that the importing process should be as smooth and hassle-free as possible.<br> That's why we take care of all the details, including customs clearance, transportation, and delivery, to ensure that our customers receive their products on time and in excellent condition. We are committed to providing exceptional customer service, and we work closely with our customers to understand their unique needs and preferences.<br> Whether you are looking to import a single shipment of dry fruits and vegetables, or you require ongoing, reliable supply, we are here to help.<br> Contact <strong>hadi</strong> today to learn more about our importing services, and how we can help you source the finest dry fruits and vegetables from around the world."
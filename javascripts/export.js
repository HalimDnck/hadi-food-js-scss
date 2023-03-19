/*Import&Export*/
function scrollWin(x, y) {
   window.scrollBy(x, y);
}

let exportBtn = document.querySelector(".export-btn");
let importBtn = document.querySelector(".import-btn");
let exportBtnTr = document.querySelector(".export-btn-tr");
let importBtnTr = document.querySelector(".import-btn-tr");
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

exportBtnTr.addEventListener("click", function(){
   exportBtnTr.style.background = "#4B8673";
   exportBtnTr.style.color = "white";
   importBtnTr.style.background = "white";
   importBtnTr.style.color = "#4B8673";
   text.innerHTML = exportTextTr;

})

importBtnTr.addEventListener("click", function(){
   importBtnTr.style.background = "#4B8673";
   importBtnTr.style.color = "white";
   exportBtnTr.style.background = "white";
   exportBtnTr.style.color = "#4B8673";
   text.innerHTML = importTextTr;
})











let exportText = "<img src='/images/export/globe.png' class='globe'>At <strong>hadi</strong>, we specialize in exporting high-quality dry fruits and vegetables to markets around the world.<br> With our commitment to excellence in every step of the process, from sourcing the finest produce to carefully packaging and delivering it to our customers, we are proud to offer a range of products that are sure to meet the needs of even the most discerning buyers.<br> Our experienced team of professionals has the expertise and knowledge needed to navigate the complexities of international trade, ensuring that your shipment arrives at its destination safely and on time.<br> We take pride in our attention to detail and our dedication to providing exceptional customer service, which has helped us build a reputation as a trusted supplier of premium dry fruits and vegetables.<br> Whether you are looking to source almonds, raisins, apricots, dates, or any other type of dry fruit, we have the products and the expertise to meet your needs.<br> Our selection of vegetables includes everything from dried tomatoes and peppers to mushrooms and onions, all of which are carefully sourced and packaged to ensure maximum freshness and quality.<br> At <strong>hadi</strong>, we believe that exporting should be a seamless process for our customers, which is why we handle all of the details, from logistics and documentation to customs clearance and delivery.<br> We are committed to providing our customers with a hassle-free experience, so they can focus on their core business while we take care of the rest.<br> If you are looking for a reliable and experienced supplier of high-quality dry fruits and vegetables, look no further than <strong>hadi</strong>. Contact us today to learn more about our products and services, and how we can help you achieve your business goals.";
let importText = "<img src='/images/export/arrow.png' class='arrow'>At <strong>hadi</strong>, we are dedicated to importing the highest quality dry fruits and vegetables from around the world.<br> With our extensive network of trusted suppliers and our commitment to excellence in every aspect of the importing process, we are able to provide our customers with a wide range of premium products that meet their specific needs.<br> Our experienced team of professionals has a deep understanding of the intricacies of international trade, including customs regulations, shipping logistics, and import documentation. We work closely with our suppliers to ensure that all of our products are carefully selected, inspected, and packaged to meet the highest standards of quality and freshness.<br> We offer a wide selection of dry fruits and vegetables, including almonds, raisins, apricots, dates, dried tomatoes, peppers, mushrooms, onions, and more.<br> All of our products are sourced from reputable suppliers who share our commitment to quality and sustainability.<br> At <strong>hadi</strong>, we believe that the importing process should be as smooth and hassle-free as possible.<br> That's why we take care of all the details, including customs clearance, transportation, and delivery, to ensure that our customers receive their products on time and in excellent condition. We are committed to providing exceptional customer service, and we work closely with our customers to understand their unique needs and preferences.<br> Whether you are looking to import a single shipment of dry fruits and vegetables, or you require ongoing, reliable supply, we are here to help.<br> Contact <strong>hadi</strong> today to learn more about our importing services, and how we can help you source the finest dry fruits and vegetables from around the world."

let exportTextTr = "<img src='/images/export/globe.png' class='globe'><strong>hadi</strong> olarak, dünya çapındaki pazarlara yüksek kaliteli kuru meyve ve sebze ihraç etmekte uzmanız .<br> En iyi ürünü tedarik etmekten dikkatli bir şekilde paketlemeye ve müşterilerimize teslim etmeye kadar sürecin her adımında mükemmelliğe olan bağlılığımızla, müşterilerinin bile ihtiyaçlarını karşılaması kesin olan bir ürün yelpazesi sunmaktan gurur duyuyoruz. en seçici alıcılar.<br> Deneyimli profesyonellerden oluşan ekibimiz, gönderinizin güvenli bir şekilde ve zamanında varış noktasına ulaşmasını sağlamak için uluslararası ticaretin karmaşıklıklarında yol almak için gereken uzmanlığa ve bilgiye sahiptir.<br> Ayrıntılara gösterdiğimiz özenden gurur duyuyoruz ve birinci sınıf kuru meyve ve sebzelerin güvenilir bir tedarikçisi olarak itibar kazanmamıza yardımcı olan olağanüstü müşteri hizmeti sunmaya olan bağlılığımız.<br> Badem, kuru üzüm, kayısı, hurma veya başka herhangi bir kuru meyve kaynağı arıyor olun meyve, ürünlerimiz var ve ihtiyaçlarınızı karşılayacak uzmanlık.<br> Sebze seçimimiz, maksimum tazelik ve kaliteyi sağlamak için özenle tedarik edilen ve paketlenen kurutulmuş domates ve biberden mantar ve soğana kadar her şeyi içerir.<br> <strong>hadi'de </strong>, ihracatın müşterilerimiz için sorunsuz bir süreç olması gerektiğine inanıyoruz, bu nedenle lojistik ve dokümantasyondan gümrükleme ve teslimata kadar tüm ayrıntıları biz üstleniyoruz.<br> Müşterilerimize, sorunsuz bir deneyim, böylece biz gerisini hallederken onlar ana işlerine odaklanabilirler.<br> Yüksek kaliteli kuru meyve ve sebzeler için güvenilir ve deneyimli bir tedarikçi arıyorsanız, <strong>'den başkasına bakmanıza gerek yok hadi</strong>. Ürünlerimiz ve hizmetlerimiz hakkında daha fazla bilgi edinmek ve iş hedeflerinize ulaşmanıza nasıl yardımcı olabileceğimizi öğrenmek için bugün bize ulaşın.";
let importTextTr = "<img src='/images/export/arrow.png' class='arrow'><strong>hadi</strong>'de kendimizi dünyanın dört bir yanından en kaliteli kuru meyve ve sebzeleri ithal etmeye adadık .<br> Kapsamlı güvenilir tedarikçi ağımız ve ithalat sürecinin her aşamasında mükemmellik taahhüdümüzle, müşterilerimize özel ihtiyaçlarını karşılayan geniş bir birinci sınıf ürün yelpazesi sunabiliyoruz.<br> Deneyimli ekibimiz Gümrük düzenlemeleri, nakliye lojistiği ve ithalat belgeleri de dahil olmak üzere uluslararası ticaretin inceliklerini derinlemesine anlayan profesyonellerin oranı.Tüm ürünlerimizin en yüksek standartları karşılayacak şekilde dikkatlice seçilmesini, denetlenmesini ve paketlenmesini sağlamak için tedarikçilerimizle yakın bir şekilde çalışıyoruz. kalite ve tazelik.<br> Badem, kuru üzüm, kayısı, hurma, kuru domates, biber, mantar, soğan ve daha fazlasını içeren çok çeşitli kuru meyve ve sebzeler sunuyoruz.<br> Ürünlerimizin tamamı saygın su kalite ve sürdürülebilirlik taahhüdümüzü paylaşan tedarikçiler.<br> <strong>hadi</strong> olarak, ithalat sürecinin mümkün olduğunca sorunsuz ve sorunsuz olması gerektiğine inanıyoruz.<br> Bu nedenle, her şeyle ilgileniyoruz. müşterilerimizin ürünlerini zamanında ve mükemmel durumda almasını sağlamak için gümrükten çekme, nakliye ve teslimat dahil olmak üzere ayrıntılar. Olağanüstü müşteri hizmeti sağlamaya kararlıyız ve benzersiz ihtiyaç ve tercihlerini anlamak için müşterilerimizle yakın işbirliği içinde çalışıyoruz. yardım etmek için buradayız.<br> İthalat hizmetlerimiz ve dünyanın dört bir yanından en kaliteli kuru meyve ve sebzeleri tedarik etmenize nasıl yardımcı olabileceğimiz hakkında daha fazla bilgi edinmek için bugün <strong>hadi</strong> ile iletişime geçin."

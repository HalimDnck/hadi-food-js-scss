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
   if(langBtn.classList.contains("english")){
      serviceHeader.innerHTML = "PRODUCTION";
      serviceText.innerHTML = "The production process begins with the harvesting of the dried fruit and vegetables. The harvesting process varies depending on the timing and type of the product. For example, grapes are harvested by hand, while figs can be harvested by machine. The cleaning process is essential to improve the quality of the products. During this process, various debris (such as dust, leaves, or stems) are removed by hand or machine. Drying can be done through different methods depending on the product. For example, grapes are dried in special drying rooms, while apricots can be dried in the sun. Drying is achieved through the evaporation of water, which increases the shelf life of the products. Packaging involves the proper packaging of the dried fruit and vegetables. This process is crucial to prevent spoilage of the products. Proper packaging also makes it easier to prepare the products for export."
   }
   else{
      serviceHeader.innerHTML = "ÜRETİM";
      serviceText.innerHTML = "Üretim süreci, kuru meyve ve sebzelerin toplanması ile başlar. Toplama işlemi, hasat zamanına ve ürüne göre değişir. Örneğin, üzümler el ile toplanırken, incirler makineyle toplanabilir. Temizleme işlemi, ürünlerin kalitesini artırmak için son derece önemlidir. Bu işlemde, çeşitli kalıntılar (toz, yaprak, dal vb.) el ile veya makine ile çıkarılır. Kurutma işlemi, kurutulacak ürüne bağlı olarak farklı yöntemlerle yapılabilir. Örneğin, üzümler özel kurutma odalarında kurutulurken, kayısılar güneşte kurutulabilir. Kurutma işlemi, suyun buharlaşması yoluyla gerçekleşir ve ürünlerin dayanıklılığını arttırır. Paketleme işlemi, kurutulmuş kuru meyve ve sebzelerin uygun şekilde paketlenmesini içerir. Bu işlem, ürünlerin bozulmasını önlemek için son derece önemlidir. Ürünlerin uygun şekilde paketlenmesi, ihracat için hazırlanmasını da kolaylaştırır."
   }
   
   imageContent1.style.opacity = "0.9";
   imageContent2.style.opacity = "0.3";

   
}

midContent.onmouseover = function(){
   if(langBtn.classList.contains("english")){
      serviceHeader.innerHTML = "SERVICE";
      serviceText.innerHTML = "The service production process begins with the design of the service. This involves identifying the type of service to be offered, the target customers, and the service concept. The service concept may include elements such as the service scope, service level, and service delivery process. The development stage involves creating and testing the service. This may involve developing a prototype or testing the service in a limited market. During this stage, any issues or improvements are identified and addressed. Service delivery is the stage in which the service is delivered to customers. This may involve face-to-face interactions, online services, or a combination of both. It is crucial to ensure that the service is delivered according to the service concept and meets customer needs. Service evaluation involves the assessment of the service to identify areas for improvement and ensure that it meets customer needs. This stage may involve feedback from customers, analysis of service data, and evaluation of service delivery processes."
   }
   else{
      serviceHeader.innerHTML = "HİZMET";
      serviceText.innerHTML = "Hizmet üretim süreci, hizmetin tasarımıyla başlar. Bu, sunulacak hizmetin türünün belirlenmesini, hedef müşterilerin belirlenmesini ve hizmet kavramının oluşturulmasını içerir. Hizmet kavramı, hizmet kapsamı, hizmet seviyesi ve hizmet teslim süreci gibi unsurları içerebilir. Geliştirme aşaması, hizmetin oluşturulması ve test edilmesini içerir. Bu, bir prototip oluşturmayı veya hizmeti sınırlı bir pazarda test etmeyi içerebilir. Bu aşamada, herhangi bir sorun veya iyileştirme belirlenir ve ele alınır. Hizmet teslimi, hizmetin müşterilere sunulduğu aşamadır. Bu yüz yüze etkileşimleri, çevrimiçi hizmetleri veya her ikisinin bir kombinasyonunu içerebilir. Hizmetin, hizmet kavramına uygun olarak teslim edildiğinden ve müşteri ihtiyaçlarını karşıladığından emin olmak önemlidir. Hizmet değerlendirmesi, hizmetin değerlendirilmesi, iyileştirme alanlarının belirlenmesi ve müşteri ihtiyaçlarını karşıladığından emin olmak için yapılır."
   }

   imageContent1.style.opacity = "0.9";
   imageContent2.style.opacity = "0.9";
}

rightContent.onmouseover = function(){
   if(langBtn.classList.contains("english")){
      serviceHeader.innerHTML = "LOGISTIC";
      serviceText.innerHTML = "Logistics refers to the management of the flow of goods, information, and other resources between the point of origin and the point of consumption. It involves the planning, implementation, and control of the movement and storage of goods, as well as the coordination of information and financial flows. Effective logistics management is essential for businesses to succeed in today's global marketplace. It can help to reduce costs, improve customer satisfaction, and increase overall efficiency. The logistics process includes several key components, such as transportation, inventory management, warehousing, and distribution. Each of these components plays a critical role in ensuring that goods are delivered to customers on time and in good condition."
   }
   else{
      serviceHeader.innerHTML = "LOJİSTİK";
      serviceText.innerHTML = "Lojistik, mal, bilgi ve diğer kaynakların kaynağından tüketim noktasına kadar olan akışının yönetimini ifade eder. Lojistik, malların hareketinin planlanması, uygulanması ve kontrolü, bilgi ve finansal akışların koordinasyonu gibi unsurları içeren bir süreçtir. Etkili lojistik yönetimi, işletmelerin bugünün küresel pazarında başarılı olması için önemlidir. Bu, maliyetleri azaltmaya, müşteri memnuniyetini artırmaya ve genel verimliliği artırmaya yardımcı olabilir. Lojistik süreci, taşımacılık, stok yönetimi, depolama ve dağıtım gibi birkaç ana bileşeni içerir. Her bir bileşen, malların müşterilere zamanında ve iyi durumda teslim edilmesini sağlamada kritik bir rol oynar."
   }
   imageContent1.style.opacity = "0.3";
   imageContent2.style.opacity = "0.9";
}

//change image opacity on hover



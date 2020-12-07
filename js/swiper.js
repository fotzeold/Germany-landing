
new Swiper('.swiper-container', {
 
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
     dynamicBullets: true

   },
 
   // Navigation arrows
  

   grabCursor: true,
   slidesPerView: 2,
   spaceBetween: 16,
   loop: true,

   autoplay: {
      delay: 2000,
   },
 
  
   
 })
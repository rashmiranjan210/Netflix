function cursoreffect(){

    var cursor = document.getElementById("cursor");
    let page1 = document.getElementById("page1");
    let page2 = document.getElementById("page2");
    let page3 = document.getElementById("page3");
    let page4 = document.getElementById("page4");
    let page5 = document.getElementById("page5");
    page1.addEventListener("mousemove", function (dets) {
        gsap.to(cursor,
        {
            x:dets.x,
            y:dets.y,
        })
    })
    page1.addEventListener("mouseenter",function(){
        gsap.to(cursor,
            {
               scale:1
            })
    
    })
    page2.addEventListener("mouseenter",function(){
        gsap.to(cursor,
            {
               scale:0
            })
    
    })
    page2.addEventListener("mouseleave",function(){
        gsap.to(cursor,
            {
               scale:1
            })
    
    })
    page3.addEventListener("mouseenter",function(){
        gsap.to(cursor,
            {
               scale:0
            })
    
    })
    page3.addEventListener("mouseleave",function(){
        gsap.to(cursor,
            {
               scale:1
            })
    
    })
    page4.addEventListener("mouseenter",function(){
        gsap.to(cursor,
            {
               scale:0
            })
    
    })
    page4.addEventListener("mouseleave",function(){
        gsap.to(cursor,
            {
               scale:1
            })
    
    })
    page5.addEventListener("mouseenter",function(){
        gsap.to(cursor,
            {
               scale:0
            })
    
    })
    page5.addEventListener("mouseleave",function(){
        gsap.to(cursor,
            {
               scale:0
            })
    
    })

}
cursoreffect()
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    // loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
$(function(){
    var swiperinit = function(){
        new Swiper('.testmonialSwiper',{
            loop: true,
            slidesPerview:1,
            speed: 700,
            navigation:{
                nextEl:".custom-swiper-button-next",
                prevEl:".custom-swiper-button-next",
            },
            pagination:{
                el:".swiper-pagination",
                clickable: true,
            }
        });
    };
    swiperinit();
});

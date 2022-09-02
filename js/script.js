var hamburger = document.getElementById("hamburger");
hamburger.addEventListener('click',function(){
    var navbar = document.getElementById("navbar-collapse").classList.toggle("opened-navigation");
});
var hamburger2 = document.getElementById("hamburger2");
hamburger2.addEventListener('click',function(){
    var navbar = document.getElementById("navbar-collapse").classList.toggle("opened-navigation");
});
$(".workShowCase").owlCarousel({
    margin: 50,
    autoplay:true,
    loop:true,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1,
        },
        500: {
            items: 2,

        }
    }
})
$(document).ready(function() {
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
})
// typing animation script
var typed = new Typed(".typing", {
    strings: ["student", "in", "estiam"],
    typeSpeed: 100,
    backspeed: 60,
    loop: true
});

 

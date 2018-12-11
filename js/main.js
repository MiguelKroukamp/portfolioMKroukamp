window.addEventListener("scroll", function(){
    offset = window.pageYOffset;

    document.getElementById("parallax").style.backgroundPositionY = offset * -0.5 + "px";
});

window.addEventListener('scroll', function(e) {
    var nav = document.getElementById('nav');
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        nav.classList.add('navColor');
    } else {   
        nav.classList.remove('navColor');
    }
}); 
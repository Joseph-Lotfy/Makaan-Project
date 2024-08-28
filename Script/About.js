var loader = document.getElementById('preloader');
window.addEventListener('load', function(){
    loader.style.display = "none";
})
window.addEventListener('scroll', function() {
    if(this.scrollY > 40){
        document.getElementById('head').style.maxWidth = '75rem';
        document.getElementById('arr').style.opacity = 1;
        document.getElementById('arr').style.visibility = "visible";
    }
    else{
        document.getElementById('head').style.maxWidth = '70rem';
        document.getElementById('arr').style.opacity = 0;
        document.getElementById('arr').style.visibility = "hidden";
    }
});
window.addEventListener('scroll', function() {
    if(this.scrollY > 40){
        document.getElementById('head').style.maxWidth = '1328px';
        document.getElementById('arr').style.opacity = 1;
        document.getElementById('arr').style.visibility = "visible";

    }
    else{
        document.getElementById('head').style.maxWidth = '78rem';
        document.getElementById('arr').style.opacity = 0;
        document.getElementById('arr').style.visibility = "hidden";

    }
    
});

function showme(){
    var menu=document.getElementById("mynav");
    if(menu.style.display!="block"){
    menu.style.display="block";
    }else{
        menu.style.display="none";
    }
}


window.onload=function(){
    setInterval(function() {
    
        window.location.href="#second";
    
}, 100);
}


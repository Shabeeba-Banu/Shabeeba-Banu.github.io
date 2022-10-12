

function show_hide_fun1(){
    var x = document.getElementById("pro");
    var y = document.getElementById("edu"); 
    var z = document.getElementById("oth");  
    
    if (x.style.display == "none"){
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
    else{
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
}

function show_hide_fun2(){
    var x = document.getElementById("pro");
    var y = document.getElementById("edu"); 
    var z = document.getElementById("oth");    
    
    if (y.style.display == "none"){
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
    }
    else{
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
    }
}

function show_hide_fun3(){
    var x = document.getElementById("pro");
    var y = document.getElementById("edu"); 
    var z = document.getElementById("oth");    
    if (z.style.display == "none"){
        z.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
    }
    else{
        z.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
    }
}

           
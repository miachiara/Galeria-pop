const optionA = document.querySelector("#optionA");
const optionB = document.querySelector("#optionB");
const optionC = document.querySelector("#optionC");
const optionD = document.querySelector("#optionD");
const select = document.querySelector(".selectMobile");


function ubicacion(ubicacion){
    location.href = ubicacion;
    select.value = "nav";
}

function cambiarHtml(){
    if(select.value == "inicio"){
        ubicacion("../index.html")
    }else if(select.value == "galeria"){
        ubicacion("galeria.html")
    }else if(select.value == "nosotros"){
        ubicacion("nosotros.html")
    }else if(select.value == "registrate"){
        alert("Esta funcionalidad se encuentra en mantenimiento")
        select.value = "nav";
    }
}

setInterval(cambiarHtml, 100)
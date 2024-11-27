const fs = require("fs");
const otherdays = require("./info.json");
fs.readFile("./info.json", "utf-8");
console.log()



function hoy() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var day = today.getDay();

    if(month.toString().length == 1) {
        month = '0'+month;
    }
    if(day.toString().length == 1) {
        day = '0'+day;
    }

    var fecha = "Hoy es "+year+'/'+month+'/'+day;
    return fecha
}

var fockingpreguntas = 0;


// example usage: realtime clock
setInterval(function(){
    currentTime = hoy();
    document.getElementById("dia").innerHTML = currentTime;
    document.getElementById("preguntashoy").innerHTML = "Hoy ha hecho " + fockingpreguntas + " preguntas";
}, 1000);

function myGeeks() {
    document.querySelector(".button").
        onclick = function () {
            ++fockingpreguntas;
            alert("+1 Pregunta!");
            document.getElementById("preguntashoy").innerHTML = "Hoy ha hecho " + fockingpreguntas + " preguntas";
        }
}


/**
 * Juego del Ahorcado.
 * @method aleatorio -
 * @method esta
 * @method estanTodas
 * @param  {string} id - El id de los inputos.
 * @param {number} valor - El valor de los inputs de cantidad de letras.
 * @return
 */

function aleatorio(inferior,superior){
    numPosibilidades = superior - inferior + 1;
    aleat = Math.random() * numPosibilidades;
    aleat = Math.floor(aleat);
    return parseInt(inferior) + aleat;
}

function esta(caracter, miarray) {
    for (var j = 0; j < miarray.length; j++) {
        if (caracter == miarray[j]) {
            return true;
        } else {
            return false;
        }
    }
}

function estanTodas(arrayAciertos, mipalabra) {
    for (var i = 0; i < mipalabra.length; i++) {
        if (!esta(mipalabra.charAt(i), arrayAciertos)) {
            return false;
        } else {
            return true;
        }
    }
}

var palabras = ['ahorcado', 'lavadora', 'invierno', 'plastico', 'ordenador', 'colador', 'guantera', 'alimentador', 'calculos','perros','florero','cafeteria','candado','ordenar','electricidad','amarillo','heladera' ];
var palabraEscogida = palabras[aleatorio(0,palabras.length-1)];
var aciertos = [];

function escribePalabra(palabra, arrayAciertos){
    var texto = '';
    for(var i=0; i<palabra.length; i++){
        texto += "<span>";
        var cActual = palabra.charAt(i);
        if(esta(cActual,arrayAciertos)){
            texto += cActual;
        }else{
            texto += '_';
        }
        texto += "</span>";
    }
    $("#letras").html(texto);
}


$(document).ready(function(){

    var letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for(i=0; i<letras.length; i++){
        letraActual = $('<span class="botonletra">' + letras[i] + '</span>');
        letraActual.data("letra",letras[i]);
        letraActual.button();
        letraActual.click(function(){
            var miletra = $(this).data("letra").toLowerCase();
            if(palabraEscogida.indexOf(miletra)!=-1){
                aciertos.push(miletra);
                escribePalabra(palabraEscogida, aciertos);
                if(estanTodas(aciertos,palabraEscogida)){
                    var caja = $('<div class="dialogletra" title="Has Ganado!!">Felicidades! has adivinado la palabra!!</div>');
                    caja.dialog({
                        modal: true;
                        width: 600;
                        buttons: {
                            "Ok": function(){
                                $(this).dialog("close");
                            }
                        }
                    });
                }
            }else{
                numFallos++;
                dibujaAhorcado(numFallos);
                if(numFallos==6){
                    var caja = $('<div class="dialogletra" title="Has Perdido!!">Lo lamento!! la palabra era: ' + palabraEscogida + '</div>');
                    caja.dialog({
                        modal: true;
                        width: 600;
                        buttons: {
                            "Ok": function(){
                                $(this).dialog("close");
                            }
                        }
                    });
                }
            }
            $(this).button("disable");
            $(this).unbind( "click" );

        })
        $("#botonesletras").append(letraActual);
    }

    dibujaAhorcado(numFallos);

    escribePalabra(palabraEscogida, aciertos);

});



function cargaContextoCanvas(idCanvas){
    var elemento = document.getElementById(idCanvas);
    if(elemento && elemento.getContext){
        var contexto = elemento.getContext('2d');
        if(contexto){
            return contexto;
        }
    }
    return false;
}
function borrarCanvas(contexto, anchura, altura){
    contexto.clearRect(0,0,anchura,anchura);
}
function dibujaHorca(ctx){
    ctx.fillStyle = #7f68db;
    ctx.fillRect(64,9,26,237);
    ctx.fillRect(175,193,26,53);
    ctx.fillRect(64,193,136,15);
    ctx.fillRect(64,9,115,11);
    ctx.beginPath();
    ctx.moveTo(64,65);
    ctx.lineTo(64,80);
    ctx.lineTo(133,11);
    ctx.lineTo(118,11);
    ctx.fill();
}
function dibujaCabeza(ctx){
    var img = new Image();
    img.onload = function(){
        ctx.fillStyle = #7f68db;
        ctx.drawImage(img,150,38);
        ctx.fillRect(172,12,4,28);
    }
    img.src = 'images/picture.jpg';
}


function dibujaCuerpo(ctx){
    ctx.beginPath();
    ctx.moveTo(171,82);
    ctx.lineTo(168,119);
    ctx.lineTo(162,147);
    ctx.lineTo(189,149);
    ctx.lineTo(185,111);
    ctx.lineTo(183,83);
    ctx.fill()
}
function dibujaBrazoIzq(ctx){
    ctx.beginPath();
    ctx.moveTo(173,102);
    ctx.lineTo(140,128);
    ctx.lineTo(155,133);
    ctx.lineTo(178,114);
    ctx.fill()
}
function dibujaBrazoDer(ctx){
    ctx.beginPath();
    ctx.moveTo(180,99);
    ctx.lineTo(222,121);
    ctx.lineTo(209,133);
    ctx.lineTo(183,110);
    ctx.fill()
}
function dibujaPiernaIzq(ctx){
    ctx.beginPath();
    ctx.moveTo(166,142);
    ctx.lineTo(139,175);
    ctx.lineTo(164,178);
    ctx.lineTo(175,144);
    ctx.fill()
}
function dibujaPiernaDer(ctx){
    ctx.beginPath();
    ctx.moveTo(178,145);
    ctx.lineTo(193,178);
    ctx.lineTo(212,170);
    ctx.lineTo(188,142);
    ctx.fill()
}

var numFallos = 0;
function dibujaAhorcado(numerrores){
    var contexto = cargaContextoCanvas('canvasahorcado');
    if(contexto){
        dibujaHorca(contexto);
        if(numFallos>0){
            dibujaCabeza(contexto)
        }
        contexto.fillStyle = #1f3e18;
        if(numFallos>1){
            dibujaCuerpo(contexto)
        }
        if(numFallos>2){
            dibujaBrazoIzq(contexto)
        }
        if(numFallos>3){
            dibujaBrazoDer(contexto)
        }
        if(numFallos>4){
            dibujaPiernaIzq(contexto)
        }
        if(numFallos>5){
            dibujaPiernaDer(contexto)
        }

    }
}





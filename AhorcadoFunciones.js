/**
 * Juego del Ahorcado.
 * @method animarmuñeco -
 * @method cambioGR
 * @param  {string} id - El id de los inputos de metros, yardas, pies y pulgadas.
 * @param {number} valor - El valor de los inputs de metros, yardas, pies y pulgadas.
 * @return
 */
x=0;
dx=2;
function animarMuñeco () {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width=canvas.width;

    var img =new Image();
    gim.src ="imagenes/hangmanrosa.png";


    img.onload= function (){
        ctx.drawImage(img, x, 100);
    }
    if (y>canvas.width){
        x=0;
    }
    x+=x;
}



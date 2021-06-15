/**
 * Juego del Ahorcado.
 * @method cargarWeb -
 * @method cargarResu
 * @method dibujarahorca
 * @param  {string} id - El id de los inputos.
 * @param {number} valor - El valor de los inputs de cantidad de letras.
 * @return
 */


function cargarWeb() {
    var categ, cant,tipo , urlCompl
    categ = document.getElementById("categ")[0].value;
    cant = document.getElementById("cantpalabras")[0].value;
    tipo =document.getElementsByName("tipo")[0].value;

    urlCompl = "pagina3.html#" + categ + "#" + cant + "#" + "#" + tipo;
    window.open(urlCompl);

}
function cargarResu(){
    var urlCompl, categ, cant, tipo;
    urlCompl = window.location.href.split("/")[4];
    categ=urlComp.split("#")[1];
    cant=urlComp.split("#")[2];
    tipo=urlCompl.split("#")[3];

    document.getElementById("cat").value= categ + " " + cant + " " + tipo;
    }

function dibujarahorca(){
    var canvas = document.getElementById("Mycanvas");
    var ctx = canvas.getContext ("2d");
    var yMax = canvas.height;
    var xMax= canvas.width;
    var margen = 30;
    ctx.fillStyle = "#efefef";
    ctx.fillRect(0+margen, yMax-20-margen, 400, 20)
    ctx.fillRect(0+margen, yMax-250-margen, 230, 10)
    ctx.fillRect(0+margen, yMax-250-margen, 10, 230)
    ctx.arc(xMax/2, yMax-230, 20, 0,2*Math.PI);
    ctx.fillRect(xMax/2, yMax-250-margen, 5, 50)
    ctx.fillRect(xMax/2, yMax-250-margen, 5, 150)

    ctx.stroke();
    ctx.fillStyle = "#fdfdfd";
    ctx.fill();
}
function palabra secreta(){
    var canvas = document.getElementById("palabra");
    var cantidad = document.getElementById("cantpalabras");
    var categoria = document.getElementById("categ");
    var tipoju = document.getElementsByName("tipodejugador");
    var palabrasecreta;
        if (cantidad=="7"){
            if (categoria=="ANIMALES"){
                palabrasecreta = CABALLO;
            }
            else if (categoria=="PAISES"){
                palabrasecreta = ECUADOR;
            }
            else if (categoria=="OBJETOS"){
                palabrasecreta== CELULAR;
            }
            else if (categoria=="COMIDAS"){
                palabrasecreta == CIRUELA;
            }

        }
        else if (cantidad=="8"){
            if (categoria=="ANIMALES"){
                palabrasecreta = FLAMENCO;
            }
            else if (categoria=="PAISES"){
                palabrasecreta = COLOMBIA;
            }
            else if (categoria=="OBJETOS"){
                palabrasecreta== CORTINAS;
            }
            else if (categoria=="COMIDAS"){
                palabrasecreta == MILANESA;
            }

        }else if (cantidad=="9") {
            if (categoria == "ANIMALES") {
                palabrasecreta = ORANGUTAN;
            } else if (categoria == "PAISES") {
                palabrasecreta = ARGENTINA;
            } else if (categoria == "OBJETOS") {
                palabrasecreta == TECLADOS;
            } else if (categoria == "COMIDAS") {
                palabrasecreta == ARANDANOS;
            }
        }

    ctx.stroke();
    ctx.fillStyle = "#fdfdfd";
    ctx.fill();
}




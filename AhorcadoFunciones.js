/**
 * Juego del Ahorcado.
 * @method aleatorio -
 * @method esta
 * @method estanTodas
 * @param  {string} id - El id de los inputos.
 * @param {number} valor - El valor de los inputs de cantidad de letras.
 * @return
 */

var palabra = ["Caballo", "Barco", "Terremoto", "Cocinar", "Avalancha", "Gobierno", "Robot", "Ordenador", "Flores"];
var aleatorio =  [Math.floor(Math.random() * palabra.length)];
var palabra = palabra[aleatorio];

var hombre, l, espacio;


// Declaracion de la clase ahorcado

var Ahorcado = function(con)
{
    //this es las variables locales de la clase, accesibles en toda la clase
    //this.contexto es el context de dibujo del canvas, que llega por parametro
    //desde la variable con
    this.contexto = con;
    this.maximo = 7;
    this.intentos = 0;
    this.vivo = true;

    this.dibujar();
}
Ahorcado.prototype.dibujar = function()
{

    var dibujar = this.contexto

    // Poste
    dibujar.beginPath();
    dibujar.poste = new Image();
    dibujar.poste.src = "palo.png";
    dibujar.poste.onload = dibujoPost;
    function dibujoPost()
    {
        dibujar.drawImage(dibujar.poste, 160, 0);
    }
    dibujar.closePath();

    if(this.intentos > 0)
    {
        // Rostro
        dibujar.beginPath();
        dibujar.cabeza = new Image();
        dibujar.cabeza.src = "cabeza-android.png";
        dibujar.cabeza.onload = dibujoCab;
        function dibujoCab()
        {
            dibujar.drawImage(dibujar.cabeza, 220, 30);
        }
        dibujar.closePath();

        if(this.intentos > 1)
        {
            // Cuerpo
            dibujar.beginPath();
            dibujar.cuerpo = new Image();
            dibujar.cuerpo.src = "cuerpo-android.png";
            dibujar.cuerpo.onload = dibujoCuerp;
            function dibujoCuerp()
            {
                dibujar.drawImage(dibujar.cuerpo, 220, 100);
            }
            dibujar.closePath();

            if(this.intentos > 2)
            {
                // Brazo derecho
                dibujar.beginPath();
                dibujar.brazo1 = new Image();
                dibujar.brazo1.src = "brazo-derecho.png";
                dibujar.brazo1.onload = dibujoBrazoDer;
                function dibujoBrazoDer()
                {
                    dibujar.drawImage(dibujar.brazo1, 190, 110);
                }
                dibujar.closePath();

                if(this.intentos > 3)
                {
                    // Brazo izquierdo
                    dibujar.beginPath();
                    dibujar.brazo2 = new Image();
                    dibujar.brazo2.src = "brazo-izquierdo.png";
                    dibujar.brazo2.onload = dibujoBrazoIzq;
                    function dibujoBrazoIzq()
                    {
                        dibujar.drawImage(dibujar.brazo2, 330, 110);
                    }
                    dibujar.closePath();

                    if(this.intentos > 4)
                    {
                        // Pierna derecha
                        dibujar.beginPath();
                        dibujar.pierna1 = new Image();
                        dibujar.pierna1.src = "pierna-derecha.png";
                        dibujar.pierna1.onload = dibujoPiernaDer;
                        function dibujoPiernaDer()
                        {
                            dibujar.drawImage(dibujar.pierna1, 230, 200);
                        }
                        dibujar.closePath();

                        if(this.intentos > 5)
                        {
                            // Pierna izquierda
                            dibujar.beginPath();
                            dibujar.pierna2 = new Image();
                            dibujar.pierna2.src = "pierna-izquierda.png";
                            dibujar.pierna2.onload = dibujoPiernaIzq;
                            function dibujoPiernaIzq()
                            {
                                dibujar.drawImage(dibujar.pierna2, 285, 200);
                            }
                            dibujar.closePath();
                        }
                    }
                }
            }
        }
    }
}

Ahorcado.prototype.trazar = function()
{
    this.intentos++;
    if(this.intentos == this.maximo)
    {
        this.vivo = false;

    }
    this.dibujar();
}

function iniciar()
{
    l = document.getElementById("letra");
    var b = document.getElementById("boton");

    var canvas = document.getElementById("canv");
    canvas.width = 500;
    canvas.height = 350;

    var contexto = canvas.getContext("2d");
    hombre = new Ahorcado(contexto);

    // Convierte a mayuscula la palabra: toUpperCase(); y minuscula: toLowerCase();
    palabra = palabra.toUpperCase();

    // Declaro un array con n espacios de acuerdo al largo de la palabra
    espacio = new Array(palabra.length);

    // Agregamos una funcion que se dispare al dar click al boton

    b.onclick = agregarLetra;

    mostrarPista(espacio);
}

function agregarLetra()
{
    var letra = l.value;
    l.value = "";
    mostrarPalabra(palabra, hombre, letra);
}

function mostrarPalabra (palabra, ahorcado, letra)
{
    var encontrado = false;
    var p;
    letra = letra.toUpperCase();
    for(p in palabra)
    {
        if(letra == palabra[p])
        {
            espacio[p] = letra;
            encontrado = true;
        }
    }
    mostrarPista(espacio);


    // Si No lo encontre...
    if(!encontrado)
    {
        ahorcado.trazar();
    }
    if(!ahorcado.vivo)
    {
        alert(palabra);
        document.write("<p>Perdiste!\nRecarga la pagina para jugar de nuevo </p>" + "\nLa palabra correcta era: " + palabra);
    }
}

if(palabra)

    function mostrarPista(espacio)
    {
        var pista = document.getElementById("pista");
        var texto = "";
        var i;
        var largo = espacio.length;

        for(i = 0; i < largo; i++)
        {
            if(espacio[i] != undefined)
            {
                texto = texto + espacio[i] + " ";
            }
            else
            {
                texto += "_ ";
            }
        }
        pista.innerText = texto;
    }
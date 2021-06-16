/**
 * Juego del Ahorcado.
 * @method Ahorcado - declaracion de la clase ahorcado
 * @method Ahorcado.prototype - imagenes para usar en el canvas segun los aciertos o errores
 * @method DibujoPost - coloca la imagen de la base/poste.
 * @method DibujoCab - coloca la imagen de la cabeza.
 * @method Dibujocuerp - coloca la imagen del cuerpo.
 * @method DibujoBrazoDer - coloca la imagen del brazo derecho.
 * @method DibujoBrazoIzq - coloca la imagen del brazo izq.
 * @method DibujoPiernaDer - coloca la imagen de la pierna derecha.
 * @method DibujoPiernaIzq - coloca la imagen de la pierna izq.
 * @method Ahorcado.prototype.trazar - interfiere en cuando es un error y cuando no.
 * @method agregarLetra - funcion para introducir las letras
 * @method iniciar - inicializa el canvas.
 * @method mostrarPalabra - muestra las pistas (letras que ya se adivinaron)
 * @method mostrarPista - convierte la palabra secreta en guiones (-)
 * @param  {this}  - variables locales de la clase
 * @param {string} palabra - El valor de los inputs de cantidad de letras.
 * @return
 */

var palabra = ["Caballo", "Barco", "Terremoto", "Cocinar", "Avalancha", "Gobierno", "Robot", "Ordenador", "Flores"];
var aleatorio =  [Math.floor(Math.random() * palabra.length)];
var palabra = palabra[aleatorio];

var hombre, l, espacio;

var Ahorcado = function(con)
{

    this.contexto = con;
    this.maximo = 7;
    this.intentos = 0;
    this.vivo = true;

    this.dibujar();
}
Ahorcado.prototype.dibujar = function()
{

    var dibujar = this.contexto;

    // Poste
    dibujar.beginPath();
    dibujar.poste = new Image();
    dibujar.poste.src = "imagenes/base.png";
    dibujar.poste.onload = dibujoPost;
    function dibujoPost()
    {
        dibujar.drawImage(dibujar.poste, 100, 0);
    }
    dibujar.closePath();

    if(this.intentos > 0)
    {
        // Cabeza
        dibujar.beginPath();
        dibujar.cabeza = new Image();
        dibujar.cabeza.src = "imagenes/cabeza.png";
        dibujar.cabeza.onload = dibujoCab;
        function dibujoCab()
        {
            dibujar.drawImage(dibujar.cabeza, 100, 0);
        }
        dibujar.closePath();

        if(this.intentos > 1)
        {
            // Cuerpo
            dibujar.beginPath();
            dibujar.cuerpo = new Image();
            dibujar.cuerpo.src = "imagenes/cuerpo.png";
            dibujar.cuerpo.onload = dibujoCuerp;
            function dibujoCuerp()
            {
                dibujar.drawImage(dibujar.cuerpo, 100, 0);
            }
            dibujar.closePath();

            if(this.intentos > 2)
            {
                // Brazo 1
                dibujar.beginPath();
                dibujar.brazo1 = new Image();
                dibujar.brazo1.src = "imagenes/brazo1.png";
                dibujar.brazo1.onload = dibujoBrazoDer;
                function dibujoBrazoDer()
                {
                    dibujar.drawImage(dibujar.brazo1, 100, 0);
                }
                dibujar.closePath();

                if(this.intentos > 3)
                {
                    // Brazo 2
                    dibujar.beginPath();
                    dibujar.brazo2 = new Image();
                    dibujar.brazo2.src = "imagenes/brazo2.png";
                    dibujar.brazo2.onload = dibujoBrazoIzq;
                    function dibujoBrazoIzq()
                    {
                        dibujar.drawImage(dibujar.brazo2, 100, 0);
                    }
                    dibujar.closePath();

                    if(this.intentos > 4)
                    {
                        // Pierna 1
                        dibujar.beginPath();
                        dibujar.pierna1 = new Image();
                        dibujar.pierna1.src = "imagenes/pierna1.png";
                        dibujar.pierna1.onload = dibujoPiernaDer;
                        function dibujoPiernaDer()
                        {
                            dibujar.drawImage(dibujar.pierna1, 100, 0);
                        }
                        dibujar.closePath();

                        if(this.intentos > 5)
                        {
                            // Pierna 2
                            dibujar.beginPath();
                            dibujar.pierna2 = new Image();
                            dibujar.pierna2.src = "imagenes/pierna2.png";
                            dibujar.pierna2.onload = dibujoPiernaIzq;
                            function dibujoPiernaIzq()
                            {
                                dibujar.drawImage(dibujar.pierna2, 100, 0);
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


    // Si No se encuentra la letra
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
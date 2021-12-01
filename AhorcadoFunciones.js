/**
 * Juego del Ahorcado.
 * @param  {this}  - variables locales de la clase
 * @return
 */

var palabra;
var animales = ["Caballo","Rinocero", "Perro", "Cabra", "Gato", "Tortuga", "Jirafa"];
var objetos =["Escoba", "Maceta", "Silla", "Cafetera", "Portones", "Lapiz", "Escritorio"];
var paises =["Argentina", "Brazil", "Chile", "Canada", "Italia", "Japon", "Grecia"];
var comidas=["Manzana", "Sandwich", "Pizza", "Pasta", "Langosta", "Ensalada", "Asado"];


var hombre, l, espacio;

/**
 * @method Elegir - elige la palabra a adivinar de acuerdo a lo elegido por el usuario
 * @param catalogo la categoria de palabras q eligio el usuario
 * @param cantidadlet la cantidad de letras q eligio el usuario
 * @constructor
 */
function Elegir(catalogo, cantidadlet){

    if(catalogo=="animales") {
            if(cantidadlet==4){
                animales=["Gato", "Foca", "Orca", "Leon"]
                animales=animales[Math.floor(Math.random() * animales.length)];
                palabra=animales;
            }
        if(cantidadlet==5){
            animales=["Perro", "Mosca", "Tigre"]
            animales=animales[Math.floor(Math.random() * animales.length)];
            palabra=animales;
        }
        if(cantidadlet==6){
            animales=["Jirafa", "Cebras", "Pajaro"]
            animales=animales[Math.floor(Math.random() * animales.length)];
            palabra=animales;
        }
        if(cantidadlet==7){

            animales=["Tortuga", "Ballena", "Tiburon"]
            animales=animales[Math.floor(Math.random() * animales.length)];
            palabra=animales;
        }
        if(cantidadlet==8){

            animales=["Elefante", "Caballos", "Langosta"]
            animales=animales[Math.floor(Math.random() * animales.length)];
            palabra=animales;
        }

    }

    if(catalogo=="objetos") {
        if(cantidadlet==4){
            objetos=["Foco", "Vaso", "Mesa", "Goma"]
            objetos=objetos[Math.floor(Math.random() * objetos.length)];
            palabra=objetos;
        }
        if(cantidadlet==5){
            objetos=["Silla", "Termo", "Regla"]
            objetos=objetos[Math.floor(Math.random() * objetos.length)];
            palabra=objetos;
        }
        if(cantidadlet==6){
            objetos=["Puerta", "Jarron", "Porton", "Camion"]
            objetos=objetos[Math.floor(Math.random() * objetos.length)];
            palabra=objetos;
        }
        if(cantidadlet==7){

            objetos=["Palmera", "Remeras", "Cartera", "Lampara"]
            objetos=objetos[Math.floor(Math.random() * objetos.length)];
            palabra=objetos;
        }
        if(cantidadlet==8){

            objetos=["Acordeon", "Rallador", "Serrucho", "Escalera"]
            objetos=objetos[Math.floor(Math.random() * objetos.length)];
            palabra=objetos;
        }
    }
    if(catalogo=="paises") {

        if(cantidadlet==4){
            paises=["Peru", "Irak", "Mali", "Cuba"]
            paises=paises[Math.floor(Math.random() * paises.length)];
            palabra=paises;
        }
        if(cantidadlet==5){
            paises=["Suiza", "Chile", "Japon", "China"]
            paises=paises[Math.floor(Math.random() * paises.length)];
            palabra=paises;
        }
        if(cantidadlet==6){
            paises=["España", "Brasil", "Egipto", "Canada", "Monaco"]
            paises=paises[Math.floor(Math.random() * paises.length)];
            palabra=paises;
        }
        if(cantidadlet==7){

            paises=["Croacia", "Austria", "Bolivia", "Ucrania"]
            paises=paises[Math.floor(Math.random() * paises.length)];
            palabra=paises;
        }
        if(cantidadlet==8){

            paises=["Alemania", "Paraguay", "Colombia", "Honduras"]
            paises=paises[Math.floor(Math.random() * paises.length)];
            palabra=paises;
        }
    }
    if(catalogo=="comida") {

        if(cantidadlet==4){
            comidas=["Papa", "Atun", "Uvas", "Pera"]
            comidas=comidas[Math.floor(Math.random() * comidas.length)];
            palabra=comidas;
        }
        if(cantidadlet==5){
            comidas=["Arroz", "Carne", "Huevo", "Sushi"]
            comidas=comidas[Math.floor(Math.random() * comidas.length)];
            palabra=comidas;
        }
        if(cantidadlet==6){
            comidas=["Salmon", "Quesos", "Banana", "Paella"]
            comidas=comidas[Math.floor(Math.random() * comidas.length)];
            palabra=comidas;
        }
        if(cantidadlet==7){

            comidas=["Tostada", "Churros", "Granola", "Oregano"]
            comidas=comidas[Math.floor(Math.random() * comidas.length)];
            palabra=comidas;
        }
        if(cantidadlet==8){

            comidas=["Caramelo", "Gelatina", "Maracuya", "Tortilla"]
            comidas=comidas[Math.floor(Math.random() * comidas.length)];
            palabra=comidas;
        }
    }

}
/**
 * @method Ahorcado.prototype - imagenes para usar en el canvas segun los aciertos o errores
 * @param con contexto del canvas
 */
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
    dibujar.moveTo(150,100);
    dibujar.lineTo(150,50);
    dibujar.lineTo(400,50);
    dibujar.lineTo(400,350);
    dibujar.lineWidth = 5;
    dibujar.strokeStyle = "blue";
    dibujar.stroke();
    dibujar.closePath();

    if(this.intentos > 0)
    {
        // Cabeza
        dibujar.beginPath();
        dibujar.arc(150, 140, 40, 0,Math.PI*2, false);
        dibujar.strokeStyle="blue";
        dibujar.lineWidth=2;
        dibujar.stroke();
        dibujar.closePath();


        if(this.intentos > 1)
        {
            // Cuerpo
            dibujar.beginPath();
            dibujar.moveTo(150, 180);
            dibujar.lineTo(150, 250);
            dibujar.strokeStyle= "blue";
            dibujar.lineWidth=2;
            dibujar.stroke();

            dibujar.closePath();

            if(this.intentos > 2)
            {
                // Brazo 1
                dibujar.beginPath();
                dibujar.moveTo(120, 220);
                dibujar.lineTo(150, 180);
                dibujar.lineTo(180,220);
                dibujar.strokeStyle = "blue";
                dibujar.lineWidth=2;
                dibujar.stroke();

                dibujar.closePath();

                if(this.intentos > 3)
                {
                    // Brazo 2
                    dibujar.beginPath();
                    dibujar.moveTo(120, 290);
                    dibujar.lineTo(150, 250);
                    dibujar.lineTo(180,290);
                    dibujar.strokeStyle = "blue";
                    dibujar.lineWidth=2;
                    dibujar.stroke();

                    dibujar.closePath();

                    if(this.intentos > 4) {
                        // Pierna 1
                        dibujar.beginPath();
                        dibujar.moveTo(125, 120);
                        dibujar.lineTo(145,145);
                        dibujar.lineTo(145,120);
                        dibujar.lineTo(125,145);

                        dibujar.moveTo(155, 120);
                        dibujar.lineTo(175, 145);
                        dibujar.lineTo(175, 120);
                        dibujar.lineTo(155, 145);

                        dibujar.strokeStyle = "blue";
                        dibujar.lineWidth = 2;
                        dibujar.stroke();

                        if(this.intentos > 5) {

                            dibujar.beginPath();
                            dibujar.arc(150, 140, 60, 0,Math.PI*2, false);
                            dibujar.strokeStyle="red";
                            dibujar.lineWidth=2;
                            dibujar.stroke();
                            dibujar.closePath();

                            }
                        }
                    }
                }
            }
        }
    }


/**
 *  @method Ahorcado.prototype.trazar - interfiere en cuando es un error y cuando no para mantener vivo o matar al muñeco.
 */
Ahorcado.prototype.trazar = function()
{
    this.intentos++;
    if(this.intentos == this.maximo)
    {
        this.vivo = false;
    }
    this.dibujar();


}


/**
 * @method iniciar - inicializa el canvas.
 * @param sin parametros
 */

function iniciar()
{

    l = document.getElementById("letra");
    var b = document.getElementById("boton");

    var catalogo=localStorage.getItem("catalogo");
    var cantidadlet=localStorage.getItem("cantidadlet");

    var canvas = document.getElementById("canv");
    canvas.width = 500;
    canvas.height = 350;

    var contexto = canvas.getContext("2d");
    hombre = new Ahorcado(contexto);

    Elegir(catalogo, cantidadlet);
    // Convierte a mayuscula la palabra: toUpperCase(); y minuscula: toLowerCase();
    palabra = palabra.toUpperCase();

    // Declaro un array con n espacios de acuerdo al largo de la palabra
    espacio = new Array(palabra.length);

    // Agregamos una funcion que se dispare al dar click al boton

    b.onclick = agregarLetra;

    mostrarPista(espacio);


}

/**
 *  @method agregarLetra - funcion para introducir las letras
 */

function agregarLetra()
{
    var letra = l.value;
    l.value = "";
    mostrarPalabra(palabra, hombre, letra);
}


/**
 * * @method mostrarPalabra - muestra las pistas (letras que ya se adivinaron)
 * @param palabra palabra a adivinar
 * @param ahorcado dibujo del canvas para comparar si se acabaron los intentos o no
 * @param letra caracter ingresado por tecldo, para compararlo con los caracteres de la palabra
 * @constructor
 */
function mostrarPalabra (palabra, ahorcado, letra)
{

    var encontrado = false;
    var p;
    var cont=0, cont2=0;
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

    if(!encontrado)
    {
        ahorcado.trazar();

    }
    if(!ahorcado.vivo)
    {
        alert("NO! PERDISTE ERA:" + palabra);
        document.write("<p>Perdiste!\nRecarga la pagina para jugar de nuevo </p>" + "\nLa palabra correcta era: " + palabra);
    }
   for(p in palabra) {
    if (espacio[p] == palabra[p]) {
        cont++;
        }
    cont2++;
    }
    if(cont==cont2){
            alert("SI!! ES: " + palabra);
            document.write("<p>GANASTE FELICITACIONES!\nRecarga la pagina para jugar de nuevo </p>");
    }

}

function cargarWeb(){
    var catalogo=document.getElementById('categ').value;
    var cantidadlet=document.getElementById('cantpalabras').value;

    localStorage.setItem("catalogo", catalogo);
    localStorage.setItem("cantidadlet", cantidadlet);

    window.open("pagina3.html");

}



/**
 * @method mostrarPista - convierte la palabra secreta en guiones (-)
 * @param espacio vector con las letras de la palabra a adivinar
 * @constructor
 */
    function mostrarPista(espacio)
    {
        var pista = document.getElementById("pista");
        var texto = "";
        var i;
        var largo = espacio.length;

        for(i = 0; i < largo; i++)
        {
            if(espacio[i] !== undefined)
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
var x=0;
var dx=2;
function animarMuneco (posX, posY){

        var canvas = document.getElementById("mycanv");
        var ctx = canvas.getContext("2d");

        canvas.width =canvas.width;

        var img = new Image();
        img.src = "imagenes/animado.png";

        img.onload = function (){
            ctx.drawImage(img, x,100);
        }

        if (x>canvas.width){
            x=0;
        }

        x+=dx;
}
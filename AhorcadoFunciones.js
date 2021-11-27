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

//var aleatorio =  [Math.floor(Math.random() * palabra.length)];

//var palabra = palabra[aleatorio];

var hombre, l, espacio;


function Elegir(catalogo, cantidadlet){

    var largo;
    var i;


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

            objetos=["Acordeon", "Hospital", "Serrucho", "Escalera"]
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
 * @param con
 * @constructor
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
    dibujar.beginPath();
    dibujar.poste = new Image();
    dibujar.poste.src = "imagenes/base.png";
    dibujar.poste.onload = dibujoPost;
    function dibujoPost()
    {
        dibujar.drawImage(dibujar.poste, 100, 0);
    }
    dibujar.closePath();

    /*if(ganador==true){
        // Gano
        dibujar.beginPath();
        dibujar.salvado = new Image();
        dibujar.salvado.src = "imagenes/salvado.png";
        dibujar.salvado.onload=dibujoSalvado();

        function dibujoSalvado()
        {
            dibujar.drawImage(dibujar.salvado, 100, 0)
        }
        dibujar.closePath();
    }*/

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

                    if(this.intentos > 4) {
                        // Pierna 1
                        dibujar.beginPath();
                        dibujar.pierna1 = new Image();
                        dibujar.pierna1.src = "imagenes/pierna1.png";
                        dibujar.pierna1.onload = dibujoPiernaDer;

                        function dibujoPiernaDer() {
                            dibujar.drawImage(dibujar.pierna1, 100, 0);
                        }

                        dibujar.closePath();


                        if(this.intentos > 5) {
                            // Pierna 2
                            dibujar.beginPath();
                            dibujar.pierna2 = new Image();
                            dibujar.pierna2.src = "imagenes/murio.png";
                            dibujar.pierna2.onload = dibujoPiernaIzq;

                            function dibujoPiernaIzq() {
                                dibujar.drawImage(dibujar.pierna2, 100, 0);
                            }

                            dibujar.closePath();

                            /*if(this.intentos == 7) {
                                // MURIO
                                dibujar.beginPath();
                                dibujar.muerto = new Image();
                                dibujar.muerto.src = "imagenes/murio.png";
                                dibujar.muerto.onload = dibujoAhorcado;

                                function dibujoAhorcado() {
                                    dibujar.drawImage(dibujar.muerto, 100, 0);
                                }

                                dibujar.closePath();

                            }*/
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
 * @param palabra valor de la palabra a adivinar
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
 * @param espacio convertir en guiones las letras de la palabra, vector de letras con las que se forma la palabra
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


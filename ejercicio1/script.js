//1. Solicita al usuario tres números enteros e indícale cuál es el menor.

var primero = prompt("Dime el primer número")
var segundo = prompt("Dime el segundo número")
var tercero = prompt("Dime el tercer número")

if (primero < segundo && primero < tercero){
    alert("El número " + primero + " es menor")
} else if (segundo < primero && segundo < tercero) {
    alert("El número " + segundo + " es menor")
} else if (tercero < primero && tercero < segundo) {
    alert("El número " + tercero + " es menor")
} else {
    alert("Algo raro pasa")
}
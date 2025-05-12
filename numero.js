/*Realiza un programa un programa que reciba un número por y evalúe si es par o impar.
- Si es par, devuelve "El número es par"
- Si es impar, devuelve "El número es impar"
- Si no se recibe ningún número, devuelve "No se recibió ningún número"
- Si no es un número, devuelve "No es un número" */

let numero = prompt ("Ingrese un numero:");
if(numero=="Number"){
    if(numero%2==0){
        console.log("El numero es par");
    } else if(numero%2==1){
        console.log("El numero es impar");
    } else {
        console.log("No se recibio ningun numero");
    }
} else{
    console.log("No es un numero");
}

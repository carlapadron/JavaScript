/*Recibir datos por consola
- prompt: recibe un dato por consola y lo devuelve como string
Ejemplo: let nombre = prompt("¿Cual es tu nombre?");

Realiza un programa que funcione como un semáforo, que reciba un color por consola y devuelva el siguiente mensaje:
- Si el color es rojo, devuelve "Detenerse"
- Si el color es amarillo, devuelve "Precaución"
- Si el color es verde, devuelve "Avanzar"
- Si es cualquier otro color, devuelve "Color no válido"
- Si no se recibe ningún color, devuelve "No se recibió ningún color" */

let color = prompt ("Escriba un color: rojo, amarillo o verde");
switch (color){
    case "rojo":
        console.log("Detente!!!");
        break;
    case "amarillo":
        console.log("Precaucion!");
        break;
    case "verde":
        console.log("Avance!");
        break;
    case " ":
        console.log("No se recibio ningun color");
        break;
    default:
        console.log("Color no valido");
}
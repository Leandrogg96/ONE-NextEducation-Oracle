/*
1.Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

2.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

3.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

4.Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

5.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

6.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

7.Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

8.Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

9.Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

10.Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

11.Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

12.Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

13.Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
*/

//1
alert("Welcome!")
console.log("Welcome!");

//2 & 3
let nameUser = "Leandro";

alert(`Hi, ${nameUser}!`)
console.log(`Hi, ${nameUser}!`)

//4
let response = prompt("Which of all the programming languages do you like the most?");
alert(`${response}, great!`);
console.log(`${response}, great!`);

//5 & 6
let value1 = Math.floor(Math.random()*20)+1;
let value2 = Math.floor(Math.random()*20)+1;

function sum (value1, value2) {
    return value1 + value2;
}

function dif (value1, value2) {
    return value1 - value2;
}

let resultSum = sum(value1, value2);
let resultDif = dif(value1, value2);

alert(`The result of the operation sum between ${value1} and ${value2} is: ${resultSum}.`)
alert(`The result of the operation dif between ${value1} and ${value2} is: ${resultDif}.`)

//7
let ageUser = parseInt(prompt("Please enter your age: "));

if (ageUser >= 18) {
    alert("You are of age!");
} else {
    alert("You are not of legal age.");
}

//8
let numSign = parseInt(prompt("Please enter a number: "));

if (numSign >= 0) {
    alert(`${numSign} is a positive number.`);
} else {
    alert(`${numSign} is a negative number.`);
}

//9
let counter = 1;
while (counter < 11) {
    alert(`Hi inside the loop! ${counter}.`);
    counter++;
}

//10
let note1 = Math.floor(Math.random()*10)+1;

if (note1 >= 7) {
    alert(`Congratulations, your calification is ${note1}, you passed.`);
} else {
    alert(`I'm sorry, your calification is ${note1}, you failed.`);
}

//11

let numberRandom = Math.floor(Math.random());
alert(`The random number is: ${numberRandom}`);

//12
let numberRandom2 = Math.floor(Math.random()*10)+1;
alert(`The random number is: ${numberRandom2}`);

//13
let numberRandom3 = Math.floor(Math.random()*1000)+1;
alert(`The random number is: ${numberRandom3}`);
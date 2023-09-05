const prompt = require('prompt-sync')();

console.log( "Calculadora")
let num1 = parseFloat(prompt("Escolha o primeiro número:"));

let operação = prompt("Qual operação deseja fazer? (+, -, *, /) ");

let num2 = parseFloat(prompt("Escolha o segundo número: "));

let resultado;



switch (operação){

case "+":
resultado = num1 + num2;
break;

case "-":
resultado = num1 - num2;
break;

case "*":
resultado = num1 * num2;
break;

case "/":
resultado = num2 !== 0 ? num1 / num2: "Erro: Divisão por zero";
break;

default:
  resultado = "Operação inválida;"
}

console.log ("Resultado = " + resultado );




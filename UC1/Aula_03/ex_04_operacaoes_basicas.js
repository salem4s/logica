//4. Construir uma página na qual o usuário digitará 2 números e o programa exibirá, na tela, o resultado das quatro operações básicas da matemática.

let numero1 =  parseInt(prompt("Digite o primeiro numero: "));
let numero2 = parseInt(prompt("Digite o segundo numero: "));

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 + numero2;
let divisao = numero1 / numero2;

//alert("A soma dos dois numeros = " +  soma);
//alert("A subtração dos dois numeros = " + subtracao);
//alert("(*) = " + multiplicacao);
//alert("(/) = " +  divisao);

document.write("A soma dos dois numeros = " +  soma);
document.write("<br>");
document.write("A subtração dos dois numeros = " + subtracao);
document.write("<br>");
document.write("(*) = " + multiplicacao);
document.write("<br>");
document.write("(/) = " +  divisao);




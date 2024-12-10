//1. Construir um programa no qual o usuário digitará um numero entre 1 e 12 e o sistema retornará, na tela, qual mês corresponde a esse numero. O desenvolvedor terá́ que utilizar o comando Switch.

let mes = 1;

switch(mes){
    case 1 :
        console.log("Janeiro.");
        break;
    case 2 :
        console.log("Fevereiro.");
        break;
    case 3 :
        console.log("Março.");
        break;
    case 4 :
        console.log("Abril.");
        break;
    case 5 :
        console.log("Maio.");
        break;
    case 6 :
        console.log("Junho.");
        break;
    case 7 :
        console.log("Julho.");
    case 8 : 
        console.log("Agusto.");
        break;
    case 9 :
        console.log("Setembro.");
        break;
    case 10 :
        console.log("Outubro.");
        break;
    case 11 :
        console.log("Novembro.");
        break;
    case 12 :
        console.log("Dezembro.");
        break;

    default :
        console.log("@@@ Numero do Mes Invalido @@@");
}

let nota = 5;


switch(true){
    case (nota < 0 && nota > 10):
        console.log("@@@ NOTA INVÁLIDA @@@");
        break;
    case (nota > 0 && nota < 4):
        console.log(" Aluno Reprovado");  
        break;
    case (nota >= 4 && nota < 7):
        console.log(" Aluno em Recuperação ");    
        break;
    case (nota >= 7 && nota <= 10):
        console.log(" Aluno Aprovado ");
        break;
    default:
        console.log(" @@@ NOTA INVALIDA @@@");



} 

/* let idade = 17;

let resultado = (idade >= 18) ? "Adult" : "Minor";

console.log(resultado  ); */
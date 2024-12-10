//1. A escola Lemos Segundo resolveu criar um programa para ajudar os professores nos conceitos dos estudantes. O(a) professor(a) irá digitar a nota tirada pelo aluno. Caso seja menor do que 0 ou maior do que 10, o programa irá escrever “Nota Inválida”; se for maior ou igual a 0 e menor do que 4, o programa irá escrever, “aluno reprovado”. Se a nota for maior ou igual a 4 e menor do que 7, o programa irá escrever “Aluno em Recuperação” e, caso seja maior ou igual a 7 e menor ou igual a 10, escreverá “Aluno Aprovado”.

let nota = 6;

/* if(nota >= 7 && nota <= 10){
    console.log("Aluno Aprovado");
}
else if( nota >= 4 && nota < 7){
    console.log("Aluno em Recuperação");
}
else if( nota >= 0 && nota < 4){
    console.log("Aluno Reprovado");
}
else{
    console.log("Nota Invalida");
} */



if(nota < 0 && nota > 10 ){
    console.log("Nota Invalida");
}
else if( nota >= 0 && nota < 4){
    console.log("Aluno Reprovado");
}
else if( nota >= 4 && nota < 7){
    console.log("Aluno em Recuperação");
}
if(nota >= 7 && nota <= 10){
    console.log("Aluno Aprovado");
}

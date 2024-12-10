//2. A escola Lemos Segundo gostou do sistema que você desenvolveu e, com isso, pediu um “upgrade”. Aproveitando o código do exercício anterior, eles solicitaram que, no caso de o estudante ficar em recuperação, o programa deverá solicitar a digitação de mais uma nota. Se essa nota for menor que 5, o programa escreverá “Reprovado na Recuperação” e, caso contrário, “Aprovado na Recuperação”.

let nota =6;

if(nota >= 7 && nota <= 10){
    console.log("Aluno Aprovado");
}
else if( nota >= 4 && nota <= 7){
    console.log("Aluno em Recuperação");

    let notaRecuperacao = 4 
    if( notaRecuperacao >= 5 && notaRecuperacao <= 7){
        console.log("Aprovado na Recuperação");

    }
    else{
        console.log("Reprovado na Recuperação");
    }
    
}
else if( nota >= 0 && nota < 4){
    console.log("Aluno Reprovado");
}
else{
    console.log("Nota Invalida");
}
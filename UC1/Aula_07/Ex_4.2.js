//2. Agora, o estudante construirá́, utilizando o comando Switch, um programa para o Senac. O instrutor irá digitar um desses três conceitos (A, PA ou NA). Caso ele escolha A, escreverá na tela “Atendido”; caso ele escolha PA, o programa escreverá na tela “Parcialmente Atendido”; ou caso ele digite NA, o programa colocará na tela “Não Atendido”.

let codigoOperacao = "NA";

switch(codigoOperacao){
    case "A" :
        console.log("Atendido.");
        break;
    case "PA" :
        console.log("Parcialmente Atendido.");
        break;
    case "NA" :
        console.log("Não Atendido.");
        break;
    
    default :
        console.log("@@@ CÓDIGO INVÁLIDO");
}
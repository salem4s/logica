// Crie um codigo que classifique o desempenho de um emprego com base no numero de vendas realizadas. O numero de vendas será dado pela variavel vendas. O código deve verificar as seguintes condições:

//.1 se o numero de vendas for menor que 0, exeber:
// numero de vendas invalido
//2. se o numero de vendas for de 0 a 4, exebir :
// desempenho insuficiente
//3. se o numero de vendas for de 5 a 9, exebir :
//desempenho satisfatório
//4. se o numero for de 10 ou mais, exirir : 
// desmpenheno exelente

vendas = 10;

if(vendas < 0 ){
    console.log(" Numero de vendas Invalido.");
}
else if(vendas == 0 && vendas <= 4 ){
    console.log("Desempenho Insuficiente.");
}
else if(vendas >= 5 && vendas <= 9 ){
    console.log("Desempenho Satisfatório.");
}
else if(vendas >= 10){
    console.log(" Desempenho Exelente.");
}




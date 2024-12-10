//3.  Construir um programa onde um vendedor irá digitar quanto ele vendeu em um mês na loja. Caso esse total de vendas seja maior ou igual a R$ 10.000, o programa irá calcular uma comissão de 4% sobre suas vendas, mas caso a venda seja menor, o programa calculará apenas 2%.

let vendasDoMes = 19000;
let metaMes = 10000; // escopo global
let comissao = 0; // escopo global

if( vendasDoMes >= metaMes){
     // escopo local
    comissao = vendasDoMes * 0.04;
    console.log(´`
    ================================
    A sua comissão desse mes é : R$ ${comissao}
    ================================
    `);     }
else if( vendasDoMes < metaMes){
    comissao = vendasDoMes * 0.2;
   
    console.log(´`
    ================================
    A sua comissão desse mes é : R$ ${comissao}
    ================================
    `);     
}
else {
    console.log("@@@ DIGITE UM VALOE VALIDO @@@");
}

console.log("By: Salem");

console.log(``);
//2. Construir um programa onde o usuário saberá o valor do seu colesterol. Caso o valor seja menor ou igual que 180, o programa irá escrever na tela “Saúde Ok”; caso contrário, o programa escreverá na tela “Vamos procurar uma ajuda médica?”




let valorColesterol = 190;
const taxaColesterol = 180;
if( valorColesterol <= taxaColesterol){
    console.log(" Saúde OK!");
}
else if( valorColesterol > taxaColesterol ){
    console.log("Vamos procurar uma ajuda médica?")

}
else{
    console.log("@@@ Digite um valor valido @@@")
}
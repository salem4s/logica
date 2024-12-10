//Operação de deposito
  //Deve ser possível depositar valores positivos para a conta bancária. A v1 do projeto trabalha apenas com 1 usuário, dessa forma não precisamos nos preocupar em identificar qual é o número da agência e conta bancária. Todos os depósitos devem ser armazenados em uma variável e exibidos na operação de extrato.

  const limiteSaques = 3;
  let saldo = 0;
  let extrato = "";
  let limite = 500;
  let numeroSaques = 3;

  while(true){
    let menu = prompt(`
             =========================
             selecione uma opção: 
             [d] Deposito 
             [s] Saque
             [e] Extrato
             [s] sair
             =========================`);
             if(menu == "d"){
               let valor = parseFloatprompt("Qual valor do despósito");

               if(valor < 0 ){
                saldo += valor;
                extrato = extrato + `Deposito de R$ ${valor}`;
                alert(`Deposito de R$ ${valor} realizado com sucesso.`);
                }
                else{
                    alert("@@@ Operação Falhou!, Numero Invalido.");
                }
                
               }
               else if (menu == "s"){
                let valorSaque = parseFloatprompt("Inseri um valor.");
                


               }

             }

  }
  

//Criando um sistema bancário v1.0

//VARIÁVEIS GLOBAIS:

let saldo = 0;
let limite = 500;
let extrato = "";
let numeroSaques = 0;

const limiteSaques = 3; //O limite de saques diários são 3 vezes por dia, logo, uma constante.

while(true){
    menu = prompt(` 
    ========== M E N U ==========
    [D] Depósito
    [S] Sacar
    [E] Extrato
    [Q] Sair
    =============================
    `) //Variável em escopo local

//OPERAÇÃO DE DEPÓSITO: 
//Depositar valores positivos;
//Todos os depósitos devem ser armazenados em uma variável;
//Todos os depósitos devem ser exibidos na operação de extrato.

    if(menu == "D"){
        deposito = parseFloat(prompt("Digite o valor que deseja depositar: ")); //Variável em escopo local
     
        if(deposito > 0){
            saldo += deposito;
            extrato += `Depósito: R$${deposito} \n`; //Concatenação: extrato + template string
            alert(`Depósito de R$${deposito} realizado.`);
        
    } else{
        alert("Falha na operação. Digite um valor válido!");
    }
} 

//OPERAÇÃO DE SAQUE:
//O sistema deve permitir realizar 3 saques diários;
//Limite máximo de R$500,00 por saque;
//Caso o usuário não tenha saldo em conta, exibir a mensagem "Não é possível sacar o dinheiro por falta de saldo.";
//Todos os saques devem ser armazenados em uma variável;
//Todos os saques devem ser exibidos na operação de extrato.

    else if(menu == "S"){
        saque = parseFloat(prompt("Digite o valor que deseja sacar: ")); //Variável em escopo local
        excedeuSaque = numeroSaques >= limiteSaques;
        excedeuSaldo = saque > saldo;
        excedeuLimite = saque > limite;

        if(excedeuSaque){
            alert("Falha na operação. Número máximo de saques excedido. Tente novamente amanhã!");
        } else if(excedeuSaldo){
            alert("Falha na operação. Você não tem saldo suficiente!");
        } else if(excedeuLimite){
            alert("Falha na operação. O valor do saque excede o limite!");
        } else if(saque > 0){
            saldo -= saque;
            extrato += `Saque de R$${saque}\n`;
            alert(`Saque de R$${saque} realizado.`);
            numeroSaques++;
        } else{
            alert("Falha na operação. Digite um valor válido!");
        }
}

//OPERAÇÃO DE EXTRATO:
//Listar todos os depósitos realizados na conta;
//Listar todos os saques realizados na conta;
//Exibir o saldo atual da conta no fim da listagem;
//Se o extrato estuver em branco, exibir a mensagem: "Não foram realizadas movimentações. ".

    else if(menu == "E"){
        mensagem = extrato == "" ? "Não foram realizadas movimentações" : extrato
        alert(`
        ========== E X T R A T O ==========
        ${mensagem}
        Saldo: R$ ${saldo.toFixed(2)}
        `)
    } else if(menu == "Q"){
        alert("Obrigado pela preferência!!!")
        break
    } else{
        alert("Opção inválida, por favor selecione novamente a operação desejada");
    } }

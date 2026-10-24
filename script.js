/*
===============================
SISTEMA DE ANALISE DE NUMEROS
===============================
*/

// Cria a lista de armazenamento
let lista = [];

// Obter elementos pelo ID
const obterElementos = (id) => document.getElementById(id);

// Funções auxiliares
const limpaCampo = () =>{
    return obterElementos("numero").value = "";
}

// Obter numero usuário
const numInit = () => {
    return parseFloat(obterElementos("numero").value);
}

// Valida numero inteiro
const ehInteiro = (valor) => {
    if(valor % 1 === 0){
        return true;
    }
    return false;
}

// Exibe lista
const exibeLista = () => {
    let texto = "";

    const mensagem = (valor) => {
        obterElementos("lista").textContent = valor;
    }

    for(let i = 0; i < lista.length; i++){
       texto += lista[i] + " ";     
    }

    mensagem(texto.trim());   
    
}

// Função adicionar
function adicionar() {
    const numUsuario = numInit();

    console.log("Número recebido:", numUsuario);

    if(!Number.isFinite(numUsuario) || !ehInteiro(numUsuario)){
        console.log("Validação: número inválido");
        alert("Digite um número inteiro válido.");
        return;
    }

    console.log("Validação: número válido");

    lista.push(numUsuario);

    console.log("Lista atual:", lista);

    limpaCampo();

    exibeLista();
}


// Função Limpar Lista
function limpar() {
    
    lista.length = 0;
    console.log("Lista atual:", lista);
    
    obterElementos("lista").textContent = "";
}

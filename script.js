/*
===============================
SISTEMA DE ANALISE DE NUMEROS
===============================
*/

// ===============================
// CRIAR LISTA E FUNÇÃO AUXILIAR
// ===============================

// Lista de armazenamento
let lista = [];

// Funções auxiliares
const limpaCampo = () =>{
    return obterElementos("numero").value = "";
}

// ==============================
// OBTER ELEMENTOS E VALORES
// ==============================

// Obter elementos pelo ID
const obterElementos = (id) => document.getElementById(id);


// Obter numero usuário
const numInit = () => {
    return parseFloat(obterElementos("numero").value);
}

// ============================
// VALIDAÇÕES DE VALORES
// ============================

// Valida numero inteiro
const ehInteiro = (valor) => {
    if(valor % 1 === 0){
        return true;
    }
    return false;
}

// Valida Lista de Numeros
const naoContemValores = (valor) => {
    if(valor.length === 0){
        return true;
    }
    return false;
}

// =============================
// EXIBIR OS VALORES ADICIONADOS
// =============================

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

// =============================
// CRIAÇÃO DAS FUNÇÕES
// =============================

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
    obterElementos("quantidade").textContent = "Quantidade:";
    obterElementos("soma").textContent = "Soma";
    obterElementos("media").textContent = "Média:";
    obterElementos("maior").textContent = "Maior número:";
    obterElementos("menor").textContent = "Menor numero:";
    obterElementos("pares").textContent = "Números pares:";
    obterElementos("impares").textContent = "Números ímpares:";

}

// Função Analisar Numeros
function analisar() {

    // Valida se lista esta vazia
    if(naoContemValores(lista)){
        alert("Adicione valores para serem analisados.")
        return;
    }

    // Quantidade
    obterElementos("quantidade").textContent =`Quantidade: ${lista.length}`;

    // Somar valores da lista
    let soma = 0;

    for(let i = 0; i < lista.length; i++){
        soma += lista[i];
    }

    obterElementos("soma").textContent = `Soma: ${soma}`;

    // Faz a média dos valores
    obterElementos("media").textContent = `Média: ${(soma / lista.length)}`;

    // Obtem maior valor
    const maior = Math.max(...lista);
    obterElementos("maior").textContent = `Maior número: ${maior}`;

    // Obtem maior valor
    const menor = Math.min(...lista);
    obterElementos("menor").textContent = `Menor número: ${menor}`;

    // Obtem numeros pares
    const numerosPares = lista.filter(num => num % 2 === 0);
    const quantidadePar = numerosPares.length;
    obterElementos("pares").textContent = `Números pares: ${quantidadePar}`;

    // Obtem numeros impares
    const numerosImpares = lista.filter(num => num % 2 === 1);
    const quantidadeImp = numerosImpares.length;
    obterElementos("impares").textContent = `Números ímpares: ${quantidadeImp}`;
}
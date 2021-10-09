    // * Como Criar elementos

    const formulario = document.querySelector("form");
    const inputUm = document.querySelector ("#num1");
    const inputDois = document.querySelector("#num2");
    const botaoForm = document.querySelector("form button"); 
    // form button é para pegar todos os botões dentro do formulário
    // se fosse usar o querySelectorAll, teria que identificar a posição do item

    const caixaResultado = document.querySelector("#caixaResultado")

    function submit (evento) {
        { evento.prevent
        const num1Value = Number(inputUm.value);
        const num2Value = Number(inputDois.value);
        console.log("Numero 01: ", num1Value, "\n Numero 02: ", num2Value)
    }

    // O que é a função de Submit? O botão, nesse caso vai submeter a um resultado do formulário
    // submete a alguma operação

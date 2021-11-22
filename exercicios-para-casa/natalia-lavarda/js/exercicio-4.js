// EXERCÍCIO 4

/*
ETAPA 2
*/
const inputLogin = document.querySelectorAll(".main__input");
const inputBtn = document.querySelector(".main__input-btn");

/*
ETAPA 3
*/
const txt = document.createElement("p");
txt.textContent = "Sem permissão";
txt.classList.add("p");
const areaPermissao = document.querySelector(".main__permision");
const areaForm = document.querySelector(".main__form");
// Utilizei o insertBefore pois queria inserir a permissão acima do formulário, e não embaixo
areaPermissao.insertBefore(txt, areaForm);

/* 
ETAPA 4
*/
const input = document.getElementById("nome");

inputBtn.addEventListener("click", (evento) => {
    evento.preventDefault();
    const nome = input.value;
    txt.textContent = `Olá, ${nome}! Seja bem-vinde.`;
})
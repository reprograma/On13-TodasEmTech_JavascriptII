const nome = document.querySelector("#nome");
const formulario = document.getElementsByTagName("form");
const senha = document.querySelector("#senha").value;
let resultado = document.querySelector(".resultado");
const botao = document.querySelector(".botao");
let invalido = document.createElement("p");
invalido.innerHTML = "Sem permissão";
resultado.appendChild(invalido);

botao.addEventListener("click", function (event) {
  event.preventDefault();
  invalido.innerHTML = `Olá ${nome.value}`;
});

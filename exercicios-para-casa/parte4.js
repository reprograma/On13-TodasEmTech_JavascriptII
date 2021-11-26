let nome = document.getElementById("nome");
let login = document.getElementById("senha");
let mensagem = document.createElement("p");
mensagem.innerText = "sem permissão";

const hiddenMenssage = () => (mensagem.style.display = "none");
login.onclick = hiddenMenssage;

let messageOfClick = document.createElement("p");
messageOfClick.innerText = "Hello Stranger";
messageOfClick.style.display = "none";

function showMenssage() {
  return (messageOfClick.style.display = "block");
}
login.addEventListener("submit", howMenssage);

//ITEM 1

const body = document.querySelector("body");
const artigo = document.querySelector("article");
const nomeTitulo = document.querySelector("#titulo");

const paragrafoUm = document.querySelector("#paragrafo");

const imagem = document.querySelector("#patti-smith-img");

const linkSaibaMais = document.querySelector("a");
//console.log(linkSaibaMais);

paragrafoUm.setAttribute("class", "patti-historia");
//console.log(paragrafoUm);

imagem.style.border = "2px solid";

linkSaibaMais.setAttribute("href", "https://www.instagram.com/thisispattismith/");

let novaDiv = document.createElement('div');
body.appendChild(novaDiv);
novaDiv.style.padding = "100px";
novaDiv.style.backgroundColor = "lightblue";

//ITEM 2

console.log(artigo.parentElement);
console.log(artigo.children);
console.log(paragrafoUm.nextElementSibling);

//ITEM 3
imagem.addEventListener("mouseover", enlargeImage);

function enlargeImage(element) {
    imagem.style.height = "800px";
}

imagem.addEventListener("mouseout", diminuirImagem);

function diminuirImagem(element) {
    imagem.style.height = "500px";
    imagem.style.margin = "100px";
}
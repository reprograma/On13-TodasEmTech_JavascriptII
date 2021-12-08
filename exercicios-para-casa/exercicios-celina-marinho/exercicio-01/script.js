/*1. Use o DOM para realizar alterações na sua página:
- ETAPA1: Crie um documento HTML que contenha um `título` e um `artigo`, e dentro desse artigo deve haver pelo menos: `um parágrafo`, `uma imagem` e `um link <a>`. (O tema do artigo fica sob escolha da aluna);
- ETAPA2: (OPCIONAL) Dê um estilo para o seu HTML;*/

//ETAPA3: Crie uma variável para armazenar cada um dos seus elementos HTML no javascript;

const artigo = document.getElementsByTagName('article');
//console.log(artigo);

const titulo = document.querySelector('h1');

const paragrafo = document.getElementsByTagName('p');
//console.log(paragrafo);

const imagem = document.getElementById('minha-imagem');

const link = document.querySelector('a');
//console.log(link)

//ETAPA4: Adicione uma `classe` para o seu elemento de parágrafo usando o DOM;
for (let el of paragrafo) {
    el.classList.add('meu-paragrafo')
}


//ETAPA5: Crie ou modifique o `estilo` da sua imagem usando o DOM;
imagem.style.border = "20px outset rgb(175, 169, 77)";

//ETAPA6: Modifique o valor do atributo `href` do seu link utilizando o DOM;
console.log(link.getAttribute('href'))
link.setAttribute('href', 'https://www.linkedin.com/in/celina-marinho/');

//ETAPA7: Crie um novo elemento HTML utilizando o DOM e o adicione ao seu HTML. 
document.createElement("footer");
footer.innerText = "Feito por Celina Marinho, aluna Reprograma";



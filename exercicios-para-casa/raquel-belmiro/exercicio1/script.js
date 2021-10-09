//Crie uma variável para armazenar cada um dos seus elementos HTML no javascript;


const titulo = document.getElementsByTagName("h1");

const artigo = document.getElementsByTagName("article");

const imagem = document.getElementsByTagName("img");

const paragrafo1 = document.getElementById("p1");

const paragrafo2 = document.getElementById("p2");

const paragrafo3 = document.getElementById("p3");

const paragrafo4 = document.getElementById("p4");


const link = document.getElementsByTagName("a")[0];

//Adicione uma `classe` para o seu elemento de parágrafo usando o DOM;

paragrafo1.classList.add('primeiroParagrafo');
paragrafo2.classList.add('segundoParagrafo');
paragrafo3.classList.add('terceiroParagrafo');

//Crie ou modifique o `estilo` da sua imagem usando o DOM;
imagemNatureza.style.borderRadius="50%";

//Modifique o valor do atributo `href` do seu link utilizando os DOM;
link.setAttribute("href", "https://www.uol.com.br/vivabem/noticias/redacao/2018/09/15/beneficios-do-contato-com-a-natureza-veja-como-inclui-los-no-dia-a-dia.htm");

//Crie um novo elemento HTML utilizando o DOM e o adicione ao seu HTML.

paragrafo4.innerText="Viva a Natureza!";
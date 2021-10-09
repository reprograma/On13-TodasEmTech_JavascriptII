//ETAPA3: Crie uma variável para armazenar cada um dos seus elementos HTML no javascript;

const titulo = document.getElementsByTagName('h1')[0];
const artigo = document.querySelector('article');
const subtitulo = document.getElementById('subtitle');
const paragrafo = document.querySelectorAll('p');
const imagem = document.querySelector('img');
const botao = document.getElementsByClassName('btn')[0];

console.log(titulo)
//- ETAPA4: Adicione uma `classe` para o seu elemento de parágrafo usando o DOM;

paragrafo.className = 'paragrafo';

//- ETAPA5: Crie ou modifique o `estilo` da sua imagem usando o DOM; 

imagem.style.borderRadius = '10rem';

//- ETAPA6: Modifique o valor do atributo `href` do seu link utilizando os DOM;

botao.setAttribute('href', 'https://m.youtube.com/watch?v=6FfCCW3yp-Q');

//- ETAPA7: Crie um novo elemento HTML utilizando o DOM e o adicione ao seu HTML. 
const novaTag = document.createElement('h2');
const texto = document.createTextNode('Veja a diferença agora');
novaTag.appendChild(texto);


// - Quem é o elemento `pai/mãe` do seu artigo? 
console.log(artigo.parentElement)
//- Quem são os elementos `filhes` do seu artigo? 
console.log(artigo.children)
//- Qual elemento é o `próximo irmão` do elemento parágrafo?
console.log(paragrafo.previousElementSibling)


//#### 3. Utilizando o mesmo HTML do exercício 1, faça uma `função de evento` que aumente o tamanho da minha imagem quando eu passar o mouse por cima dela e que quando eu retirar o meu mouse de cima da imagem ela retorne ao tamanho original;
imagem.addEventListener('mouseover',function(){
    imagem.style.height = '55vh';
})

imagem.addEventListener('mouseout',function(){
    imagem.style.height = '40vh';
})
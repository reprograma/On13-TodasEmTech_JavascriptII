const caixa = document.querySelector('#caixa');
const botao = document.querySelector('#btn');



botao.addEventListener('click', function (){
    let imagem = document.createElement('img');
    imagem.setAttribute('src', 'https://noticias.buscavoluntaria.com.br/wp-content/uploads/2019/03/kitten-solid-white-cat-motherless-child.jpg');
    imagem.setAttribute('alt', 'gato fofo');
    imagem.style.width = "250px";
    imagem.style.margin = "20px";
    return caixa.append(imagem);
})
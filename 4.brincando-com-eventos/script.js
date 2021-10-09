const caixa = document.querySelector("#caixa");
const botao = document.querySelector("#btn");
botao.addEventListener('click', function() {

    let imagem = document.createElement('img');
    imagem.setAttribute('src', 'https://casa.abril.com.br/wp-content/uploads/2020/08/suculentas-quais-sao-os-maiores-cuidados-casacom-1.jpg?quality=95&strip=info');
    imagem.style.width = "350px";
    imagem.style.margin = "20px";
    return caixa.append(imagem);
})
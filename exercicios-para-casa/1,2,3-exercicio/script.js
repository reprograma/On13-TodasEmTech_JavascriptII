const paragraph = document.querySelector("p");
const images = document.querySelectorAll("img");
const links = document.querySelectorAll("a");
const article = document.querySelector("article");
const header = document.querySelector("header")

// Etapa 4
paragraph.classList.add("paragraph");

// ETAPA 5
images.forEach((image) => {
    return image.style.borderRadius = "5%" 
});

// ETAPA 6
links[0].setAttribute("href", "https://guia.melhoresdestinos.com.br/o-que-fazer-porto-seguro-52-262-p.html")

// ETAPA 7

let imageCreate = document.createElement('img');
imageCreate.setAttribute("src", "https://vejasp.abril.com.br/wp-content/uploads/2016/12/viagem-de-avic3a3o.gif")
imageCreate.setAttribute("class", "image-plane")
header.appendChild(imageCreate);



// EXERCIO 2
console.log(article.parentNode);
console.log(article.children);
console.log(paragraph.nextElementSibling)


// #### 3. Utilizando o mesmo HTML do exercício 1, faça uma `função de evento` que aumente o tamanho da minha imagem quando eu passar o mouse por cima dela e que quando eu retirar o meu mouse de cima da imagem ela retorne ao tamanho original;

// EXERCIO 3

images.forEach((image) => {
    image.addEventListener("mouseover", function(){
        image.style.transform = "scale(1.1)";
        image.style.cursor = "pointer";
    })
    image.addEventListener("mouseout", function(){
        image.style.transform = "none";
    })
});
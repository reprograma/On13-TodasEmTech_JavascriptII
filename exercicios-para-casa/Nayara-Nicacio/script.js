
// Etapa 1................................

let nome1 = document.getElementById('article')
article.querySelector('.class')
article.classList.add('nova-class')

let elementoImag = document.getElementsByClassName('foto')[0]
elementoImag.style.border="solid 5px #f2ff"; // alterou stylo de borda da imagem

let container = document.getElementById('container-paragrafos')
container.querySelector('.class')
container.classList.add('nova-class')



let paragrafo = document.querySelector('section p')
paragrafo.removeAttribute('class')// removeu classe
paragrafo.querySelector('.class')// criou class
paragrafo.classList.add('nova-class-p') //nomeou class



let link = document.getElementById('link-referencia') // Substituiu o link anterior por um novo
link.setAttribute('href','https://www.digitalocean.com/community/tutorials/how-to-modify-attributes-classes-and-styles-in-the-dom-pt')


let elementNovo = document.createElement('frame')// criou elemento tipo frame
document.body.appendChild(elementNovo)// Criou um novo elemento tipo Frame com um conteudo do body dentro

console.log(article)
console.log(elementoImag)
console.log(container)
console.log(paragrafo)
console.log(link)
console.log(elementNovo) //Frame

// Etapa 2 ........................................


console.log(paragrafo.parentElement)
console.log(article.children)

let irmaop = document.querySelector('.nova-class-p')
console.log(irmaop.nextElementSibling)

elementoImag.addEventListener('click', function (){
    imagem.style.width = "250px";
    imagem.style.margin = "20px";
    return caixa.append(imagem);
})
//Etapa 4 ............................................

    function validar(){
        let username = document.querySelector('username').value
        let pass = document.querySelector('pass').value
        const button = document.querySelector('.buton-form')
        // var time_debut = document.getElementById("time_debut").value;
        // var time_fin = document.getElementById("time_fin").value;
        if(username == '' || pass.value.length <='7'){
           alert("Preencha todos os campos!");
            username.focus()
            pass.focus()
        }
        button.addEventListener('onclick', alert('Dados confirmados'));
       
    }

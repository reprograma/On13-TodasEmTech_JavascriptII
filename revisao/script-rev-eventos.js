//Revisão com eventos -------------- .js
const divEvento = document.querySelector("#evento");
const formulario = document.querySelector("form");
const input = document.querySelector("#bomDia");


formulario.addEventListener("submit",function( evento){
    evento.preventDefault();

    const inputValor = input.value;
    let printarNaTela = document.createElement("p"); 
    printarNaTela.textContent = inputValor;
    
    document.body.append(printarNaTela); 
})


divEvento.addEventListener("click", function(){
    //quando eu clicar na minha div evento, ela fique colorida que nem eu
    return divEvento.style.backgroundColor = "red";
} )


// forma com a funcao fora do addEventListener
function azulzinho() {
    divEvento.style.backgroundColor = "blue";
    divEvento.classList.remove("aumentei");
}
divEvento.addEventListener("mouseleave", azulzinho);


// com a função dentro
divEvento.addEventListener("mouseenter", function(){
    divEvento.style.backgroundColor = "green";
    divEvento.classList.add("aumentei");
})


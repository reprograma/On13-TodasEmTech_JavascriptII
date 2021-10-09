//Quem é o elemento `pai/mãe` do seu artigo? 

const pai = document.getElementById("artgo").parentNode;

console.log("Elemento pai do artigo: ", pai);

//Quem são os elementos `filhes` do seu artigo? 

const filhos = document.getElementById("artgo").children;

console.log("Elementos filhos do artigo: ", filhos);

//Qual elemento é o `próximo irmão` do elemento parágrafo?

const proxIrmao= document.getElementById("p1").nextElementSibling;

console.log("Proximo irmão do primeiro parágrafo: ", proxIrmao);

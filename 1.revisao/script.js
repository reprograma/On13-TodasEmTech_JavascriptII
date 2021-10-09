// const let var

let nome = "Aida";
//variavel let, recebe como valor uma String
let nomes = ["Aida", "Quezia", "Fabiula", "Taiane", "Carol"];
//valor de lista - array
//console.log(nomes); //primeiro item da lista
nomes.push('Nayara');
//console.log(nomes.length)

nomes.filter(function (elemento){
//exemplo
})

const retornaNome = function(elemento, indice, array) {
    return console.log(elemento,indice, array)
    //() aparece um ou quantos itens precisar
}

arrow function
minhaFuncao(elemento) => {}
function minhaFuncao() {}


nomes.map((item, index) => {
    if(item == "Quezia") {
        console.log(item, index)
    }
})

//map e filter são funções de callback


let cancoes = {
    banda: "Dingo Bells",
    musicas: ['Eu vim passear', 'Misterio dos trinta']
    //um objeto e duas propriedades
}
//console.log(cancoes.banda); //para mostrar nome da banda
//console.log(cancoes.musicas[1]); //para mostrar segunda musica



//REVISAO:  copiado
// const let var

let nome = "Aida"; 
//variavel let , recebe como valor uma string 
let nomes = [
    {
        pais: "Brasil",
        nome: "Aida",
    },
     "Quezia", "Fabiula", "Taiane", "Carol", 2, true];
// valor de lista - array
//console.log(nomes[0].pais); // primeiro item da lista com a propriedade pais
//console.log(nomes);
nomes.push('Nayara');
//console.log(nomes);


nomes.filter(function (elemento){
   //console.log(elemento.pais)
})
/*
const retornaNome = function( elemento, indice, array) {
    return console.log(indice)
}
*/
/*
const retornaNome = (elemento, indice, array) => {
    return console.log(elemento, indice, array)
} 
*/
/*
arrow function
minhaFuncao() => {} 
function minhaFuncao() {}

nomes.map((item, index) =>  {
    if(item == "Quezia"){
        console.log(item, index)
    }
})
*/

// map e filter são funções de callback - 

let cancoes = {
    banda: "Dingo Bells", 
    musicas: ['Eu vim passear', 'Mistério dos Trinta'], 
}
//console.log(cancoes.musicas[1]);






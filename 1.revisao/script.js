let name = "Ana";


let nomes = ["Ana", "Elen", "Brena"];
console.log(nomes[0]);

let cancoes = {
    banda: "Dingo Bell",
    musicas: ['Eu vim passear', 'Mistério dos 30']
}
console.log(cancoes.banda)
console.log(cancoes.musicas[1]);

function retornaNomes(elemento, indice, arrays) {
    return console.log(indice, elemento, Array)
}
nomes.map(retornaNomes)
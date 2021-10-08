let nomes = [
    {pais:"Brasil",
    nome: "isabella"},

    {pais:"Italia",
    nome: "Marina"},

    {pais:"E.U.A",
    nome: "Jessuca"},
 
 ];

//console.log([0].pais)

//nomes.filter(function (elemento){ ----callback=functions

//})

/*let cancoes = {
    banda: "Dingo Bells",
    musicas: ['Eu vim passear', 'Mistério dos Trinta'],
    numeroIntegrantesBanda: 15,
}
//console.log(cancoes.musicas[1]);

cancoes.filter(function (elemento){
    console.log(elemento.musicas)
})*/


/*function retornaNome( elemento, indice, array){
    return console.log(elemento)
}
nomes.map(retornaNome)*/

/*const retornaNome = (elemento, indice, array) => {
    return console.log(elemento, indice, array)
}
nomes.map(retornaNome)*/


nomes.map((item, index) => {
    if(item == "isabella"){
        console.log(item, index)
    }
}) 

 


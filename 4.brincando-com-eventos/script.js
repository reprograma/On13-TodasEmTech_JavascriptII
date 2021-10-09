const caixa = document.querySelector('#caixa');
//const botao = document.getElementById('btn');
const botao = document.querySelector('#btn');


botao.addEventListener('click', function (){
    let imagem = document.createElement('img');
    imagem.setAttribute('src','https://www.joanadarcam.com.br/wp-content/uploads/2020/02/images-92.jpeg');
    imagem.setAttribute('alt', 'gato fofo');
    imagem.style.width = "250px";
    imagem.style.margin = "20px";
    return caixa.append(imagem);
})


//const poke = copia y cola  https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json

function mapeandoPokemon (elemento) {
    let imagemPoke = document.createElement("img");
    let nomePoke = document.createElement("span");
    
    imagemPoke.setAttribute("src", elemento.img);
    imagemPoke.setAttribute("alt", elemento.name);

    nomePoke.textContent = elemento.name;

    caixa.appendChild(imagemPoke);
    caixa.appendChild(nomePoke);
}

poke.pokemon.map(mapeandoPokemon)
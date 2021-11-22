let maravilhosasDaTurma = [
  "Aida Tavares",
  "Aline Fank",
  "Carol Zago",
  "Ana Claudia",
  "Ane Carolina",
  "Anne Caroline",
  "Bruna Mara",
  "Carine",
  "Celina",
  "Daniele",
  "Dardânia",
  "Dayane",
  "Débora",
  "Elis",
  "Fabiula",
  "Gisele",
  "Graziele",
  "Harpya",
  "Isabella",
  "Vitória",
  "Júlia",
  "Lua",
  "Marcela",
  "Márcia Cristina",
  "Maria Eduarda",
  "Marina",
  "Natália",
  "Nayara",
  "Priscila Karina",
  "Quezia Guilhermina",
  "Raquel",
  "Sâmara",
  "Tainá",
  "Thamyres Lais",
  "Valenthina",
  "Maria",
  "Valentina",
  "Ylana",
  "Taiana",
];
//     ETAPA1: Faça uma variável que transforme todos os items da lista e os deixe em letras minúsculas; -
const mudaLetra = maravilhosasDaTurma.map((nome) => {
  return nome.toLocaleUpperCase();
});

console.log(mudaLetra);

// ETAPA2: Veja o número de alunas existem na lista; -
const quantidade = console.log(maravilhosasDaTurma.length);
// ETAPA3: Mude a ordem da lista, para a forma descescente;
const desordenar = maravilhosasDaTurma.reverse();
console.log(desordenar);

//     ETAPA4: Veja se você está incluída na lista, e se tiver, descubra qual é o indice que você está dentro da lista; -
if (maravilhosasDaTurma.includes("Daniele")) {
  console.log(maravilhosasDaTurma.indexOf("Daniele"));
}

// ETAPA5: Crie um um HTML ou utilize o mesmo do exercício anterior, e adicione um elemento lista `<ul>`, vazio.Usando o DOM, faça com que apareça na tela o nome de cada uma das alunas em novos elementos `<li>`. -

function criandoLista() {
  const ul = document.querySelector(".lista");
  const li = document.createElement("li");
  ul.appendChild(li);

  li.innerHTML = `${mudaLetra}`;
}

criandoLista();

//     ETAPA6: Abaixo da lista, faça uma parte da autora, adicione o seu nome chamando pela lista das alunas, adicione uma imagem e um link para alguma página sua.

function criandoParteAutora() {
  const autora = document.querySelector(".autora");
  maravilhosasDaTurma.forEach((nome) => {
    if (nome == "Daniele") {
      autora.innerHTML = ` Autora: ${nome}`;
    }
  });
}

criandoParteAutora();

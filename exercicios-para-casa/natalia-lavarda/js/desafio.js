let maravilhosasDaTurma = ["Aida Tavares", "Aline Fank", "Carol Zago", "Ana Claudia", "Ane Carolina", "Anne Caroline", "Bruna Mara", "Carine", "Celina", "Daniele", "Dardânia", "Dayane", "Débora", "Elis", "Fabiula", "Gisele", "Graziele", "Harpya", "Isabella", "Vitória", "Júlia", "Lua", "Marcela", "Márcia Cristina", "Maria Eduarda", "Marina", "Natália", "Nayara", "Priscila Karina", "Quezia Guilhermina", "Raquel", "Sâmara", "Tainá", "Thamyres Lais", "Valenthina Maria", "Valentina", "Ylana", "Taiana"];

/*
ETAPA 1
*/
let minimizarNomes = maravilhosasDaTurma.map((nome) => {
    return nome.toLowerCase();
});
console.log(minimizarNomes);

/*
ETAPA 2
*/
let countMaravilhosas = maravilhosasDaTurma.length;
console.log(`Existem ${countMaravilhosas} alunes na turma.`);

/*
ETAPA 3
*/
let ordenarDecrescente = maravilhosasDaTurma.sort((a, b) => {
    if (a > b)
        return -1
    if (a < b)
        return 0
});
console.log(ordenarDecrescente);

/*
ETAPA 4
*/
// Necessário ordenar a lista de forma crescente novamente
maravilhosasDaTurma.sort();
let descobrirPresenca = maravilhosasDaTurma.includes("Natália");
let descobrirIndex = maravilhosasDaTurma.indexOf("Natália");
if (descobrirPresenca) {
    console.log(`Natália está na lista e seu index na lista é ${descobrirIndex}.`);
} else {
    console.log(`Natália não está na lista.`);
}

/*
ETAPA 5
*/
let lista = document.querySelector(".article__list");
maravilhosasDaTurma.forEach((nome) => {
    let li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
});

/*
ETAPA 6
*/
let aluna = document.getElementsByTagName("li")[25];
let title = document.createElement("h1");
title.textContent = "Sobre a autora"
let nome = document.createElement("h2");
nome.textContent = aluna.innerHTML;
let article = document.querySelector(".section__article");
article.appendChild(title);
article.appendChild(nome);
title.classList.add("section__title");
nome.classList.add("section__subtitle");
let fotoPerfil = document.createElement("img")
fotoPerfil.src = "https://avatars.githubusercontent.com/u/85903148?v=4";
article.appendChild(fotoPerfil);
fotoPerfil.classList.add("section__img-round");
let text = document.createElement("p");
text.textContent = "Olá! Eu sou a Natália, aluna da turma 13 do bootcamp Todas em Tech da {reprograma}. Sou apaixonada por livros (leia Chimamanda!), plantas e design - o que me levou a me interessar por UX/UI Design e atualmente sou estagiária UX do time de desenvolvimento das Lojas Quero-Quero."
article.appendChild(text);
text.classList.add("section__paragraph");
let link = document.createElement("a");
link.href = "https://natalia-lavarda.netlify.app/";
link.textContent = "Para saber mais sobre a autora, visite sua página pessoal :)"
article.appendChild(link);
link.classList.add("section__link");
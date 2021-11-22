const paragrafo = document.querySelector("#paragrafo");
const divUm = document.querySelector("#div01");
const divDois = document.querySelector("#div02");
const divTres = document.querySelector("#div03");

console.log(paragrafo);

paragrafo.innerHTML = "batatinha frita 123..";

divUm.setAttribute("class", "um");
divDois.setAttribute("class", "dois");
divTres.setAttribute("class", "tres");
paragrafo.setAttribute("class", "texto");

divUm.style.backgroundColor = "pink";
divDois.style.backgroundColor = "blue";
divTres.style.backgroundColor = "green";
paragrafo.style.color = "salmon";


let maravilhosasDaTurma = ["Aida Tavares", "Aline Fank", "Carol Zago", "Ana Claudia", "Ane Carolina", "Anne Caroline", "Bruna Mara", "Carine", "Celina", "Daniele", "Dardânia", "Dayane", "Débora", "Elis", "Fabiula", "Gisele", "Graziele", "Harpya", "Isabella", "Vitória", "Júlia", "Lua", "Marcela", "Márcia Cristina", "Maria Eduarda", "Marina", "Natália", "Nayara", "Priscila Karina", "Quezia Guilhermina", "Raquel", "Sâmara", "Tainá", "Thamyres Lais", "Valenthina Maria", "Valentina", "Ylana", "Taiana"];
let nomesMinusculos = maravilhosasDaTurma.map((nome) => {
    return nome.toLowerCase();
});
console.log(nomesMinusculos);



let countMaravilhosas = maravilhosasDaTurma.length;
console.log(`Na turma tem ${countMaravilhosas} alunas!`);



let maravilhosasDaTurma = ["Aida Tavares", "Aline Fank", "Carol Zago", "Ana Claudia", "Ane Carolina", "Anne Caroline", "Bruna Mara", "Carine", "Celina", "Daniele", "Dardânia", "Dayane", "Débora", "Elis", "Fabiula", "Gisele", "Graziele", "Harpya", "Isabella", "Vitória", "Júlia", "Lua", "Marcela", "Márcia Cristina", "Maria Eduarda", "Marina", "Natália", "Nayara", "Priscila Karina", "Quezia Guilhermina", "Raquel", "Sâmara", "Tainá", "Thamyres Lais", "Valenthina Maria", "Valentina", "Ylana", "Taiana"];
maravilhosasDaTurma.sort((a, b) => {
    if (a > b)
    return -1;
    if (a < b)
    return 1;
    return 0;
});



maravilhosasDaTurma.sort();
let descobrirPresenca = maravilhosasDaTurma.includes("Júlia");
let descobrirIndex = maravilhosasDaTurma.indexOf("Júlia");
if (descobrirPresenca) {
    console.log(`A aluna Júlia está nesta lista, no índice ${descobrirIndex}!!`);
} else {
    console.log(`A aluna Júlia não está nesta lista!`);
}



let lista = document.querySelector(".articleList");
maravilhosasDaTurma.forEach((nome) => {
    let li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
});







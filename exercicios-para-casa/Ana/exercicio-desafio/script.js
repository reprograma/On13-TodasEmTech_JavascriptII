let maravilhosasDaTurma = [
    "Aida Tavares", "Aline Fank", "Carol Zago", "Ana Claudia", "Ane Carolina", "Anne Caroline", "Bruna Mara", "Carine", "Celina", "Daniele", "Dardânia", "Dayane", "Débora", "Elis", "Fabiula", "Gisele", "Graziele", "Harpya", "Isabella", "Vitória", "Júlia", "Lua", "Marcela",
    "Márcia Cristina", "Maria Eduarda", "Marina", "Natália", "Nayara", "Priscila Karina", "Quezia",
    "Guilhermina", "Raquel", "Sâmara", "Tainá", "Thamyres Lais", "Valenthina Maria", "Valentina", "Ylana", "Taiana"
];
console.log(maravilhosasDaTurma)

function minusculo() {
    var str = 'Aida Tavares, Aline Fank, Carol Zago, Ana Claudia,Ane Carolina, Anne Caroline, Bruna Mara, Carine, Celina, Daniele, Dardânia, Dayane , Débora, Elis, Fabiula, Gisele, Graziele, Harpya, Isabella, Vitória, Júlia, Lua, Marcela, Márcia Cristina, Maria Eduarda, Marina, Natália, Nayara, Priscila Karina, Quezia Guilhermina, Raquel, Sâmara, Tainá, Thamyres Lais, Valenthina Maria, Valentina, Ylana, Taiana';

    var string = str.toLowerCase();
    console.log(string);
}

minusculo();


console.log("tamanho da array: ", maravilhosasDaTurma.length)


maravilhosasDaTurma.sort((a, b) => {
    if (a > b)
        return -1;
    if (a < b)
        return 1;
    return 0;
});
console.log(maravilhosasDaTurma);
console.log(maravilhosasDaTurma.includes("Ana Claudia"));
//children = filhes, sibiling = irmã/irmão , parent = pais/mães
let sessao = document.querySelector("#section")
// console.log(sessao.children) // mostra objeto com os elementos filhos
// console.log(sessao.parentElement) // mosta o pai/mae do elemento
// console.log(document.body.previousElementSibling) // mostra elemento irmão/irmã anterior
    
sessao.style.backgroundColor = "yellow";        
sessao.parentElement.style.backgroundColor = "pink";
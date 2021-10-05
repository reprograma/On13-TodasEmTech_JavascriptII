//ETAPA4: Adicione um evento para que após a usuária clique no botão com o texto  `entrar`, o novo elemento tenha o seu texto de `Sem permissão` substituído por: `Olá + o nome da pessoa`;


const inputUm = document.querySelector("#nome");
const inputDois = document.querySelector("#senha");
const botaoForm = document.querySelector("#entrarBtn");

//Criando novo elemento HTML
let novaTag = document.createElement('label');
novaTag.setAttribute('id', 'msg');
let texto = document.createTextNode('Sem permissão');
novaTag.appendChild(texto);
let meuForm = document.querySelector('.formulario');
meuForm.appendChild(novaTag);

//Adicionando evento

// console.log(nomeUsuario);   

entrarBtn.addEventListener('click', function (evento) {
    evento.preventDefault();
    
    //ação a ser executada no clique do elemento
    const nomeUsuario = inputUm.value; 
    const senhaUsuario = inputDois.value;
    console.log("nome: ", nomeUsuario, "\n senha: ", senhaUsuario);

    let mensagem = document.querySelector('#msg');
    if(nomeUsuario && senhaUsuario) {
        mensagem.innerText = `Olá, ${nomeUsuario}`
    };
  });
  
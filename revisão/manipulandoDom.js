//para saber se selecionou teste com o console.log ou console.dir
    // selecionando o nosso elemento usando o DOM.
    const section = window.document.getElementsByTagName("section")[0];
      //  getElementS = [{}]
      //  querySelectorAll = [{}]
      //  getElement = elemento; 
      //  querySelector = elemento;
    const paragrafo1 = document.getElementById("paragrafo");
    const diva = document.getElementsByClassName("beyonce--img")[0];
    const inputNome = document.querySelector("#nome");
    const titulo = window.document.querySelector("h1");
        
    // modificando valores: 
    // .innerText pega o texto sem formatação.  .textContent pega o texto com formatação.  .innerHTML me permite modificar ou criar elementos com o html
    titulo.innerHTML = "<p>Hoje faz sol</p> em <i> porto alegre <i>, ontem choveu";
    // .value captura o valor do que foi escrito dentro da minha caixa de texto - input
    inputNome.value = "Reprograma é show";

    //modificando estilo:
    titulo.style.color = "red";
    //camelCase = letraDeCamelo
    document.body.style.backgroundColor = "yellow";

   //adicionando e removendo classes 
    titulo.classList.add('classeDoMeuJava');
    // titulo.classList.remove('classeDoMeuJava')
    /*
    Quando varios elementos são selecionados ao mesmo tempo, podemos iterar por eles.
    for (let el of diva){
        el.classList.remove('beyonce--img')
    }
    */ 

    //pegando e modificando atributos
    //console.log(diva.getAttribute('src'));
    diva.setAttribute('src' , 'https://www.correio24horas.com.br/fileadmin/_processed_/0/b/csm_VF0720_Viola_Davis_Tout_3d988654d0.jpg');
    diva.setAttribute("alt", "Viola Davis");
    titulo.setAttribute("id","bananinha" );
//#3
let guardadiv = document.div
let titulo = document.getElementsByTagName("h1");
let paragrafo = document.querySelector("p");
let imagem = document.querySelector("img");
let meulink = document.getElementsByClassName("link")[3]


paragrafo.setAttribute("classe", "clssparagrafo");
meulink = document.setAttribute("src", "https://rockinrio.com/rio/pt-br/home/");
//document.imagem.style.backgroundColor = "yellow";

let novoelemento = document.createElement("img");
novoelemento.setAttribute("src", "https://s2.glbimg.com/boMnj43bNDC3DC0ztY1qsUW3BiU=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/D/2/jmOeAMTCKiNLvRQmmRew/rock-in-rio-2019.jpg");
novoelemento.setAttribute("alt", "Foto Rock rio");
novoelemento.classList.add("novaimagem");
novoelemento.prepend("novaimagem");

//#3
const minhaimagem = document.querySelector("img");
minhaimagem.addEventListener("onMouserOver", function() {
            //minhaimagem.classList.add("img");
            minhaimagem.classList.add(".almentei");
        }


        function almentando() {
            minhaimagem.classList.remove(".almentei");
        }
        minhaimagem.addEventListener("onMouseOver", almentando);


        //4
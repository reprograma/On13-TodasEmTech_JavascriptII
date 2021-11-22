// EXERCÍCIO 1

/* 
ETAPA 3
*/

const body = document.getElementsByTagName("body");
const header = document.getElementsByTagName("header");
const headerMenu = document.querySelector(".header__menu");
const headerLogo = document.querySelector(".header__logo");
const headerMenuLista = document.querySelector(".header__menu-lista");
const headerMenuLink = document.querySelector(".header__menu-link");
const headerMenuLi = document.querySelector(".header__menu-li");
const section = document.getElementsByTagName("section");
const sectionArticle = document.querySelector(".section__article");
const sectionTitle = document.querySelector(".section__title");
const sectionImageRound = document.querySelector(".section__img-round");
const sectionParagraph = document.querySelector(".section__paragraph");
const sectionLink1 = document.querySelector(".section__link1");
const sectionLink2 = document.querySelector(".section__link2");
const sectionImg = document.querySelector(".section__img");

/* 
ETAPA 4
*/
const allSectionParagraph = document.querySelectorAll(".section__paragraph");
console.log(allSectionParagraph);
allSectionParagraph.forEach((allSectionParagraph) => {
    allSectionParagraph.classList.add("section__paragraph-color");
});

/* 
ETAPA 5
*/
sectionImageRound.classList.add("section__img-border");

/* 
ETAPA 6
*/
sectionLink1.href = "https://www.britannica.com/biography/Britney-Spears";

/* 
ETAPA 7
*/
const instagram = document.createElement("a");
instagram.textContent = " | Britney's Instagram";
instagram.href = "https://www.instagram.com/britneyspears/?hl=pt-br";
instagram.classList.add("section__link1");
sectionLink1.appendChild(instagram);

// EXERCÍCIO 2

/*
ETAPA 1
*/
const parentArticle = sectionArticle.parentElement;
console.log(parentArticle);

/*
ETAPA 2
*/
const articleChildren = sectionArticle.children;
console.log(articleChildren);

/*
ETAPA 3
*/
const sibling = sectionParagraph.nextElementSibling;
console.log(sibling);

//  EXERCÍCIO 3
sectionImageRound.addEventListener("mouseover", () => {
    sectionImageRound.classList.add("img-transform");
});
sectionImageRound.addEventListener("mouseout", () => {
    sectionImageRound.classList.remove("img-transform");
});

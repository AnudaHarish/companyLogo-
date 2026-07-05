import translations from "./translations.js";

let savedLang = localStorage.getItem("lang") || 'en';

const selector = document.querySelector('#language');

selector.value = savedLang;

selector.addEventListener("change", (e) => {
  savedLang = e.target.value; 
  localStorage.setItem("lang", savedLang);
  changeLanguage(savedLang);
});

function changeLanguage(lang){
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.dataset.i18n;
    element.innerHTML = translations[lang][key];
  });
}

changeLanguage(savedLang);
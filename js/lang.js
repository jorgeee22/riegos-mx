async function changeLanguage(lang) {
  const response = await fetch(`/lang/${lang}.json`);
  const data = await response.json();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (data[key]) el.textContent = data[key];
  });

  // Cambia el atributo lang del HTML
  document.documentElement.lang = lang;

  // Guarda en localStorage
  localStorage.setItem("language", lang);
}

// Cargar idioma guardado al inicio
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("language") || "es";
  changeLanguage(lang);
});

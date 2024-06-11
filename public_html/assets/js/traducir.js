function cambiarIndex() {
  var selectValue = document.getElementById("traductor").value;
  if (selectValue === "ingles") {
    window.location.href = "index-en.html";
  } else if (selectValue === "espanol") {
    window.location.href = "index.html";
  }
}

function configurarSelectorIdioma() {
  var currentLang = document.documentElement.lang;
  var traductor = document.getElementById("traductor");

  if (currentLang === "es") {
    traductor.innerHTML = `
    <option value="all">Traducir</option>
    <option value="ingles">Inglés</option>
                `;
  } else if (currentLang === "en") {
    traductor.innerHTML = `
    <option value="all">Translate</option>
    <option value="espanol">Spanish</option>
                `;
  }
}
window.onload = configurarSelectorIdioma;

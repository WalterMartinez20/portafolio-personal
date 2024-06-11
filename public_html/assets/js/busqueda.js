let currentIndex = 0; // Índice de la coincidencia actual
let matches = []; // Almacena los elementos que coinciden con la búsqueda

function searchContent() {
  clearHighlights();
  let input = document.getElementById("searchInput").value.toLowerCase();
  if (!input) return;

  let nodes = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, div");
  matches = []; // Reinicia el array de coincidencias

  nodes.forEach((node) => {
    if (node.innerText.toLowerCase().includes(input)) {
      highlightText(node, input);
      matches.push(node);
    }
  });

  currentIndex = 0; // Resetea al inicio de las coincidencias
  if (matches.length > 0) {
    matches[0].scrollIntoView();
    updateSearchStatus();
  }
}

function highlightText(node, text) {
  let innerHTML = node.innerHTML;
  let index = innerHTML.toLowerCase().indexOf(text.toLowerCase());
  if (index >= 0) {
    node.innerHTML =
      innerHTML.substring(0, index) +
      "<span class='highlight'>" +
      innerHTML.substring(index, index + text.length) +
      "</span>" +
      innerHTML.substring(index + text.length);
  }
}

function nextMatch() {
  if (matches.length > 0) {
    currentIndex = (currentIndex + 1) % matches.length;
    matches[currentIndex].scrollIntoView();
    updateSearchStatus();
  }
}

function previousMatch() {
  if (matches.length > 0) {
    currentIndex = (currentIndex - 1 + matches.length) % matches.length;
    matches[currentIndex].scrollIntoView();
    updateSearchStatus();
  }
}

function clearHighlights() {
  document.querySelectorAll(".highlight").forEach((node) => {
    node.outerHTML = node.textContent; // Elimina los spans añadidos
  });
}

function updateSearchStatus() {
  document.getElementById("searchStatus").innerText = `Resultado ${
    currentIndex + 1
  } de ${matches.length}`;
}

// CSS para resaltar coincidencias
document.head.innerHTML +=
  "<style>.highlight { background-color: yellow; }</style>";

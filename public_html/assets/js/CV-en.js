//Funcion para descargar el CV
document.getElementById("descargarCV").addEventListener("click", function () {
  // Ruta al archivo PDF
  var rutaPDF = "/public_html/assets/CV-Universidad-english.pdf";

  // Crea un enlace temporal
  var link = document.createElement("a");
  link.href = rutaPDF;

  // Establece el nombre del archivo
  link.download = "CV-Universidad-en.pdf";

  // Oculta el enlace
  link.style.display = "none";

  // Agrega el enlace al cuerpo del documento
  document.body.appendChild(link);

  // Simula un clic en el enlace para iniciar la descarga
  link.click();

  // Elimina el enlace temporal
  document.body.removeChild(link);
});

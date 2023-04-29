function encriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputtexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }
  
  function desencriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputtexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }
  
  function copia() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand('copy');
    alert("Copied!");
  }
  

  // Obtener el formulario y el campo de contraseña
const form = document.getElementById("myForm");
const passwordField = document.getElementById("password");

// Validar la contraseña
passwordField.addEventListener("input", function () {
  if (passwordField.validity.patternMismatch) {
    passwordField.setCustomValidity("La contraseña debe contener al menos una letra minúscula, una letra mayúscula y un número.");
  } else {
    passwordField.setCustomValidity("");
  }
});

// Redirigir al usuario si el formulario es válido
form.addEventListener("submit", function (event) {
  if (form.checkValidity()) {
    event.preventDefault(); // Prevenir el envío del formulario
    window.location.href = "D:\Descargas\encriptador de textos\Challenge-master\index.html"; // Redirigir al usuario a la página de destino
  }
});

let datosUsuario = {
  altura: 0,
  peso: 0,
};

function calcularIMC() {
  datosUsuario.altura = window.prompt("Ingrese su altura en metros");
  datosUsuario.peso = window.prompt("Ingrese su peso en kilogramos");

  let imc = datosUsuario.peso / (datosUsuario.altura * datosUsuario.altura);

  window.alert(`Tu IMC es: ${imc}`);
}
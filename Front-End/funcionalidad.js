let datosUsuario = {
    nombre: '',
    apellidos1: '',
    apellidos2: '',
    fechaNacimiento: 1111,  
  }

  const btn1 = document.querySelectorAll('button')[0];
  const btn2 = document.querySelectorAll('button')[1];

  btn1.addEventListener('click', ingresarDatos);

  function ingresarDatos() {
    datosUsuario.nombre = window.prompt('Ingrese su nombre');
    datosUsuario.apellidos1 = window.prompt('Ingrese su primer apellido');
    datosUsuario.apellidos2 = window.prompt('Ingrese su segundo apellido');
    datosUsuario.fechaNacimiento = window.prompt('Ingrese su fecha de nacimiento');
    console.log(datosUsuario);
    return datosUsuario;
  }


  function edadUsuario() {
    let fechaActual = new Date();
    let añoActual = fechaActual.getFullYear();
    let edad = añoActual - datosUsuario.fechaNacimiento;
    console.log(edad);
    return edad;
  }

  btn2.addEventListener('click', () => {
    window.alert(`Tu nombre es ${datosUsuario.nombre}, tu primer apellido ${datosUsuario.apellidos1}, tu segundo apellido ${datosUsuario.apellidos2}, y tienes ${edadUsuario()} años`);
    console.log(datosUsuario);
  });
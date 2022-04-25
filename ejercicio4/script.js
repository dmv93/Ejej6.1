//4. Almacena en dos variables datos de validación (usuario y contraseña)
//correctos y permite que el usuario valide (dispone de 3 intentos)

const usuario = "usuario1";
const contraseña = "abcd";
var comprobar = 1;

const preguntaUsuario = prompt("Dime tu usuario");
const preguntaContraseña = prompt("Dime tu contraseña");
/*
while (preguntaUsuario === usuario && preguntaContraseña === contraseña) {
  alert("Bienvenido");
  {
    break;
  }
}
*/
do {
  if (preguntaUsuario === usuario && preguntaContraseña === contraseña) {
    alert("Bienvenido");
    comprobar = 3;
  } else {
    const preguntaUsuario = prompt("Dime tu usuario");
    const preguntaContraseña = prompt("Dime tu contraseña");
    comprobar++
  }
} while (comprobar < 3) {
    alert('la cagaste burlan caster')
};
const {Person} = require('./person.js');  // como Person es una clase, al importar tiene el formato de un objeto, por lo que se le añaden las llaves para poder acceder a la clase en si.
const colors = require("colors");

let javi = new Person("Javier", "de la Torre Aragón", 1987, "rubio", 82, 172, [
  "senderismo",
  "programacion",
  "cerveza",
]);

console.log("IMC".yellow);
console.log(javi.imc());
console.log("Edad".yellow);
console.log(javi.edad(2024));
console.log("Información completa".yellow);
javi.printAll();
console.log("Hobbies".yellow);
javi.printHobbies();

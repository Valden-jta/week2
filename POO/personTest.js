const {Person} = require('./person.js');
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

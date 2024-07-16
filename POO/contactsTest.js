const { Contacts } = require("./contacts");
const {Person} = require('./person')
const colors = require("colors");

let contactos = new Contacts();

let javi = new Person("Javier", "de la Torre Aragón", 1987, "rubio", 82, 172, [
  "senderismo",
  "programacion",
  "cerveza",
]);
contactos.addContact(javi);
let marta = new Person("Marta", "Rodríguez Moreno", 1993, "negro", 55, 163, [
  "viajar",
  "bailar",
  "dormir",
]);
contactos.addContact(marta);


contactos.printPersons();

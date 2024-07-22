//** Imports ----------------------

import { add } from "./bucleFor.js";
import { isEven } from "./condicionales.js";

let arrC: string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let arrB: string[] = [
  "Barco",
  "Baca",
  "Bicicleta",
  "Balon",
  "Bisiesto",
  "Brasil",
];
let arrV: string[] = ["Venezuela", "Veneno", "Voltaje"];

isEven(add(arrC));
isEven(add(arrB));
isEven(add(arrV));

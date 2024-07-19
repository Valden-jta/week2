//  * ========================== RETO 2 ========================== * \\

import { Person } from "./person";

let pers1 = new Person('Javier', 37, 'Calle Monegros 61');
pers1.printName();
console.log(pers1.yearOfBirth(2024));
pers1.address = 'Calle Rioja 43';
// pers1.setAddres ="Calle Rioja 43";
console.log(pers1.address);
// console.log(pers1.getAddress());

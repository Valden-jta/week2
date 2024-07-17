//  * ========================== RETO 3 ========================== * \\

import { Person } from "./person";
import { Contacts } from "./contacts";

let pers1 = new Person('Javier', 37, 'Calle Monegros 61');
let pers2 = new Person('Marta', 31, 'Calle Granja las Nieves 6');

let contact1 = new Contacts();
contact1.people.push(pers1);
contact1.people.push(pers2);

contact1.printCalendar();
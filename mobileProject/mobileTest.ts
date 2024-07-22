import { Mobile } from "./mobile";

let mobile1:Mobile = new Mobile('Redmi','Xiaomi','12 Pro','negro',124.99);

console.log(mobile1.name);
console.log(mobile1.trademark);
console.log(mobile1.model);
console.log(mobile1.color);
console.log(mobile1.price);

mobile1.name = 'Galaxy';
mobile1.trademark = 'Samsung';
mobile1.model = 'A15';
mobile1.color ='silver';
mobile1.price = 299.99;
console.log('---Cambio de valores con metodos set---');

console.log(mobile1.name);
console.log(mobile1.trademark);
console.log(mobile1.model);
console.log(mobile1.color);
console.log(mobile1.price);

console.log('---Cambio de valores con metodos set---');
mobile1.print()

let mobile2:Mobile = new Mobile('Redmi','Xiaomi','12 Pro','negro',124.99);
let mobile3:Mobile = new Mobile('Iphone','Apple','15','perla',829.95);

let myMobiles:Mobile[] = [mobile1, mobile2, mobile3]

myMobiles.forEach(mobile => mobile.print());
import { Mobile } from "./mobile";

let movil1:Mobile = new Mobile('Redmi','Xiaomi','12 Pro','negro',124.99);

console.log(movil1.name);
console.log(movil1.trademark);
console.log(movil1.color);
console.log(movil1.price);

movil1.name = 'Galaxy';
movil1.trademark = 'Samsung';
movil1.color ='silver';
movil1.price = 299.99;
console.log('---Cambio de valores con metodos set---');

console.log(movil1.name);
console.log(movil1.trademark);
console.log(movil1.color);
console.log(movil1.price);


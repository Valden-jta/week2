//  * ========================== RETO 5 ========================== * \\

import { Book } from "./book";

let book1 = new Book('El señor de los anillos', 1147, 'D00309459',' J. R. R. Tolkien','Minotauro')

console.log(book1.toString());
console.log('');
book1.title += ' ilustrado por Alan Lee'
console.log(book1.title);
book1.nPages = 1200;
console.log(book1.nPages);
book1.isbn = '9788445018538';
console.log(book1.isbn);
book1.author += ' y Alan Lee'
console.log('');
console.log(book1.toString());



//  * ========================== RETO 7 ========================== * \\
import { Book } from "./book";
import { Library } from "./library";

// Creación de varios objetos de la clase Book

let book1 = new Book("El Principito", 96, "978-3-16-148410-0", "Antoine de Saint-Exupéry", "Reynal & Hitchcock");
let book2 = new Book("Cien años de soledad", 471, "978-84-376-0494-7", "Gabriel García Márquez", "Editorial Sudamericana");
let book3 = new Book("1984", 328, "978-0-452-28423-4", "George Orwell", "Secker & Warburg");
let book4 = new Book('El señor de los anillos', 1147, '978-84-450-1853-8',' J. R. R. Tolkien','Minotauro')

// Creación del objeto library

let library1 = new Library('Av. Juan Carlos I 80, Leganés','Emma García')

// Colocamos los libros en el objeto library
library1.addBook(book1);
library1.addBook(book2);
library1.addBook(book3);
library1.addBook(book4);

console.log(library1.toString());
console.log('');
console.log('Nº de libros en la librería: ' + library1.getNumberOfBooks());
console.log('');
console.log('Libros de Orwell:\n' + library1.findByAuthor('George Orwell'));

//  * ========================== RETO 6 ========================== * \\
import { Book } from "./book";

export class Library {
  private _books: Book[];
  private _address: string;
  private _manager: string;

  constructor(address: string, manager: string) {
    this._books = [];
    this._address = address;
    this._manager = manager;
  }

  public get address(): string {
    return this._address;
  }
  public get manager(): string {
    return this._manager;
  }

  public set address(address) {
    this._address = address;
  }
  public set manager(manager) {
    this._manager = manager;
  }

  public toString(): string {
    let cadena = "";
    // Bucle for
    for (let i = 0; i < this._books.length; i++) {
      cadena += `Book${i+1}:\n${this._books[i].toString()}\n\n`;
    }

    // Bucle for..of
    // let index = 1;
    // for (let book of this._books) {
    //   cadena += `Book${index}:\n${book.toString()}\n`;
    //   index++
    // }

    // .forEach
    // this._books.forEach((book,index) =>{
    //     cadena += `Book${index+1}:\n${book.toString()}\n`
    // });

    // .map
    // 
    //     cadena = this._books.map((book,index) =>`Book${index+1}:\n${book.toString()}\n`}).join('');   // como map devuelve un array, hay que unir los datos del array(join)

    return cadena;
  }
  public addBook(book: Book): void {
    book instanceof Book
      ? this._books.push(book)
      : console.error(
          "Este dato no es válido, debes introducir un objeto tipo Book"
        );
  }

  public getNumberOfBooks(): number {
    return this._books.length;
  }

  public findByAuthor(author: string): Book[] {
    return this._books.filter((book) => book.author == author);
  }
}

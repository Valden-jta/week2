//  * ========================== RETO 4 ========================== * \\


export class Book {

    private _title: string;
    private _nPages: number;
    private _isbn: string;
    private _author: string;
    private _editorial:  string;

    constructor(title:string, nPages:number, isbn:string, author:string, editorial:string) {
        this._title = title;
        this._nPages = nPages;
        this._isbn = isbn;
        this._author = author;
        this._editorial = editorial; 
    }

    public get title():string {
        return this._title;
    }
    public get nPages():number {
        return this._nPages;
    }
    public get isbn():string {
        return this._isbn;
    }
    public get author():string {
        return this._author;
    }
    public get editorial():string {
        return this._editorial;
    }

    public set title(title:string) {
        this._title = title;
    }
    public set nPages(nPages:number) {
        this._nPages = nPages;
    }
    public set isbn(isbn:string) {
        this._isbn = isbn;
    }
    public set author(author:string) {
        this._author = author;
    }
    public set editorial(editorial:string) {
        this._editorial = editorial;
    }

    public toString():string {
        let cadena = `Title - ${this._title}\nNumber of Pages - ${this._nPages}\nISBN - ${this._isbn}\nAuthor - ${this._author}\nEditorial - ${this._editorial}`;
        return cadena;
    }

}
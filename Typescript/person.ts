//  * ========================== RETO 1 ========================== * \\

export class Person 
{
    // atributos
    public name:string;
    public age:number;
    private _address: string;

    // constructor
    constructor(name:string, age:number, address:string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // getters y setters
    public get address():string {
        return this._address;
    }
    // public getAddress():string {
    // return this.adress
    // }

    public set address(address:string) {
        this._address = address
    }
    // public setAdress(address:string):void {
    // this.address = address
    // }


    // Métodos públicos
    printName():void {
        console.log(this.name);
    }

    yearOfBirth(currentYear:number):number {
        return currentYear - this.age;
    }
     
}
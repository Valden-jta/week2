//  * ========================== RETO 3 ========================== * \\

import { Person } from "./person";

export class Contacts 
{
    // atributos
    public people: Person[];

    // constructor
   constructor()  {
    this.people = [];
   }

    // Métodos públicos
    public printCalendar():void {
        this.people.forEach(person => {
            person.printName();
            console.log(person.age);
            console.log(person.address);
        })
    
        
    }    
}
const {Person} = require('./person');

class Contacts 
{
    // constructor
    constructor() {
        this.contactList = [];

    }

    // métodos
    addContact(person) {
        person instanceof Person ? this.contactList.push(person) : console.log('Debes introducir un objeto de la clase Persona');
    }

    printPersons() {
        // for
        // for(let i = 0; i < this.contactList.length; i++) {
        //     this.contactList[i].printAll();
        // }
        // for...of
        
        // for (let contacto of this.contactList){
        //     contacto.printAll();
        // }

        // forEach
        this.contactList.forEach(contact => contact.printAll());
    }
}

module.exports = {Contacts};
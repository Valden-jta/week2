// 1. Guardar estos retos en un nuevo fichero. Ej: buclesFor.ts

// 1. Realizar una función que imprima los números impares existentes hasta el número indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)

function evenNumbers(num): void {
  for (let i = 0; i < num; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

evenNumbers(10);

// 1. Realizar una función que como parámetro de entrada reciba un array de strings y como salida devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)
function myRevert(myArr): string[] {
    let arrRev :string[] = [];
    for (let i = myArr.length-1; i >= 0; i--) {
        arrRev.push(myArr[i]);
    }
    return myArr = arrRev
}

let arrayNum:string[] = ['1','2','3','4','5']
console.log(myRevert(arrayNum));


// 1. Realizar una función que reciba como parámetro un array de strings que contenga nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)

function isRainbow(colors):void {
    let rainbow:string[] = ['rojo','naranja','amarillo','verde','azul','indigo','violeta'];
    for (let i = 0; i < colors.length; i ++) {
        if(rainbow.includes(colors[i])) {
            console.log(`El color ${colors[i]} está en el arcoíris`);
        } else{
            console.log(`El color ${colors[i]} no está en el arcoíris`);
        }
    }
}
let colors:string[] = ['rojo','morado','azul','turquesa','verde','amarillo','negro']
isRainbow(colors);

// 2. Realizar una función que te devuelva la suma del numero de caracteres de las palabras almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)

function add(myWords):number {
    let count:number = 0;
    for(let i = 0; i < myWords.length; i++) {
        count += myWords[i].length;
    }
    return count;
}

let palabras:string[] = ['perro','mi gato','Me llamo Javier'];
console.log(add(palabras));



// 1. Subir los cambios a GitHub.

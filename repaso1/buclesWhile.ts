// Guardar estos retos en un nuevo fichero. Ej: buclesWhile.ts

// 1. Realizar una función que te devuelva si existe un numero par en el array de números que introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)

function hasEven(myNums): string {
  let hasEvens: boolean = false;
  let i: number = 0;
  let result: string = "El array no incluye números pares";
  while (hasEvens == false && i < myNums.length) {
    if (myNums[i] % 2 == 0) {
      hasEvens = true;
      return (result = `El número ${myNums[i]}, en la posición ${i}, es par`);
    } else {
      i++;
    }
  }
  return result;
}

let nums1: number[] = [1, 2, 3, 4, 5];
let nums2: number[] = [1, 3, 5, 7, 9];

console.log(hasEven(nums1));
console.log(hasEven(nums2));

// 1. Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)

function startWithM(myNames): boolean {
  let control: boolean = true;
  let i: number = 0;
  while (control == true && i < myNames.length) {
    if (myNames[i].at(0) == "m" || myNames[i].at(0) == "M") {
      i++;
    } else {
      control = false;
    }
  }
  return control;
}

let names1: string[] = ["Manuel", "María", "Miguel", "Mauricio", "Maya"];
let names2: string[] = ["Manuel", "Javier", "Miguel", "Mauricio", "Jose"];

console.log(startWithM(names1));
console.log(startWithM(names2));


// 1. Subir los cambios a GitHub.

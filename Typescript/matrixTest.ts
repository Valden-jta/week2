import { Vector } from "./vector";
import { Matrix } from "./matrix";

let matrix1 = new Matrix(5,5,100);
let matrix2 = new Matrix(5,5,100);

console.log('Matriz1');
matrix1.print();
console.log('Matriz2');
matrix2.print();
console.log('Suma de Matrices');
matrix1.add(matrix2).print();
console.log('Multiplicar matriz1 por un numero');
matrix1.multNumber(10).print();
console.log('Multiplicación especial matriz1 por un numero');
matrix1.multSpecial(11).print();
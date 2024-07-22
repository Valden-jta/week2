import { MobileCollection } from "./mobileCollection";
import { Mobile } from "./mobile";

let mobile1: Mobile = new Mobile("Redmi 12", "Xiaomi", "Pro", "negro", 124.99);
let mobile2: Mobile = new Mobile(
  "Nokia 9",
  "Nokia",
  "PureView",
  "Blue",
  599
);
let mobile3: Mobile = new Mobile("Iphone", "Apple", "15", "perla", 829.95);
let mobile4: Mobile = new Mobile("Huawei", "Huawei", "P30", "Black", 599);
let arrayMobile = [mobile1, mobile2, mobile3, mobile4];
let myCollection = new MobileCollection(arrayMobile);

myCollection.printCollection();
console.log(myCollection.totalPrice);

console.log("----- Haciendo cambios con los métodos set -----");
let arrayMobile2 = [
  new Mobile("Sony Xperia", "Sony", "1", "Black", 949),
  new Mobile("LG G8", "LG", "ThinQ", "Gray", 849),
  new Mobile("Motorola Edge", "Motorola", "Edge", "Solar Black", 699),
];

myCollection.mobileCollection = arrayMobile2;

console.log(myCollection.mobileCollection);

console.log("----- Cambiando el precio total -----");
myCollection.totalPrice = 2195.69;
console.log(myCollection.totalPrice);

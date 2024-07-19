//* ======================================================== CONDICIONALES ======================================================== *\\

//? --------------------- FUNCIONES ---------------------
// Trabajar en la rama repaso1 .En una carpeta nueva. Ej: retos1. Guarda estos retos en un fichero .js Ej: condicionales.ts

// Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.
// La fecha de nacimiento vendrá indicada por dos números: dia y mes.
// La cabecera de la función tendrá el siguiente aspecto:  function zodiac(day, month)

function zodiac(day: number, month: number): string {
  // función fecha: traduce dos valores numericos, a día y mes (teniendo en cuenta la duración de cada mes, y sin contar bisiestos)
  const fecha = (day: number, month: number): Date | null => {
    let anyoActual: number = new Date().getFullYear();
    if (
      (day > 28 && month === 2) ||
      (day === 31 && ![1, 3, 5, 7, 8, 10, 12].includes(month)) ||
      (day > 30 && [4, 6, 9, 11].includes(month)) ||
      day > 31 ||
      day < 1 ||
      month > 12 ||
      month < 1
    ) {
      return null;
    }
    return new Date(anyoActual, month - 1, day);
  };
  // Pasamos los parametros a un objeto Date con la funcion fecha
  let fechaZodiac: Date = fecha(day, month);

  // Como tanto la fecha introducida por parametros, como las fechas del zodiaco, son objetos Date,
  // podemos comparar rangos de fechas para ver a que signo corresponde la fecha introducida
  let zodiac =
    fechaZodiac >= fecha(21, 3) && fechaZodiac <= fecha(19, 4)
      ? "Aries"
      : fechaZodiac >= fecha(20, 4) && fechaZodiac <= fecha(20, 5)
      ? "Tauro"
      : fechaZodiac >= fecha(21, 5) && fechaZodiac <= fecha(20, 6)
      ? "Geminis"
      : fechaZodiac >= fecha(21, 6) && fechaZodiac <= fecha(22, 7)
      ? "Cáncer"
      : fechaZodiac >= fecha(23, 7) && fechaZodiac <= fecha(22, 8)
      ? "Leo"
      : fechaZodiac >= fecha(23, 8) && fechaZodiac <= fecha(22, 9)
      ? "Virgo"
      : fechaZodiac >= fecha(23, 9) && fechaZodiac <= fecha(21, 10)
      ? "Libra"
      : fechaZodiac >= fecha(22, 10) && fechaZodiac <= fecha(21, 11)
      ? "Escorpio"
      : fechaZodiac >= fecha(22, 11) && fechaZodiac <= fecha(21, 12)
      ? "Sagitario"
      : fechaZodiac >= fecha(22, 12) && fechaZodiac <= fecha(19, 1)
      ? "Capricornio"
      : fechaZodiac >= fecha(20, 1) && fechaZodiac <= fecha(18, 2)
      ? "Acuario"
      : fechaZodiac >= fecha(19, 2) && fechaZodiac <= fecha(20, 3)
      ? "Piscis"
      : "Fecha no válida";

  return zodiac;
}

// Realizar un procedimiento que dado el nombre de un  país te imprima en que continente estás. (Max 5 países por continente).
// La cabecera del procedimiento tendrá el siguiente aspecto:  function continent(country)

function continent(country: string): void {
  let continents = new Map<string, string[]>();
  continents.set("Europa", [
    "Italia",
    "Francia",
    "Alemania",
    "España",
    "Grecia",
  ]);
  continents.set("África", [
    "Marruecos",
    "Sudáfrica",
    "Nigeria",
    "Emiratos Árabes",
    "Etiopía",
  ]);
  continents.set("Asia", ["China", "Japón", "Vietnam", "Camboya", "Tailandia"]);
  continents.set("Oceanía", [
    "Australia",
    "Nueva Zelanda",
    "Fiji",
    "Islas Filipinas",
    "Samoa",
  ]);
  continents.set("América", [
    "Estados Unidos",
    "Perú",
    "México",
    "Canadá",
    "Argentina",
  ]);

  let search: string = "El país buscado no esta en la lista";
  for (let [continentName, countries] of continents) {
    if (countries.includes(country)) {
      search = continentName;
    }
  }
  console.log(search);
}

//TODO Realizar una función que te imprima por consola el siguiente mensaje:
//TODO        - “El numero es par”, si el número introducido como parámetro de entrada es par
//TODO        - “El numero es impar”, si el número introducido como parámetro de entrada es impar
//TODO La cabecera de la función tendrá el siguiente aspecto:  function isEven(number)

function isEven(number:number):void {
    if (number % 2 == 0) {
        console.log('El numero es par')
    } else {
        console.log('El numero es impar');
        
    }
}

//TODO Subir los cambios a GitHub.

//? --------------------- MAIN ---------------------

console.log("------- ZODIAC -------");
console.log(zodiac(4, 3));
console.log(zodiac(1, 13));

console.log("------- CONTINENT -------");
continent("Perú");
continent("Suecia");

console.log("------- ISEVEN -------");
isEven(18);
isEven(157);
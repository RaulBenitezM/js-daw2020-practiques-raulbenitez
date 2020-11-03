const numBoletos = 50;
const cantNumBoleto = 6;
const numMax = 49;
const numBarajar = 200;

let numeros = [];

//Bucle para rellenar el array numeros[] con numeros del 1 al 49
for (let i = 0; i < numMax; i++) {
  numeros[i] = i + 1;
}

let combinaciones = [];
let numeroPrimitiva = [];

//Bucle para rellenar las combinaciones diferentes en el array combinaciones[]
for (let i = 0; i < numBoletos; i++) {
  //Bucle para barajar los numeros del 1 al 49 del array numeros[]
  for (let j = 0; j < numBarajar; j++) {
    let pos1 = Math.floor(Math.random() * numMax);
    let pos2 = Math.floor(Math.random() * numMax);

    [numeros[pos1], numeros[pos2]] = [numeros[pos2], numeros[pos1]];
  }

  //Bucle para recoger los 6 primeros valores del array numeros[] al array numeroPrimitiva[]
  for (let j = 0; j < cantNumBoleto; j++) {
    numeroPrimitiva[j] = numeros[j];
  }

  //Insertar el array numeroPrimitiva[] con un guión de separación entre cada valor
  combinaciones.push(numeroPrimitiva.join('-'));
}

for (let i = 0; i < combinaciones.length; i++) {
  console.log('Combinacion ' + (i + 1) + ': ' + combinaciones[i]);
}

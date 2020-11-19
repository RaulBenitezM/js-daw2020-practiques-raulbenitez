function Punto(x = 0, y = 0) {
  this.x = x;
  this.y = y;

  this.cambiar = (x2, y2) => {
    this.x = x2;
    this.y = y2;
  };

  this.copia = () => new Punto(this.x, this.y);

  this.suma = (p2) => new Punto(this.x + p2.x, this.y + p2.y);
}

//Test creación de un punto con dos parametros
let punto1 = new Punto(2, 4);

console.log('Punto1: X=' + punto1.x + ', Y=' + punto1.y);

//Test cambiar valores del objeto
punto1.cambiar(6, 8);

console.log('Punto1 (cambiando valores): X=' + punto1.x + ', Y=' + punto1.y);

//Test copiar objeto a otra variable
let punto2 = punto1.copia();

console.log('Punto2 (copia de Punto1): X=' + punto2.x + ', Y=' + punto2.y);

//Test sumar dos puntos
let punto3 = punto1.suma(punto2);

console.log(
  'Punto3 (suma de Punto1 y Punto2): X=' + punto3.x + ', Y=' + punto3.y
);

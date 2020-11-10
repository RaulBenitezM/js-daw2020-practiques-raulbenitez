const p2Test = require('../../app/scripts/practicas_funciones/p2.js');

test('Palabra "Mano" debe tener valor "2"', () => {
  const palabras = ['Mano', 'Hola', 'Mundo', 'Mano', 'Uno'];
  const numRepetido = p2Test.palabrasRepetidas(palabras);
  expect(numRepetido.get('Mano')).toBe(2);
});

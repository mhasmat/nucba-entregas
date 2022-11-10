let gustosHelado = [
  'americana',
  'dulce de leche',
  'frutilla',
  'chocolate',
  'sambayón',
];

// const manipularArray2 = () => {
//   let primero = gustosHelado.shift();
//   gustosHelado.push(primero);
//   console.log(gustosHelado);
// };
// manipularArray2();

// const manipularArray3 = () => {
//   let arrayReversa = gustosHelado.reverse();
//   let arrayString = gustosHelado.join(' - ');
//   console.log(arrayReversa);
//   console.log(arrayString);
// };
// manipularArray3();

let gustosHelado2 = ['durazno', 'limón', 'menta granizada', 'crema moka'];

const manipularArray4 = () => {
  let seleccion = gustosHelado
    .slice(gustosHelado.length - 2)
    .concat(gustosHelado2.slice(0, 2));

  return seleccion;
};

console.log(manipularArray4());

let gustosHelado = [
  'americana',
  'dulce de leche',
  'frutilla',
  'chocolate',
  'sambayón',
];

const manipularArray = (sabor) => {
  //   let ultimo = gustosHelado[gustosHelado.length - 1];

  gustosHelado.unshift(gustosHelado.pop());
  gustosHelado.push(sabor);

  console.log(gustosHelado);
};

console.log(gustosHelado);
manipularArray('vainilla');

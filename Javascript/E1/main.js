const pizzas = [
  {
    id: 1,
    nombre: 'Muzzarella',
    ingredientes: [
      'salsa de tomate',
      'pimentón',
      'muzzarella',
      'orégano',
      'aceitunas',
    ],
    precio: 1200,
  },
  {
    id: 2,
    nombre: 'Napolitana',
    ingredientes: [
      'tomate en rodajas',
      'ajo',
      'perejil',
      'muzzarella',
      'orégano',
      'aceite de oliva',
      'salsa de tomate',
    ],
    precio: 1600,
  },
  {
    id: 3,
    nombre: 'Jamón y Morrones',
    ingredientes: [
      'jamón',
      'morrones',
      'muzzarella',
      'orégano',
      'salsa de tomate',
    ],
    precio: 1500,
  },
  {
    id: 4,
    nombre: 'Fugazzeta',
    ingredientes: [
      'cebolla',
      'aceite oliva',
      'provolone',
      'orégano',
      'aceitunas',
    ],
    precio: 1300,
  },
  {
    id: 5,
    nombre: 'Calabresa',
    ingredientes: [
      'longaniza en rodajas',
      'ajo',
      'perejil',
      'muzzarella',
      'provolone',
      'orégano',
      'aceitunas',
    ],
    precio: 1800,
  },
  {
    id: 6,
    nombre: 'Rúcula y Crudo',
    ingredientes: [
      'rúcula',
      'jamón crudo',
      'provolone',
      'orégano',
      'aceitunas',
      'salsa de tomate',
      'aceite oliva',
    ],
    precio: 1900,
  },
  {
    id: 7,
    nombre: 'Palmitos',
    ingredientes: [
      'palmitos',
      'salsa golf',
      'muzzarella',
      'orégano',
      'aceitunas',
      'salsa de tomate',
    ],
    precio: 1900,
  },
];

pizzas.forEach((pizza) => {
  console.log(`Nucba Zapi ${pizza.id}:`);
  // a)
  if (pizza.id % 2) {
    console.log(`(ID impar: ${pizza.id} / Pizza ${pizza.nombre})`);
  }

  // b)
  if (pizza.precio < 1700) {
    console.log(`La pizza de ${pizza.nombre}, vale menos de $1700.`);
  }

  // c)
  console.log(`Gusto: ${pizza.nombre} = $${pizza.precio}`);

  // d)
  console.log(`Ingredientes: ${pizza.ingredientes}.`);
});

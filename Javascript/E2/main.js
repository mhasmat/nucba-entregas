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

//capturar elementos
const numberInput = document.querySelector('#numero');
const formulario = document.querySelector('#formulario');
const renderResultado = document.querySelector('.resultado');

//validacion
const checkInputOption = () => {
  let valid = false;

  const inputValue = numberInput.value;

  if (isEmpty(inputValue)) {
    return (renderResultado.innerHTML = `<h3>Elija una opción</h3>`);
  } else if (!opcionValida(inputValue)) {
    return (renderResultado.innerHTML = `<h3>Opción no válida</h3>`);
  } else {
    valid = true;
    pizzas.find((pizza) => {
      renderResultado.innerHTML = `<h3>Opción: ${pizza.id}</h3>
                                  <h2> ${pizza.nombre}</h2>
                                  <h3> ${pizza.precio}</h3>`;
    });
  }

  return valid;
};

const isEmpty = (value) => !value.length;

const opcionValida = (value) => {
  const re = /^[1-7]+$/;

  return re.test(value);
};

//eventos
formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputOption();
  formulario.reset();
});

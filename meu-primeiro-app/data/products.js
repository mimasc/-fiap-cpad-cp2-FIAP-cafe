export const productsByCategory = {
  cafes: {
    title: 'Cafés',
    description: 'Cafés quentes e opções especiais para o intervalo.',
    products: [
      {
        nome: 'Espresso',
        image: require('../assets/espresso.png'),
        tamanhos: [
          { label: 'P', preco: 4 },
          { label: 'M', preco: 5 },
          { label: 'G', preco: 6 },
        ],
      },
      {
        nome: 'Americano',
        image: require('../assets/americano.png'),
        tamanhos: [
          { label: 'P', preco: 5 },
          { label: 'M', preco: 6 },
          { label: 'G', preco: 7 },
        ],
      },
      {
        nome: 'Latte',
        image: require('../assets/latte.png'),
        tamanhos: [
          { label: 'P', preco: 6 },
          { label: 'M', preco: 7 },
          { label: 'G', preco: 8 },
        ],
      },
      {
        nome: 'Moca',
        image: require('../assets/moca.png'),
        tamanhos: [
          { label: 'P', preco: 6 },
          { label: 'M', preco: 7 },
          { label: 'G', preco: 8 },
        ],
      },
      {
        nome: 'Chá de erva-doce',
        image: require('../assets/cha.png'),
        tamanhos: [
          { label: 'P', preco: 4 },
          { label: 'M', preco: 5 },
          { label: 'G', preco: 6 },
        ],
      },
      {
        nome: 'Extra: Chantilly',
        preco: 3,
      },
      {
        nome: 'Extra: Calda com sabor',
        preco: 2,
      },
      {
        nome: 'Extra: Leite de soja',
        preco: 4,
      },
    ],
  },

  bebidas: {
    title: 'Bebidas',
    description: 'Bebidas geladas para acompanhar seu pedido.',
    products: [
      {
        nome: 'Água mineral',
        image: require('../assets/agua.png'),
        preco: 4,
      },
      {
        nome: 'Água com gás',
        image: require('../assets/agua.png'),
        preco: 5,
      },
      {
        nome: 'Refrigerante lata',
        image: require('../assets/refrigerante.png'),
        preco: 7,
      },
      {
        nome: 'Suco natural',
        image: require('../assets/suco.png'),
        tamanhos: [
          { label: 'Laranja', preco: 8 },
          { label: 'Uva', preco: 8 },
        ],
      },
      {
        nome: 'Chá gelado',
        image: require('../assets/cha.png'),
        preco: 7,
      },
    ],
  },

  salgados: {
    title: 'Salgados',
    description: 'Salgados rápidos para comer entre as aulas.',
    products: [
      {
        nome: 'Pão de queijo',
        image: require('../assets/pao-de-queijo.png'),
        preco: 6,
      },
      {
        nome: 'Coxinha',
        image: require('../assets/coxinha.png'),
        preco: 8,
      },
      {
        nome: 'Esfiha de carne',
        image: require('../assets/esfiha.png'),
        preco: 7,
      },
      {
        nome: 'Esfiha de queijo',
        image: require('../assets/esfiha.png'),
        preco: 7,
      },
      {
        nome: 'Empada de frango',
        image: require('../assets/empada.png'),
        preco: 8,
      },
      {
        nome: 'Croissant presunto e queijo',
        image: require('../assets/croissant.png'),
        preco: 10,
      },
    ],
  },

  doces: {
    title: 'Doces',
    description: 'Doces para finalizar o pedido.',
    products: [
      {
        nome: 'Brownie',
        image: require('../assets/brownie.png'),
        preco: 9,
      },
      {
        nome: 'Cookie',
        image: require('../assets/cookie.png'),
        preco: 6,
      },
      {
        nome: 'Bolo de cenoura',
        image: require('../assets/bolo-cenoura.png'),
        preco: 8,
      },
      {
        nome: 'Muffin de chocolate',
        image: require('../assets/muffin.png'),
        preco: 9,
      },
      {
        nome: 'Donut',
        image: require('../assets/donut.png'),
        preco: 7,
      },
      {
        nome: 'Brigadeiro',
        image: require('../assets/brigadeiro.png'),
        preco: 4,
      },
    ],
  },

  outros: {
    title: 'Outros',
    description: 'Itens extras disponíveis na cantina.',
    products: [
      {
        nome: 'Guardanapo extra',
        preco: 0,
      },
      {
        nome: 'Copo descartável',
        preco: 1,
      },
      {
        nome: 'Talher descartável',
        preco: 1,
      },
      {
        nome: 'Sacola para viagem',
        preco: 1,
      },
    ],
  },
};
console.log('Working');

let shades = [
  {
    title: 'Black',
    subTitle: 'Rock-N-Stroll',
    img: '../../images/product-black.jpg',
    price: '$199'
  },
  {
    title: 'Red',
    subTitle: 'Rock-N-Stroll',
    img: '../../images/product-red.jpg',
    price: '$199'
  },
  {
    title: 'Green',
    subTitle: 'Rock-N-Stroll',
    img: '../../images/product-green.jpg',
    price: '$199'
  },
  {
    title: 'Blue',
    subTitle: 'Rock-N-Stroll',
    img: '../../images/product-blue.jpg',
    price: '$199'
  },
]

console.log(shades);

function colorPicker(e) {
  if (e.classList.contains('black')) {
    console.log(shades[0]);
  } else if (e.classList.contains('red')) {
    console.log(shades[1]);
  } else if (e.classList.contains('green')) {
    console.log(shades[2]);
  } else {
    console.log(shades[3]);
  }
}

console.log('Working');

let shades = [
  {
    color: 'Red',
    img: './images/product-red.jpg',
    price: '$199'
  },
  {
    color: 'Green',
    img: './images/product-green.jpg',
    price: '$199'
  },
  {
    color: 'Blue',
    img: './images/product-blue.jpg',
    price: '$199'
  },
  {
    color: 'Black',
    img: './images/product-black.jpg',
    price: '$199'
  },
]

console.log(shades);

function colorPicker(e) {
  if (e.classList.contains('red')) {
    $('.mobile-product-color').text(shades[0].color);
    $('.mobile-product-price').text(shades[0].price);
    $("#mobile-products .peppers-product img").attr("src", shades[0].img);
  } else if (e.classList.contains('green')) {
    $('.mobile-product-color').text(shades[1].color);
    $('.mobile-product-price').text(shades[1].price);
    $("#mobile-products .peppers-product img").attr("src", shades[1].img);
  } else if (e.classList.contains('blue')) {
    $('.mobile-product-color').text(shades[2].color);
    $('.mobile-product-price').text(shades[2].price);
    $("#mobile-products .peppers-product img").attr("src", shades[2].img);
  } else {
    $('.mobile-product-color').text(shades[3].color);
    $('.mobile-product-price').text(shades[3].price);
    $("#mobile-products .peppers-product img").attr("src", shades[3].img);
  }
}

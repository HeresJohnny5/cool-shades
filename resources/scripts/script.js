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
];

function colorPicker(e) {
  let productColorTxt = $('.mobile-product-color');
  let productPriceTxt = $('.mobile-product-price');
  let productImg = $('#mobile-products .peppers-product img');

  if (e.classList.contains('red')) {
    productColorTxt.text(shades[0].color);
    productPriceTxt.text(shades[0].price);
    productImg.attr("src", shades[0].img);
  } else if (e.classList.contains('green')) {
    productColorTxt.text(shades[1].color);
    productPriceTxt.text(shades[1].price);
    productImg.attr("src", shades[1].img);
  } else if (e.classList.contains('blue')) {
    productColorTxt.text(shades[2].color);
    productPriceTxt.text(shades[2].price);
    productImg.attr("src", shades[2].img);
  } else {
    productColorTxt.text(shades[3].color);
    productPriceTxt.text(shades[3].price);
    productImg.attr("src", shades[3].img);
  }
}

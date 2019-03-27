let shades = [
  {
    class: 'red',
    color: 'Red',
    img: './images/product-red.jpg',
    price: '$199'
  },
  {
    class: 'green',
    color: 'Green',
    img: './images/product-green.jpg',
    price: '$199'
  },
  {
    class: 'blue',
    color: 'Blue',
    img: './images/product-blue.jpg',
    price: '$199'
  },
  {
    class: 'black',
    color: 'Black',
    img: './images/product-black.jpg',
    price: '$199'
  },
];

function colorPicker(e) {
  let productColorTxt = $('.mobile-product-color');
  let productPriceTxt = $('.mobile-product-price');
  let productImg = $('#mobile-products .peppers-product img');

  shades.forEach((shade, index) => {
    if (e.classList.contains(`${shades[index].class}`)) {
      productColorTxt.text(shades[index].color);
      productPriceTxt.text(shades[index].price);
      productImg.attr("src", shades[index].img);
    }
  });
}

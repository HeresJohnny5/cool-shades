let shades = [
  {
    class: 'red',
    color: 'Red',
    img: './images/product-red.jpg',
    price: '$99',
    subtitle: 'Rock-N-Stroll'
  },
  {
    class: 'green',
    color: 'Green',
    img: './images/product-green.jpg',
    price: '$99',
    subtitle: 'Rock-N-Stroll'
  },
  {
    class: 'blue',
    color: 'Blue',
    img: './images/product-blue.jpg',
    price: '$99',
    subtitle: 'Rock-N-Stroll'
  },
  {
    class: 'black',
    color: 'Black',
    img: './images/product-black.jpg',
    price: '$99',
    subtitle: 'Rock-N-Stroll'
  },
];

function mobileProducts(product) {
  return `
    <div class="col peppers-product text-center">
      <img class="img-fluid" src="${product.img}" alt="Peppers Rock-N-Stroll Red">
      <p class="product-title">${product.subtitle}</p>
      <h3>${product.title}</h3>
      <div class="circles">
        <div class="circle red" data-index="0"></div>
        <div class="circle green" data-index="1"></div>
        <div class="circle blue" data-index="2"></div>
        <div class="circle black" data-index="3"></div>
      </div>
      <p class="product-price">${product.price}</p>
      <div class="product-cta-container">
        <a href="#" class="btn btn-danger btn-lg">Add to Cart</a>
      </div>
    </div>
  `;
}

$(document).ready(function() {
  $('#mobile-products').html(mobileProducts(shades[0]));

  $('.dot').click(function() {
    let index = $(this).data('index');
    $('#mobile-products').html(mobileProducts(shades[index]));
  });
})

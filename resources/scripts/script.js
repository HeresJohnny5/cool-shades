let shades = [
  {
    class: 'red',
    color: 'Red',
    img: './images/product-red.jpg',
    price: '$199',
    subtitle: 'Rock-N-Stroll'
  },
  {
    class: 'green',
    color: 'Green',
    img: './images/product-green.jpg',
    price: '$199',
    subtitle: 'Rock-N-Stroll'
  },
  {
    class: 'blue',
    color: 'Blue',
    img: './images/product-blue.jpg',
    price: '$199',
    subtitle: 'Rock-N-Stroll'
  },
  {
    class: 'black',
    color: 'Black',
    img: './images/product-black.jpg',
    price: '$199',
    subtitle: 'Rock-N-Stroll'
  },
];

// function colorPicker(e) {
//   let productColorTxt = $('.mobile-product-color');
//   let productPriceTxt = $('.mobile-product-price');
//   let productImg = $('#mobile-products .peppers-product img');
//
//   shades.forEach((shade, index) => {
//     if (e.classList.contains(`${shades[index].class}`)) {
//       productColorTxt.text(shades[index].color);
//       productPriceTxt.text(shades[index].price);
//       productImg.attr("src", shades[index].img);
//     }
//   });
// }

function colorPicker(product) {
  console.log('lkdjfldjflkdjf');
}

function mobileProducts(product) {
  // console.log('shades: ', shades);
  //
  // console.log('product:', product);

  return `
    <div class="col peppers-product text-center">
      <img class="img-fluid" src="${product.img}" alt="Peppers Rock-N-Roll Red">
      <p class="product-title">${product.subtitle}</p>
      <h3>${product.color}</h3>

      <div class="color-selector pb-5">
        <span class="dot red" data-index="0"></span>
        <span class="dot green" data-index="1"></span>
        <span class="dot blue" data-index="2"></span>
        <span class="dot black" data-index="3"></span>
      </div>

      <p class="product-price">${product.price}</p>
      <div class="product-cta-container">
        <a href="#!" class="btn btn-danger btn-lg">Add to Cart</a>
      </div>
    </div>
  `;
}

$(document).ready(function() {
  $('#mobile-products').html(mobileProducts(shades[0]));

  function colorPicker() {
    $('.dot').click(function() {
      let index = $(this).data('index');
      console.log(index);
      console.log(shades[index]);
    });
  }
})


  //  need to use mutation observer to listen for attribute changes on the hidden select element

  let element = document.querySelector('.product-page__description--title');
  let element2;

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === 'attributes') {
        element2 = document.querySelector('.product-page--title.product-variant--title.active').textContent.trim();
        console.log('attributes changed');
        document.querySelectorAll('span.single_title')[0].textContent = element2;
      }
      console.log(mutation.target);
    });
  });

  observer.observe(element, {
    childList: true,
    attributes: true,
    subtree: true,
    attributeFilter: ['class'],
  });

  function calculateTotal() {
    var priceArry = [];
    $('.name_single_pro_check.is-checked input').each(function () {
      var total = 0;
      var single_Price = $(this).attr('data-price');
      priceArry.push(single_Price);
    });
    setTimeout(function () {
      var total = 0; // variable to store the total
      $.each(priceArry, function (index, value) {
        total += parseFloat(value) || 0;
      });
      console.log('Total: ' + total.toFixed(2)); // display the total
      $('.total-count span.final_price').text(total.toFixed(2));
    }, 1000);
  }

  $(document).ready(function () {
    calculateTotal();
  });

  $('.name_single_pro_check input, .name_single_pro_check label').click(function () {
    if (!$(this).is(':checked')) {
      $(this).parent().removeClass('is-checked');
      var product_val = $(this).val();
      $('#product-' + product_val).hide();
      $('#product-' + product_val).removeClass('name_single_active');
    } else {
      $(this).parent().addClass('is-checked');
      var product_val = $(this).val();
      $('#product-' + product_val).show();
      $('#product-' + product_val).addClass('name_single_active');
    }

    calculateTotal();
  });

  $('button#add-to-cart-button').on('click', function () {
    var variants = []; // Create an empty array to store variant data

    // Loop through each selected variant and retrieve its information
    $('.name_single_pro_check.is-checked').each(function () {
      var variantId = $(this).find('input').val(); // Get the selected variant ID
      console.log(variantId);
      var quantity = 1; // Replace with the desired quantity

      // Create an object to store the variant information
      var variant = {
        id: variantId,
        quantity: quantity,
      };

      // Add the variant object to the variants array
      variants.push(variant);
    });

    // Send the variants data to the Shopify cart using AJAX
    $.ajax({
      type: 'POST',
      url: '/cart/add.js', // Replace with the actual Shopify cart URL
      data: {
        items: variants,
      },
      dataType: 'json',
      success: function (response) {
        console.log('Products added to cart');
      },
      error: function (xhr, status, error) {
        // Handle error response, if any
      },
    });
  });


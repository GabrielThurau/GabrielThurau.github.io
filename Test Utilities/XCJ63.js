(() => {

  function addStyle(styleString) {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.append(style);
  }

  addStyle(`
      .checkbox-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      }
      
      .gift-wrap {
      display: flex;
      align-items: center;
      }
      
      div.holiday-kit-gift__content.kit-gift-content > div > svg > path {
      fill: #D3FFD0;
      }
      
      .gift-label {
      padding-bottom: 0px !important;
      padding-left: 7px; 
      text-transform: none;
      }
      
      div.holiday-kit-gift__content.kit-gift-content > div {
      margin-top: 1rem;
      }
      
      input[type="checkbox"].gift-check {
      outline: 1px solid #E00000 !important;
      background-color: #d3ffd0 !important;
      appearance: none !important;
      opacity: 0 !important;
      width: 1.30rem;
      border-radius: 4px !important;
      height: 1.30rem !important;
      }

      .gift-wrap label::before{
          content: "";
          display: inline-block;
          height: 1.30rem;
          width: 1.30rem;
          border: 1px solid #E00000;   
          border-radius: 4px;
          position: absolute;
          top: 6;
          left: -20%;
      }

      div.holiday-kit-gift__content.kit-gift-content > div > div > input[type="checkbox"] + label::before {
      border: 1px solid #D4FFD0;  
      }

      .gift-wrap label::after {
          content: url("https://cdn.shopify.com/s/files/1/0612/5086/3345/files/Path.svg?v=1702333553");
          display: inline-block;
          height: 20px;
          width: 15px;
      }

      .gift-wrap label {
     position: relative;
       }
      .gift-wrap label::before,
      .gift-wrap label::after {
          position: absolute;
      }

      .gift-wrap label::before {
          top: 2px;
      }
 
      .gift-wrap label::after {
        left: -15%;
      }

      .gift-wrap input[type="checkbox"] + label::after {
          content: none;
      }

      .gift-wrap input[type="checkbox"]:checked + label::before {
       background-color: #E00000;
       border: none !important;
      }

      div.holiday-kit-gift__content.kit-gift-content > div > div > input[type="checkbox"]:checked + label::before {
        background-color: #D4FFD0;
      }

      .gift-wrap input[type="checkbox"]:checked + label::after {
          content: url("https://cdn.shopify.com/s/files/1/0612/5086/3345/files/Path_1.svg?v=1702402742");
          display: inline-flex;
          height: 20px;
          width: 15px;
          font-size: 1rem;
          transform: scale(1.3);
      }

       div.holiday-kit-gift__content.kit-gift-content > div > div > input[type="checkbox"]:checked + label::after {
           content: url("https://cdn.shopify.com/s/files/1/0612/5086/3345/files/Path.svg?v=1702333553");
          display: inline-flex;
          height: 20px;
          width: 15px;
          font-size: 1rem;
          transform: scale(1.3);
      }
      
      `);

  // for PDP page

  if (window.location.href === 'https://eatmila.com/products/the-mila-gift-experience') {

      const giftID = setInterval(giftCallback, 200);

      function giftCallback() {
          let thing = document.querySelector('.product-page--form');
          if (thing) {
              clearInterval(giftID);
              doThing(thing);
          }
      }

      function doThing(thing) {
          const checkBoxMarkup = `
      
      <div class="checkbox-container">
      <div class="gift-wrap">
      <input class="gift-check" type="checkbox" id="checkbox_1">
      <label for="checkbox_1" class="gift-label">Is this a gift?</label>
      </div
      <div class="image-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none"><path fill="#E00000" d="M21.094 7.227h-4.03c.207-.13.403-.277.586-.438a2.693 2.693 0 0 0 .9-1.953 2.992 2.992 0 0 0-3.072-3.078 2.692 2.692 0 0 0-1.953.9 5.576 5.576 0 0 0-1.025 1.81 5.577 5.577 0 0 0-1.023-1.809 2.692 2.692 0 0 0-1.956-.901 2.991 2.991 0 0 0-3.076 3.077 2.691 2.691 0 0 0 .9 1.953c.184.162.38.308.587.438H3.906A1.367 1.367 0 0 0 2.54 8.594v3.125a1.367 1.367 0 0 0 1.367 1.367h.196v6.445a1.367 1.367 0 0 0 1.367 1.367H19.53a1.367 1.367 0 0 0 1.367-1.367v-6.445h.196a1.367 1.367 0 0 0 1.367-1.367V8.594a1.367 1.367 0 0 0-1.367-1.367Zm-7.835-1.075c.22-1.183.614-2.124 1.141-2.72a1.531 1.531 0 0 1 1.114-.502h.053a1.817 1.817 0 0 1 1.816 1.869 1.53 1.53 0 0 1-.506 1.113c-1.047.924-2.822 1.2-3.758 1.28.025-.282.065-.641.14-1.04Zm-5.11-2.69c.341-.34.802-.531 1.284-.532h.053a1.531 1.531 0 0 1 1.114.506c.923 1.046 1.2 2.822 1.28 3.757a10.836 10.836 0 0 1-1.036-.14C9.66 6.837 8.72 6.44 8.124 5.912A1.528 1.528 0 0 1 7.617 4.8a1.821 1.821 0 0 1 .532-1.337Zm-4.438 8.257V8.594a.195.195 0 0 1 .195-.196h8.008v3.516H3.906a.195.195 0 0 1-.195-.195Zm1.562 7.812v-6.445h6.641v6.64H5.47a.195.195 0 0 1-.196-.195Zm14.454 0a.195.195 0 0 1-.196.196h-6.445v-6.641h6.64v6.445Zm1.562-7.812a.195.195 0 0 1-.195.195h-8.008V8.398h8.008a.195.195 0 0 1 .195.196v3.125Z"/></svg>
      </div>
      </div>
      
      `;

          thing.insertAdjacentHTML('beforebegin', checkBoxMarkup);

          // let's do one more thing!

          const checkbox = document.querySelector('.gift-check')
          checkbox.addEventListener('change', changeThing);
      }

      function changeThing() {
          atcButtons = document.querySelectorAll('.btn-red');
          if (this.checked) {
              atcButtons.forEach(butt => {
                  if (butt.textContent.toLowerCase().includes('add to cart')) {
                      butt.textContent = "Send as Gift?"
                  }

              });
          } else if (!this.checked) {
              atcButtons.forEach(butt => {
                  if (butt.textContent.toLowerCase().includes('send as gift?')) {
                      butt.textContent = "Add To Cart"
                  }
              });
          }

      }

      // for PDP page

      // check if the gift checkbox is checked. If it is, stop the usual rebuy slide cart from opening on post and then redirect to gift checkout page

      document.addEventListener('rebuy:cart.add', (event) => {
          console.log('add to cart triggered');
          const giftCheck = document.querySelector('.gift-check');
          const SmartCart = window.Rebuy.SmartCart;
          if (giftCheck.checked) {
              SmartCart.skip_open = true;
              window.location.href = 'https://eatmila.com/a/gs/cart/';
          }
      });
  }


  if (window.location.href === 'https://eatmila.com/pages/holiday-kit') {

      const holidayID = setInterval(holidayCallback, 200);

      function holidayCallback() {
          let thingTwo = document.querySelectorAll('form')[1];
          let thingThree = document.querySelectorAll('form')[2];
          if (thingTwo && thingThree) {
              clearInterval(holidayID);
              doThingTwo(thingTwo);
              doThingThree(thingThree)
          }
      }

      function doThingTwo(thingTwo) {
          const checkBoxMarkup = `
      
      <div class="checkbox-container">
      <div class="gift-wrap">
      <input class="gift-check" type="checkbox" id="checkbox_2">
      <label for="checkbox_2" class="gift-label">Is this a gift?</label>
      </div
      <div class="image-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none"><path fill="#E00000" d="M21.094 7.227h-4.03c.207-.13.403-.277.586-.438a2.693 2.693 0 0 0 .9-1.953 2.992 2.992 0 0 0-3.072-3.078 2.692 2.692 0 0 0-1.953.9 5.576 5.576 0 0 0-1.025 1.81 5.577 5.577 0 0 0-1.023-1.809 2.692 2.692 0 0 0-1.956-.901 2.991 2.991 0 0 0-3.076 3.077 2.691 2.691 0 0 0 .9 1.953c.184.162.38.308.587.438H3.906A1.367 1.367 0 0 0 2.54 8.594v3.125a1.367 1.367 0 0 0 1.367 1.367h.196v6.445a1.367 1.367 0 0 0 1.367 1.367H19.53a1.367 1.367 0 0 0 1.367-1.367v-6.445h.196a1.367 1.367 0 0 0 1.367-1.367V8.594a1.367 1.367 0 0 0-1.367-1.367Zm-7.835-1.075c.22-1.183.614-2.124 1.141-2.72a1.531 1.531 0 0 1 1.114-.502h.053a1.817 1.817 0 0 1 1.816 1.869 1.53 1.53 0 0 1-.506 1.113c-1.047.924-2.822 1.2-3.758 1.28.025-.282.065-.641.14-1.04Zm-5.11-2.69c.341-.34.802-.531 1.284-.532h.053a1.531 1.531 0 0 1 1.114.506c.923 1.046 1.2 2.822 1.28 3.757a10.836 10.836 0 0 1-1.036-.14C9.66 6.837 8.72 6.44 8.124 5.912A1.528 1.528 0 0 1 7.617 4.8a1.821 1.821 0 0 1 .532-1.337Zm-4.438 8.257V8.594a.195.195 0 0 1 .195-.196h8.008v3.516H3.906a.195.195 0 0 1-.195-.195Zm1.562 7.812v-6.445h6.641v6.64H5.47a.195.195 0 0 1-.196-.195Zm14.454 0a.195.195 0 0 1-.196.196h-6.445v-6.641h6.64v6.445Zm1.562-7.812a.195.195 0 0 1-.195.195h-8.008V8.398h8.008a.195.195 0 0 1 .195.196v3.125Z"/></svg>
      </div>
      </div>
      
      `;

          thingTwo.insertAdjacentHTML('beforebegin', checkBoxMarkup);

          // let's do one more thing!

          const checkbox = document.querySelectorAll('.gift-check')[0];
          checkbox.addEventListener('change', changeThing);
      }

      function doThingThree(thingThree) {
          const checkBoxMarkup = `
      
      <div class="checkbox-container">
      <div class="gift-wrap">
      <input class="gift-check" type="checkbox" id="checkbox_3">
      <label for="checkbox_3" class="gift-label">Is this a gift?</label>
      </div
      <div class="image-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none"><path fill="#E00000" d="M21.094 7.227h-4.03c.207-.13.403-.277.586-.438a2.693 2.693 0 0 0 .9-1.953 2.992 2.992 0 0 0-3.072-3.078 2.692 2.692 0 0 0-1.953.9 5.576 5.576 0 0 0-1.025 1.81 5.577 5.577 0 0 0-1.023-1.809 2.692 2.692 0 0 0-1.956-.901 2.991 2.991 0 0 0-3.076 3.077 2.691 2.691 0 0 0 .9 1.953c.184.162.38.308.587.438H3.906A1.367 1.367 0 0 0 2.54 8.594v3.125a1.367 1.367 0 0 0 1.367 1.367h.196v6.445a1.367 1.367 0 0 0 1.367 1.367H19.53a1.367 1.367 0 0 0 1.367-1.367v-6.445h.196a1.367 1.367 0 0 0 1.367-1.367V8.594a1.367 1.367 0 0 0-1.367-1.367Zm-7.835-1.075c.22-1.183.614-2.124 1.141-2.72a1.531 1.531 0 0 1 1.114-.502h.053a1.817 1.817 0 0 1 1.816 1.869 1.53 1.53 0 0 1-.506 1.113c-1.047.924-2.822 1.2-3.758 1.28.025-.282.065-.641.14-1.04Zm-5.11-2.69c.341-.34.802-.531 1.284-.532h.053a1.531 1.531 0 0 1 1.114.506c.923 1.046 1.2 2.822 1.28 3.757a10.836 10.836 0 0 1-1.036-.14C9.66 6.837 8.72 6.44 8.124 5.912A1.528 1.528 0 0 1 7.617 4.8a1.821 1.821 0 0 1 .532-1.337Zm-4.438 8.257V8.594a.195.195 0 0 1 .195-.196h8.008v3.516H3.906a.195.195 0 0 1-.195-.195Zm1.562 7.812v-6.445h6.641v6.64H5.47a.195.195 0 0 1-.196-.195Zm14.454 0a.195.195 0 0 1-.196.196h-6.445v-6.641h6.64v6.445Zm1.562-7.812a.195.195 0 0 1-.195.195h-8.008V8.398h8.008a.195.195 0 0 1 .195.196v3.125Z"/></svg>
      </div>
      </div>
      
      `;

          thingThree.insertAdjacentHTML('beforebegin', checkBoxMarkup);

          let checkboxes = document.querySelectorAll('input[type="checkbox"]');

          for (let i = 0; i < checkboxes.length; i++) {
              checkboxes[i].addEventListener('change', syncBoxes);
          }

          // let's do one more thing!

          const checkbox = document.querySelectorAll('.gift-check')[1];
          checkbox.addEventListener('change', changeThing);
      }

      function changeThing() {
          atcButtons = document.querySelectorAll('.btn-red');
          if (this.checked) {
              atcButtons.forEach(butt => {
                  if (butt.textContent.toLowerCase().includes('add to cart')) {
                      butt.textContent = "Send as Gift?"
                  }
              });
          } else if (!this.checked) {
              atcButtons.forEach(butt => {
                  if (butt.textContent.toLowerCase().includes('send as gift?')) {
                      butt.textContent = "Add To Cart"
                  }
              });
          }

      }

      function syncBoxes(e) {
          let checkboxes = document.querySelectorAll('input[type="checkbox"]');
          if (e.target.checked) {
              checkboxes.forEach(box => {
                  box.checked = true;
              })
          } else {
              checkboxes.forEach(box => {
                  box.checked = false;
              })
          }
      }

      // for PDP page

      // check if the gift checkbox is checked. If it is, stop the usual rebuy slide cart from opening on post and then redirect to gift checkout page

      document.addEventListener('rebuy:cart.add', (event) => {
          console.log('add to cart triggered');
          const giftCheck = document.querySelector('.gift-check');
          const SmartCart = window.Rebuy.SmartCart;
          if (giftCheck.checked) {
              SmartCart.skip_open = true;
              window.location.href = 'https://eatmila.com/a/gs/cart/';
          }
      });

  }

})();
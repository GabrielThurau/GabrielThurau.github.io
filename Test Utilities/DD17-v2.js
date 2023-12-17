
function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
    }
    addStyle(`
    input[type=checkbox]#switch {
        height: 0;
        width: 0;
        visibility: hidden;
        }

        .sub-widget-v2 {
        border-radius: 5px;
        background: #F7ECDD;
        padding: 1rem 1.5rem;
        }
       
        .topmost-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
       
        .toggle-wrap {
          display: flex;
        }
       
        .subscribe-copy {
        color: #57665C;
        text-align: right;
        font-family: Maison Neue;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        }
       
        .sub-steps > li {
        color: #57665C;
        font-family: Maison Neue;
        font-size: 14px;
        font-style: normal;
        line-height: normal;
        margin: 0.2rem 0rem;
        }
       
        .subscribe-copy {
        color: #57665C;
        font-family: Maison Neue;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        }
       
        .final-step, .bold-it {
          font-weight: bold;
        }
       
        .toggle-wrap {
          gap: 0.5rem;
        }
       
        .subscribe-section {
          margin: 0.5rem 0rem;
          color: #57665C;
          font-family: Maison Neue;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
       
        .sub-drop {
            border: 1px solid #57665c;
            max-width: 100%;
            padding: 4px 4px;
            border-radius: 0;
            border: 1px solid #57665c;
            max-width: 100%;
            padding: 4px 20px;
            padding-left: 5px;
            border-radius: 0;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-position: right center;
            background-image: url(//dosedaily.co/cdn/shop/t/132/assets/ico-select.svg);
            background-repeat: no-repeat;
            background-position: right 5px center;
            background-color: transparent;
            background-size: 11px;
            text-overflow: "";
            cursor: pointer;
            color: inherit;
        }
    `);

     const discountID = setInterval(discountCallback, 200);


    async function getCart() {
        const result = await fetch("/cart.json");
   
        if (result.status === 200) {
            return result.json();
        }
        throw new Error(`Failed to get request, Shopify returned ${result.status} ${result.statusText}`);
    }
   
    async function discountCallback() {
   
    let injectionZone = document.querySelector('.order-summary__section--discount');
   
    if (injectionZone) {
      clearInterval(discountID);
      const cart = await getCart();
      checkCart(cart, injectionZone);
    }
    }

    const generateMarkup = (twoOunce, injectionZone, cartItems) => {
        let markup =  
        `
     <div class="sub-widget-v2">
    <div class="text-wrapper">
        <h3 class="prominent-heading">Subscribe to Dose Daily</h3>
    </div>
    <div class="usp-container">
        <div class="image-one">
            <img src="https://cdn.shopify.com/s/files/1/0348/3317/0477/files/free-delivery.svg?v=1702585897" />
            <p class="usp-text">Auto Delivery Every</p>
              ${twoOunce && cartItems[0].variant_id === 34643863208099 
                ? 
            `<select class="rtx-subscription-dropdown sub-drop" name="selling_plan">
                <option value="3166109937">15 days</option>
                <option value="3166142705">30 days</option>
                <option value="3166175473">45 days</option>
                <option value="3166208241">60 days</option>
              </select>`
                : 
                `<span class="twenty-four-days">24 Days</span>`
                }
        </div>
        <div class="image-two">
            <img src="https://cdn.shopify.com/s/files/1/0348/3317/0477/files/no-commitment.svg?v=1702585913" />
            <p class="usp-text">No Commitment</p>
        </div>
    </div>
    <div class="button-container">
        <input type="hidden" id="postId" name="postId" value="" />
        <button class="submit-subscription">Subscribe & Save</button>
    </div>
</div>
         
        `
        injectionZone.insertAdjacentHTML('afterend', markup);
        return markup;
   
    }
   
  // checking just one item for now
 
    function checkCart(cart, injectionZone) {
      let cartItems = cart.items;
      let item = cart.items[0];
      let itemKey = item.key;
      if (cartItems.length < 2 && !item?.selling_plan_allocation ) {
        let VID = item.variant_id;
         let twoOunce = cartItems.find(product => product.variant_id === 34643863208099);
         // multiple values to account for whenever it's the two ounce liver product
         if (twoOunce) {
        generateMarkup(twoOunce, injectionZone, cartItems);
         document.querySelector('.sub-drop').addEventListener("change", (event) => {
         document.querySelector("#postId").value = event.target.value;
        });    
        document.querySelector('.submit-subscription').addEventListener('click', ()=>{
        clearItems(VID, itemKey);
    })
         }
         // only one selling plan ID to account for whenever it's not the two ounce liver product
        else {
        generateMarkup(twoOunce, injectionZone, cartItems);
        document.querySelector('.submit-subscription').addEventListener('click', ()=>{
        clearItems(VID, itemKey);
        })
        }
      }
    }

    // try and combine these two functions into one

    function clearItems(VID, itemKey) {
        console.log(itemKey);
        let updates = {
            'id': itemKey,
            'quantity': 0
        }
        fetch('https://dosedaily.co/' + 'cart/change.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updates)
        })
        .then(response => {
          if (response) {
              setTimeout(() => {
           postItems(VID);
        }, 0);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  }


    function postItems(VID) {
    let sellingPlan = document.querySelector("#postId").value;

            let formData = {
             'items': [{
              'id': VID,
               'selling_plan': sellingPlan,
              'quantity': 1
              }]
            };
            fetch('https://dosedaily.co/' + 'cart/add.js', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            })
            .then(response => {
              if (response) {
              window.location.reload();
              }
            })
            .catch((error) => {
              console.error('Error:', error);
            });
      }
  

    // try and combine these two functions into one



    const request1 = fetch('https://example.com/endpoint1').then(response => response.json());
    const request2 = fetch('https://example.com/endpoint2').then(response => response.json());
    Promise.all([request1, request2])
  .then(([data1, data2]) => {
    console.log(data1, data2);
  })
  .catch(error => {
    console.error(error);
  });
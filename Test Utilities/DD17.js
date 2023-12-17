
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
        
        label.sub-toggle {
        cursor: pointer;
        text-indent: -9999px;
        width: 36px;
        background: #A09E97;
        display: block;
        border-radius: 100px;
        position: relative;
        }
        
        label.sub-toggle:after {
        content: '';
        position: absolute;
        top: 1.5px;
        left: 1.5px;
        width: 15px;
        height: 15px;
        background: #fff;
        border-radius: 90px;
        transition: 0.2s;
        }
        
        input:checked + label.sub-toggle {
        background: #686069;
        }
        
        input:checked + label.sub-toggle:after {
        left: calc(100% - 1px);
        transform: translateX(-100%);
        }
        
        label.sub-toggle:active:after {
        width: 24px;
        }
        
        .topmost-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .toggle-wrap {
          display: flex;
        }
        
        .separate-these {
          display: flex;
          align-items: center;
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
          margin: 1rem 0rem;
        }
        
        ul.sub-steps {
          list-style-type: disc;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          padding-inline-start: 40px;
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
        <div class="sub-widget-v1">
        <div class="topmost-wrapper">
          <div class="separate-these">
            <div class="svg-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0348/3317/0477/files/dose-sub-logo.svg?v=1702483663"
              />
            </div>
            <div class="toggle-wrap">
              <input type="checkbox" id="switch" /><label
                class="sub-toggle"
                for="switch"
                >Toggle</label
              >
            </div>
          </div>
          <div class="copy-container">
          </div>
        </div>
        <div class="text-section">
          <p class="subscribe-section">
            Subscribe to Dose for Your Liver and save <strong class="bold-it">15%</strong> on this order!
          </p>
          <ul class="sub-steps">
          ${twoOunce && cartItems[0].variant_id === 34643863208099
            || cartItems[0].variant_id !== 34643863208099 
            && cartItems[0].handle.indexOf('liver') > -1
            && cartItems[0]?.selling_plan_allocation 
            ?
            `<li class="step">No Commitment</li>
            <li class="step">Cancel Anytime</li>
            <li class="step">Free Shipping on All Orders & Subscriptions</li>
            <li class="step final-step">
              Subscribe & Save! Delivery Every
              <input type="hidden" id="postId" name="postId" value="3166109937" />
              <select class="rtx-subscription-dropdown sub-drop" name="selling_plan">
                <option value="3166109937">15 days</option>
                <option value="3166142705">30 days</option>
                <option value="3166175473">45 days</option>
                <option value="3166208241">60 days</option>
              </select>
            </li>`
            : 
            ` <li class="step">Auto Delivery Every 24 Days!</li>
            <li class="step">No Commitment</li>
            <li class="step">Cancel Anytime</li>
            <li class="step">Free Shipping on All Orders & Subscriptions</li>
            <input type="hidden" id="postId" name="postId" value="3169681649" />`
        }
          </ul>
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
        document.querySelector('.sub-toggle').addEventListener('click', ()=>{
        clearItems(VID, itemKey);
    })
         }
         // only one selling plan ID to account for whenever it's not the two ounce liver product
        else {
        generateMarkup(twoOunce, injectionZone, cartItems);
        document.querySelector('.sub-toggle').addEventListener('click', ()=>{
        clearItems(VID, itemKey);
        })
        }
      }
    }

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





(function(){



    function addStyle(styleString) {
        const style = document.createElement('style');
        style.textContent = styleString;
        document.head.append(style);
        }
        addStyle(`
    
        `);
      

    const title = document.querySelector(".prod-body h2");
    const titleContent = title.innerHTML;
    const ratings = document.querySelector(".rating-star-count");
    const ratingsContent = ratings.innerHTML;
    const pricing = document.querySelector(".price_area span.r_price");
    const pricingContent = pricing.innerHTML;
    const stickyCart = document.createElement("div");
    stickyCart.classList.add("stickyCart");
    const prDetail = document.createElement("div");
    prDetail.classList.add("prDetail");
    const h5 = document.createElement("h5");
    h5.innerHTML = titleContent;
    const ratingsDiv = document.createElement("div");
    ratingsDiv.classList.add("ratings");
    ratingsDiv.innerHTML = ratingsContent;
    const addToCartLink = document.createElement("a");
    addToCartLink.href = "javascript:;";
    addToCartLink.innerHTML = "Add To Cart | <span> " + pricingContent + " </span>";
    prDetail.appendChild(h5);
    prDetail.appendChild(ratingsDiv);
    stickyCart.appendChild(prDetail);
    stickyCart.appendChild(addToCartLink);
    const selectVariantsDiv = document.createElement("div");
    selectVariantsDiv.classList.add("selectVariants");
    const labelElement = document.createElement("label");
    labelElement.textContent = "Select # of Kids:";
    const dropSelectorDiv = document.createElement("div");
    dropSelectorDiv.classList.add("dropSelector");
    const spanElement = document.createElement("span");
    spanElement.textContent = "1 Kid";
    const dropNavDiv = document.createElement("div");
    dropNavDiv.classList.add("dropNav");
    const numberOfKids = ["1 Kid", "2 Kids", "3 Kids", "4 Kids", "5 Kids"];
    numberOfKids.forEach((kid) => {
    const kidSpan = document.createElement("span");
    kidSpan.textContent = kid;
    dropNavDiv.appendChild(kidSpan);
    });
    dropSelectorDiv.appendChild(spanElement);
    dropSelectorDiv.appendChild(dropNavDiv);
    selectVariantsDiv.appendChild(labelElement);
    selectVariantsDiv.appendChild(dropSelectorDiv);
    stickyCart.appendChild(prDetail);
    stickyCart.appendChild(selectVariantsDiv);
    stickyCart.appendChild(addToCartLink);
    document.body.appendChild(stickyCart);
    const optionListSpans = document.querySelectorAll(".optionList span");
    function updatePrice() {
    const selectElement = document.querySelector('.form-control');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    // Extract numerical value from the price attribute (assuming the format is "$X")
    const priceString = selectedOption.getAttribute('data-price');
    const price = parseFloat(priceString.replace('$', ''));
    const item = selectedOption.getAttribute('data-item');
    // Get the value of the selected radio button
    const radioButtons = document.getElementsByName('bundle');
    let multiplier = 1;
    for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked && radioButtons[i].value === 'bundle') {
    multiplier = 2;
    break;
    }
    }
    // Perform the calculation and format the result with the dollar sign
    const totalPrice = price * item * multiplier;
    const formattedTotalPrice = '$' + totalPrice.toFixed(2); // Assuming you want two decimal places
    // Assuming addToCartLink is already defined
    addToCartLink.querySelector('span').innerHTML = formattedTotalPrice;
    }
    // Add event listener to .form-control for change event
    document.querySelector('.form-control').addEventListener('change', updatePrice);
    const radioButtons = document.getElementsByName('bundle');
    for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', updatePrice);
    }
    var buyNowButton = $('#buy_now_new_button');
    var stickyCartElement = $('.stickyCart');
    $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    var buttonOffset = buyNowButton.offset().top;
    if (scrollPosition >= buttonOffset) {
    stickyCartElement.addClass('active');
    } else {
    stickyCartElement.removeClass('active');
    }
    });
    document.querySelector('.stickyCart > a').addEventListener('click', function () {
    document.getElementById('buy_now_new_button').click();
    });
    function addClassToDropNav() {
    const dropNav = document.querySelector(".dropNav");
    dropNav.classList.add("open"); // Replace "your-class" with the desired class name
    }
    // Function to handle click on .dropSelector > span
    function handleDropSelectorClick(event) {
    const dropSelector = document.querySelector(".dropSelector");
    const dropNav = document.querySelector(".dropNav");
    // Toggle the class in dropNav
    dropNav.classList.toggle("open"); // Replace "your-class" with the desired class name
    // Set the text content of .dropSelector > span
    dropSelector.querySelector("span").textContent = event.target.textContent;
    }
    // Function to handle click on .dropNav > span
    function handleDropNavClick(event) {
    const dropSelector = document.querySelector(".dropSelector");
    const selectBox = document.querySelector(".optionList select");
    // Set the text content of .dropSelector > span
    dropSelector.querySelector("span").textContent = event.target.textContent;
    // Remove class from .dropNav
    const dropNav = document.querySelector(".dropNav");
    dropNav.classList.remove("open"); // Replace "your-class" with the desired class name
    // Select the corresponding option in the select box
    const index = Array.from(dropNav.children).indexOf(event.target);
    selectBox.selectedIndex = index;
    console.log('changed');
    selectBox.dispatchEvent(new Event('change', { bubbles: true }));
    updatePrice();
    }
    // Add event listener to handle click on .dropSelector > span
    document.querySelector(".dropSelector > span").addEventListener("click", handleDropSelectorClick);
    // Add event listener to handle click on .dropNav > span
    document.querySelector(".dropNav").addEventListener("click", function (event) {
    if (event.target.tagName === "SPAN") {
    handleDropNavClick(event);
    }
    });
    function updateDropSelector(event) {
    console.log(event);
    const dropSelector = document.querySelector(".dropSelector");
    const selectBox = document.querySelector(".optionList select");
    // Get the text content of the selected option
    const optionText = selectBox.options[selectBox.selectedIndex].textContent;
    // Extract the first 7 characters
    const extractedText = optionText.substring(0, 7);
    // Set the text content of .dropSelector > span
    dropSelector.querySelector("span").textContent = extractedText;
    // Call the function to update the price
    updatePrice();
    }
    // Add event listener to .optionList select for change event
    document.querySelector('.optionList select').addEventListener('change', updateDropSelector);
    })();
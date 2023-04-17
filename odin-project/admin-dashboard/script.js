// use classes for deleting/adding cards to dashboard
// also update local storage to keep dashboard the same?

class Card {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
    renderCard() {
        const createdCard = document.createElement('div');
        createdCard.classList.add('card');
        const markup = 
         `
         <h4 class="card-title">${this.title}</h4>
         <div class="text">${this.description}
         </div>
         <div class="delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                 <title>delete</title>
                 <path
                     d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
             </svg></div>`;

     createdCard.innerHTML = markup;
     document.querySelector('.cards').appendChild(createdCard);
    }
}


let cardN = new Card("Software Sprint", "this is for a software sprint that needs to be shipped ASAP");

cardN.renderCard();
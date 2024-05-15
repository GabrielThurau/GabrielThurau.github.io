


// ternary conditional markup inside map 

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);
//const map2 = array1.map((x) => x * 2 === 2 ? '4' : x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

const map2 = array1.map((x) => x * 2 === 2 ? '4' : x * 2);
console.log(map2)

[
    "4",
    8,
    18,
    32
]

cart = cart.map(product => product.id === pid ? { ...product, qty } : product)
 cart.forEach(product => product.id === pid ? product.qty = qty : product)




let markup = 
`
<mega-menu id=${e.target.id} class="mega-menu">
   <header class="plg49-header">
      <h3 class="category-title">${categoryTitle}</h3>
      <nav class="plg49-nav">
         <ul class="menu-list">
         ${menuLinks.map((v) => v.parentElement.parentElement.id.includes('Sub') 
         ?
         `
         <li>
            <a> ${v.textContent} </a>
         </li>
         `
        : 
        `
        <li>
           <a> ${v.textContent} </a>
           <ul>
           <li>${v.textContent}</li>
           </ul>
        </li>
        `)
         .join('')}
         <ul>
      </nav>
   </header>
</mega-menu>

`


const myOptsArr = [
    {
        title: 'Fruit',
        values: ['apple','pear','grapes','beer']
    },
    {
        title: 'Animals',
        values: ['apple','dog','mouse','cat']
    },
    {
        title: 'Sports'
    },
    // more here
];

let myOpts = `
<option value="">Select Option</option>
${myOptsArr.map(item => `
    <optgroup label="${item.title}">${
    item.values.map(itemValue => `
            <option value="${itemValue}">${itemValue}</option>
        `).join('')}
    </optgroup>;
`).join('')}
`;

document.getElementById('mySelect').innerHTML = myOpts;




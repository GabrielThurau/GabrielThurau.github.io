/*!
 * Sanitize and encode all HTML in a user-submitted string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
const sanitizeHTML = (str) => {
	const temp = document.createElement('div');
    temp.classList.add('sanitized-and-clean');
	temp.innerText = str;
    temp.innerHTML = str;
    document.body.appendChild(temp);
	//return temp.innerHTML;
};



const markup = `
<div class="test-div">
    <p class="sanitized-text">This text is sanitized - even though it's using the sketchy innerHTML method</p>
</div>
`

sanitizeHTML(markup);




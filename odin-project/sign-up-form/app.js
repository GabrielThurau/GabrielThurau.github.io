let element = document.querySelector('.pw-holder');

element.addEventListener('keyup', (e) => {
    let passwordVal = document.querySelector('#pw').value;
    let confirmVal = document.querySelector('#confirm-pw').value;
    let pwValidate = document.querySelectorAll('.password-validate');

    if (passwordVal === confirmVal) {
        pwValidate.forEach(element => {
            element.textContent = 'passwords match';
        });
    }
    else {
        pwValidate.forEach(element => {
            element.textContent = 'passwords do not match';
        });
    }
});


const regularObject = {
    email: 
}
const checkbox = document.querySelector('.checkbox');
const togglebtn = document.querySelector('.toggle-btn');
const btn = document.querySelector('.ball');
const price_one = document.querySelector('.price1');
const price_two = document.querySelector('.price2');
const price_three = document.querySelector('.price3');


togglebtn.addEventListener('change', () => {
    if (checkbox.checked === true) {
        price_one.innerText = '$19.99';
        price_two.innerText = '$24.99';
        price_three.innerText = '$39.99';
    }

    else {
        price_one.innerText = '$199.99';
        price_two.innerText = '$249.99';
        price_three.innerText = '$399.99';
    }

}

);




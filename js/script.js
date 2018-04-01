let firstProduct = document.querySelector("#firstProduct");
let secondProduct = document.querySelector("#secondProduct");
let thirdProduct = document.querySelector("#thirdProduct");
let btn = document.querySelector("#submit-btn");
let result = document.querySelector("#result");
let products = [];

btn.addEventListener("click", function (event) {
    event.preventDefault;
    let product = firstProduct.value;
    let productTwo = secondProduct.value;
    let productThree = thirdProduct.value;

    products = [product, productTwo, productThree];
    console.log(products);
    result.textContent = "randomizing.......";
    setTimeout(function () {
        displayProduct(products);
    }, 5000);



});

function displayProduct(productArray) {
    let randomizer = Math.floor((Math.random() * products.length) + 0);
    let finalResult = products[randomizer];
    if (finalResult == "") {
        result.textContent = "Woops try again! Empty Space was chosen.";
    } else {

        result.textContent = finalResult;
    }
}



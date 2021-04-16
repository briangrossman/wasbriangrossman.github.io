// default to product 1
let currProduct = 1;
let numProducts = 3;

function previousProduct() {
    currProduct--;
    if (currProduct === 0) {
        currProduct = numProducts;
    }
    displayCurrProduct();
}

function nextProduct() {
    currProduct++;
    if (currProduct > numProducts) {
        currProduct = 1;
    }
    displayCurrProduct();
}

function displayCurrProduct() {
    for(i = 1; i <= numProducts; i++) {
        if (i === currProduct) {
            document.querySelector("#product" + i).style.display = 'block';
        } else {
            document.querySelector("#product" + i).style.display = 'none';
        }
    }
}



document.querySelector("#previous_product").addEventListener("click", previousProduct);
document.querySelector("#next_product").addEventListener("click", nextProduct);

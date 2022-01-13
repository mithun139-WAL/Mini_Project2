let Products_Cart = [];
window.addEventListener('load', function () {
    if (localStorage.getItem("Products")) {
        let cart2 = JSON.parse(localStorage.getItem("Products"));
        // for (let value of Object.values(Products_Cart)) {
        //     let tag = document.querySelector("#value.price");
        //     tag.textContent = "Remove from Cart";
        // }
        document.querySelector("#cart-badge").textContent = cart2.length;
    }
});

function addtoCart(button) {
    if (localStorage.getItem("Products")) {
        Products_Cart = JSON.parse(localStorage.getItem("Products"));
        if (button.textContent === "Add to Cart") {
            let product = {
                name: button.dataset.name,
                price: button.dataset.cost
            }
            Products_Cart.push(product);
            localStorage.setItem("Products", JSON.stringify(Products_Cart));
            button.textContent = "Remove from Cart";
            document.querySelector("#cart-badge").textContent = Products_Cart.length;
        }
        else {
            let arr_2 = [];
            for (let value of Object.values(Products_Cart)) {
                if (value.name !== button.dataset.name) {
                    arr_2.push(value);
                }
            }
            let arrToJson = JSON.stringify(arr_2)
            localStorage.setItem("Products", arrToJson);
            button.textContent = "Add to Cart";
            document.querySelector("#cart-badge").textContent = arr_2.length;
        }
    }
    else {
        let product = {
            name: button.dataset.name,
            price: button.dataset.cost
        }
        Products_Cart.push(product)
        localStorage.setItem("Products", JSON.stringify(Products_Cart));
        button.textContent = "Remove from Cart";
        document.querySelector("#cart-badge").textContent = Products_Cart.length;
    }
}
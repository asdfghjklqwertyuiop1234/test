let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    totalPrice = 0;

    cart.forEach(cartItem => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - $${cartItem.price}`;
        cartList.appendChild(li);
        totalPrice += cartItem.price;
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}
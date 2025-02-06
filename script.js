document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        { name: 'Pizza', price: 10 },
        { name: 'Burger', price: 8 },
        { name: 'Pasta', price: 12 },
        { name: 'Salad', price: 6 }
    ];

    const menuList = document.getElementById('menu-items');
    const orderList = document.getElementById('order-items');
    const placeOrderButton = document.getElementById('place-order');

    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        const button = document.createElement('button');
        button.textContent = 'Add to Order';
        button.addEventListener('click', () => addToOrder(item));
        li.appendChild(button);
        menuList.appendChild(li);
    });

    function addToOrder(item) {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        orderList.appendChild(li);
    }

    placeOrderButton.addEventListener('click', () => {
        if (orderList.children.length > 0) {
            alert('Order placed successfully!');
            orderList.innerHTML = '';
        } else {
            alert('Please add items to your order before placing it.');
        }
    });
});
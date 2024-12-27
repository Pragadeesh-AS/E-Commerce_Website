// Cart storage
const cart = [];

// Add product to cart
function addToCart(productName, price) {
    const product = { name: productName, price: parseFloat(price) };
    cart.push(product);
    alert(`${productName} added to cart!`);
    updateCartView();
}

// Update the cart view
function updateCartView() {
    const cartContainer = document.getElementById('cart-container');
    const emptyCartMessage = document.getElementById('empty-cart');
    cartContainer.innerHTML = ''; // Clear previous items

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
    } else {
        emptyCartMessage.style.display = 'none';

        let total = 0;
        cart.forEach((item, index) => {
            total += item.price;
            const productRow = document.createElement('div');
            productRow.className = 'cart-item';
            productRow.style.marginBottom = '10px';
            productRow.innerHTML = `
                <span>${item.name} - ₹${item.price.toFixed(2)}</span>
                <button style="margin-left: 10px; background-color: #4a4a6d; color: white; border: none; border-radius: 4px; padding: 5px;" onclick="removeFromCart(${index})">Remove</button>
            `;
            cartContainer.appendChild(productRow);
        });

        const totalRow = document.createElement('div');
        totalRow.className = 'cart-total';
        totalRow.style.marginTop = '15px';
        totalRow.innerHTML = `<strong>Total: ₹${total.toFixed(2)}</strong>`;
        cartContainer.appendChild(totalRow);
    }
}

// Remove product from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartView();
}

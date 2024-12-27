// Cart array to store selected items
let cart = [];

// Function to add item to cart
function addToCart(itemName, itemPrice) {
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    renderCart();
    alert(`${itemName} has been added to your cart.`);
    console.log("Current Cart:", cart); // Debugging log
}

// Function to remove an item from the cart
function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    renderCart();
}

// Function to render the cart items in the table
function renderCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td><button class="btn btn-danger btn-sm" onclick="removeFromCart('${item.name}')">Remove</button></td>
        `;
        cartItems.appendChild(row);
    });
}

// Function to handle Buy button click
function buyNow(itemName, itemPrice) {
    alert(`Redirecting to payment page for ${itemName}.`);
    window.location.href = "payment.html"; // Update to your payment page URL
}

// Attach event listeners to menu items dynamically
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const itemName = card.querySelector(".card-text").innerText.split("\n")[0];
        const itemPrice = card.querySelector(".card-text").innerText.split("\n")[1];

        const addToCartButton = card.querySelector(".btn-group .btn-outline-secondary:first-child");
        const buyButton = card.querySelector(".btn-group .btn-outline-secondary:last-child");

        addToCartButton.addEventListener("click", () => addToCart(itemName, itemPrice));
        buyButton.addEventListener("click", () => buyNow(itemName, itemPrice));
    });
});

// Checkout button functionality
document.addEventListener("DOMContentLoaded", () => {
    const checkoutButton = document.getElementById("checkout-button");
    if (checkoutButton) {
        checkoutButton.addEventListener("click", () => {
            if (cart.length === 0) {
                alert("Your cart is empty!");
            } else {
                alert("Proceeding to checkout...");
                window.location.href = "payment.html"; // Redirect to payment page
            }
        });
    }
});

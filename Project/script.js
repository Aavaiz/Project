// Toggle mobile menu
document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Check if there's any saved cart in localStorage and load it, otherwise start with an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to save the cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}



function toggleCategory(category) {
    // Hide all category sections
    document.querySelectorAll('.inset-0').forEach((section) => {
        section.style.display = 'none';
    });
    
    // Show the selected category
    document.getElementById(category).style.display = 'flex';

    // Scroll to the selected category
    document.getElementById(category).scrollIntoView({ behavior: 'smooth' });
}

function showAllCategories() {
    // Hide all category sections
    document.querySelectorAll('.inset-0').forEach((section) => {
        section.style.display = 'none';
    });
    
    // Show the All Dresses section
    const dressesSection = document.getElementById('dresses');
    dressesSection.style.display = 'block';

    // Scroll to the All Dresses section
    dressesSection.scrollIntoView({ behavior: 'smooth' });
}


// Initialize an array to hold the cart items
let cartItems = [];

// Function to add items to the cart
function addToCart(name, image, price) {
// Create a cart item object
const cartItem = { name, image, price };

// Check if the item is already in the cart
const existingItem = cartItems.find(item => item.name === name);
if (!existingItem) {
    // Add the item to the cartItems array
    cartItems.push(cartItem);
} else {
    alert(`${name} is already in your cart.`);
}

// Update the cart display
updateCartDisplay();
}


// Function to remove an item from the cart
function removeFromCart(name) {
    // Filter out the item that matches the name
    cartItems = cartItems.filter(item => item.name !== name);

    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    
    // Clear the current cart display
    cartItemsContainer.innerHTML = '';
    
    // Loop through the cartItems array and create HTML for each item
    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'bg-white p-5 rounded-lg shadow-md text-center';
        itemElement.innerHTML = `
            <img src="img/${item.image}" alt="${item.name}" class="w-full h-auto object-cover rounded-lg mb-4">
            <h4 class="text-xl font-bold">${item.name}</h4>
            <p class="text-lg text-gray-700">Rent: ${item.price} per day</p>
            <button onclick="removeFromCart('${item.name}')" class="bg-red-500 text-white py-2 px-4 rounded">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}

// Function to show all categories (for the back button)
function showAllCategories() {
    document.getElementById('lehenga').style.display = 'none';
    document.getElementById('frock').style.display = 'none';
    document.getElementById('traditional').style.display = 'none';
}

// Event listener for mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

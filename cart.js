// Get references to the necessary elements
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
const cartBookCountElement = document.getElementById('cart-book-count');
const cartTotalBillingElement = document.getElementById('cart-total-billing');
const checkoutButton = document.getElementById('checkout-button');

// Initialize the cart data
let cartItems = [];
let totalBooks = 0;
let totalBilling = 0;

// Function to add an item to the cart
function addToCart(bookName, price) {
  // Create a new cart item object
  const item = {
    bookName,
    price
  };

  // Add the item to the cart
  cartItems.push(item);

  // Update the cart display
  displayCartItems();
  calculateTotalBilling();
}

// Function to display the cart items
function displayCartItems() {
  // Clear the previous cart items
  cartItemsElement.innerHTML = '';

  // Loop through the cart items and create the HTML elements
  cartItems.forEach(item => {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');
    cartItemElement.innerHTML = `
      <p>${item.bookName}</p>
      <p>$${item.price}</p>
    `;
    cartItemsElement.appendChild(cartItemElement);
  });
}

// Function to calculate the total billing
function calculateTotalBilling() {
  totalBooks = cartItems.length;
  totalBilling = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Update the total book count and total billing display
  cartBookCountElement.textContent = totalBooks;
  cartTotalBillingElement.textContent = totalBilling.toFixed(2);
}

// Event listener for the "Add to Cart" buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the book details from the clicked button's parent element
    const bookElement = button.parentNode;
    const bookName = bookElement.querySelector('h4').textContent;
    const price = parseFloat(bookElement.querySelector('p.price').textContent);

    // Add the book to the cart
    addToCart(bookName, price);
  });
});

// Event listener for the checkout button
checkoutButton.addEventListener('click', () => {
  // Perform the checkout process (e.g., redirect to payment page, submit the form, etc.)
  // Replace this with your own logic
  console.log('Checkout clicked');
});

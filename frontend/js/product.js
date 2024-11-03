// Sample products array with your original examples
const products = [
    { id: 1, name: "Used iClicker", price: "$30", image: "images/iclicker.jpg", description: "Gently used, great for chemistry courses.", category: "electronics" },
    { id: 2, name: "Used Microwave", price: "$50", image: "frontend/images/usedmicrowave.jpg", description: "In great condition.", category: "dorm essentials" },
    { id: 3, name: "Used Textbook", price: "$15", image: "frontend/images/usedtextbook.jpg", description: "Great explanations, Used for MATH 200.", category: "books" },
    // Add more products as needed
];

// Element to display the product list
const productList = document.getElementById("productList");

// Render products
function displayProducts() {
    productList.innerHTML = ""; // Clear previous products to avoid duplicates
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.setAttribute("data-category", product.category); // Add category attribute for filtering
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="viewProduct(${product.id})">View Details</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Initial call to display products
displayProducts();

// Redirect to product detail page with selected product ID
function viewProduct(id) {
    localStorage.setItem("productId", id); // Store selected product ID
    window.location.href = "product-detail.html"; // Ensure this path is correct
}

// Elements for displaying product details
const productDetails = document.getElementById("productDetails");
const productId = localStorage.getItem("productId"); // Retrieve selected product ID

function displayProductDetails() {
    const product = products.find(p => p.id == productId); // Use '==' to handle string vs. number comparison
    if (product) {
        productDetails.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: ${product.description}</p>
            <button id="contactSeller">Contact Seller</button>
        `;
    } else {
        productDetails.innerHTML = "<p>Product not found.</p>";
    }
}

// Call to display product details
displayProductDetails();

// Contact Seller Button event listener
document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById("contactSeller");
    if (contactButton) {
        contactButton.addEventListener("click", function() {
            alert("Contact the seller at collegeemail@example.com"); // Replace with dynamic contact info
        });
    }
});

// Filter products by category
function filterProducts(category) {
    const products = document.querySelectorAll('.product'); // Get all product elements
    
    products.forEach((product) => {
        // Show product if 'all' is selected or if the product category matches the selected category
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block'; // Show product
        } else {
            product.style.display = 'none'; // Hide product
        }
    });
}

// Example usage of filterProducts
// Call filterProducts('books') or filterProducts('electronics') based on user selection

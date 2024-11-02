const products = [
    { id: 1, name: "Calculus Textbook", price: "$30", image: "images/book.jpg", description: "Great condition." },
    { id: 2, name: "Desk Lamp", price: "$15", image: "images/lamp.jpg", description: "Perfect for dorm rooms." },
    // More products
];

const productList = document.getElementById("productList");

// Render products
function displayProducts() {
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="viewProduct(${product.id})">View Details</button>
        `;
        productList.appendChild(productDiv);
    });
}

displayProducts();

// Redirect to product detail page with selected product ID
function viewProduct(id) {
    localStorage.setItem("productId", id); // Store selected product ID
    window.location.href = "product-detail.html";
}

const productDetails = document.getElementById("productDetails");
const productId = localStorage.getItem("productId"); // Retrieve selected product ID

function displayProductDetails() {
    const product = products.find(p => p.id == productId);
    if (product) {
        productDetails.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: ${product.description}</p>
        `;
    } else {
        productDetails.innerHTML = "<p>Product not found.</p>";
    }
}

displayProductDetails();

// Contact Seller Button
document.getElementById("contactSeller").addEventListener("click", function() {
    alert("Contact the seller at collegeemail@example.com"); // Replace with dynamic contact info
});


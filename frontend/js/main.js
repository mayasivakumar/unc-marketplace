// Search functionality
document.getElementById("searchButton").addEventListener("click", function() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const productName = product.querySelector("h3").textContent.toLowerCase();
        // Show the product if it matches the search term
        product.style.display = productName.includes(searchTerm) ? "block" : "none";
    });
});

// Category filtering functionality
document.querySelectorAll('.category').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        filterProducts(category);
    });
});

// Function to filter products based on category
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

// Cart functionality
const cart = [];
const cartCountElement = document.getElementById("myCartButton");

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (event) => {
        const productId = event.target.getAttribute("data-product-id");
        const product = findProductById(productId);

        if (product) {
            cart.push(product); // Add product to cart
            alert(`${product.name} has been added to your cart!`);
            updateCartCount();
        }
    });
});

function updateCartCount() {
    cartCountElement.textContent = `My Cart (${cart.length})`; // Update cart count
}

// Sample product data
const products = [
    { id: 1, name: "Used iClicker", price: "$30", image: "images/iclicker.jpg" },
    { id: 2, name: "Used Microwave", price: "$50", image: "images/usedmicrowave.jpg" },
    { id: 3, name: "Used Textbook", price: "$15", image: "images/usedtextbook.jpg" }
];

// Function to find a product by its ID
function findProductById(id) {
    return products.find(product => product.id == id);
}

// Modal functionality for New Listing
document.getElementById("newListingButton").onclick = function() {
    document.getElementById("newListingModal").style.display = "block";
}

document.querySelector(".close").onclick = function() {
    document.getElementById("newListingModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("newListingModal")) {
        document.getElementById("newListingModal").style.display = "none";
    }
}


document.getElementById("newListingButton").onclick = function() {
    document.getElementById("newListingModal").style.display = "block";
}

document.querySelector(".close").onclick = function() {
    document.getElementById("newListingModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("newListingModal")) {
        document.getElementById("newListingModal").style.display = "none";
    }
}

// productDetail.js
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("productId");

    const productDetails = {
        "1": { 
            title: "Used iClicker", 
            price: "$30", 
            image: "images/iclicker.jpg", 
            description: "Gently used, great for chemistry courses." 
        },
        "2": { 
            title: "Used Microwave", 
            price: "$50", 
            image: "images/usedmicrowave.jpg", 
            description: "In great condition." 
        },
        "3": { 
            title: "Used Textbook", 
            price: "$15", 
            image: "images/usedtextbook.jpg", 
            description: "Great explanations, used for MATH 200." 
        }
    };

    const product = productDetails[productId];
    const productDetailsElement = document.getElementById("productDetails");

    if (product) {
        productDetailsElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="responsive-image">
            <h2>${product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: ${product.description}</p>
            <button id="contactSeller">Contact Seller</button>
        `;

        // Add event listener for the contact seller button
        document.getElementById("contactSeller").addEventListener("click", () => {
            alert("Contact the seller at collegeemail@example.com"); // Replace with dynamic contact info
        });
    } else {
        productDetailsElement.innerHTML = "<p>Product not found.</p>";
    }
});

document.getElementById("searchButton").addEventListener("click", function() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    console.log("Search term:", searchTerm);

    // In a real project, you would filter the displayed products here
    // e.g., only display products matching the search term
});


document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    const email = document.getElementById("email").value;

    // Validate that the email is a school email
    if (!email.endsWith("@school.edu")) {
        document.getElementById("message").textContent = "Please use a school email.";
        return;
    }

    try {
        // Send email to server
        const response = await fetch("/send-verification", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        });

        const result = await response.json();
        if (result.success) {
            document.getElementById("message").textContent = "Verification email sent!";
        } else {
            document.getElementById("message").textContent = result.error;
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("message").textContent = "Failed to send verification email.";
    }
});

const isVerified = localStorage.getItem("isVerified");


document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const fileInput = document.getElementById("imageInput");
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.querySelector(".responsive-image");
            imgElement.src = e.target.result; // Set the image source to the uploaded file
        };
        reader.readAsDataURL(file);
    }
});



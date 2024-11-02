// Function to load items from the back end
async function loadItems() {
    try {
        // Send GET request to the Flask back end to fetch items
        const response = await fetch('/api/items');
        const items = await response.json();

        // Get the list element from the HTML
        const itemsList = document.getElementById('items-list');
        itemsList.innerHTML = ''; // Clear any existing items

        // Loop through items and add each one to the HTML list
        items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${item.name}</strong>: $${item.price} - ${item.description}`;
            itemsList.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading items:', error);
    }
}

// Function to add a new item
async function addItem(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get values from the form
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;

    // Prepare the data to be sent to the back end
    const itemData = {
        name: name,
        price: parseFloat(price),
        description: description
    };

    try {
        // Send POST request to the Flask back end to add a new item
        const response = await fetch('/api/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemData)
        });

        if (response.ok) {
            // Reload items to show the newly added item
            loadItems();
        } else {
            console.error('Error adding item:', response.status);
        }
    } catch (error) {
        console.error('Error adding item:', error);
    }
}

// Load items when the page loads
window.onload = loadItems;

// Attach an event listener to the form to handle adding a new item
const addItemForm = document.getElementById('add-item-form');
addItemForm.addEventListener('submit', addItem);
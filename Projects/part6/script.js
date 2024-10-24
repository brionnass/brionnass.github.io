// Fetch products data from products.json
async function fetchSunscreens() {
    try {
        const response = await fetch('products.json'); // Fetch the JSON file
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const sunscreens = await response.json();
        return sunscreens;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// Display the product list (for sunscreens.html)
async function displaySunscreens() {
    const sunscreens = await fetchSunscreens();
    const container = document.getElementById('sunscreen-products'); // Get the container div

    if (sunscreens && container) {
        sunscreens.forEach(sunscreen => {
            // Create a div for each product item
            const productDiv = document.createElement('div');
            productDiv.className = 'product-item';

            // Create an image element
            const img = document.createElement('img');
            img.src = sunscreen.img_name; // Set image source
            img.alt = sunscreen.name; // Set alt text

            // Create a heading for the product name
            const name = document.createElement('h3');
            name.innerText = sunscreen.name; // Set the product name

            // Create a paragraph for the SPF and description
            const description = document.createElement('p');
            description.innerText = `${sunscreen.spf} - ${sunscreen.description}`; // Set SPF and description

            // Create a "Learn More" button
            const productButton = document.createElement('a');
            productButton.href = `product-details.html?id=${sunscreen._id}`; // Link to product detail page with ID
            productButton.className = 'product-button';
            productButton.innerText = 'Learn More';

            // Append elements to the productDiv
            productDiv.appendChild(img);
            productDiv.appendChild(name);
            productDiv.appendChild(description);
            productDiv.appendChild(productButton);

            // Append the productDiv to the container
            container.appendChild(productDiv);
        });
    } else if (container) {
        container.innerText = 'No products available.'; // Display message if no products
    }
}

// Get the product ID from the URL (for product-details.html)
function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id'); // Get the 'id' from the query string
}

// Display the product details (for product-details.html)
async function displayProductDetails() {
    const productId = getProductIdFromURL();
    if (!productId) {
        document.getElementById('product-details').innerText = 'No product found';
        return;
    }

    const sunscreens = await fetchSunscreens();
    const product = sunscreens.find(sunscreen => sunscreen._id == productId);

    if (product) {
        const container = document.getElementById('product-details');

        const img = document.createElement('img');
        img.src = product.img_name;
        img.alt = product.name;

        const name = document.createElement('h2');
        name.innerText = product.name;

        const description = document.createElement('p');
        description.innerText = product.description;

        const spf = document.createElement('p');
        spf.innerHTML = `<strong>SPF:</strong> ${product.spf}`;

        const price = document.createElement('p');
        price.innerHTML = `<strong>Price:</strong> ${product.price}`;

        const featuresList = document.createElement('ul');
        product.features.forEach(feature => {
            const listItem = document.createElement('li');
            listItem.innerText = feature;
            featuresList.appendChild(listItem);
        });

        // Append elements to the container
        container.appendChild(img);
        container.appendChild(name);
        container.appendChild(description);
        container.appendChild(spf);
        container.appendChild(price);
        container.appendChild(featuresList);
    } else {
        document.getElementById('product-details').innerText = 'Product not found';
    }
}

// Check which page is loaded and call the appropriate function
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('sunscreen-products')) {
        // If we're on the product list page
        displaySunscreens();
    } else if (document.getElementById('product-details')) {
        // If we're on the product details page
        displayProductDetails();
    }
});

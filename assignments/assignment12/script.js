async function fetchIceCreams() {
    const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
    const iceCreams = await response.json();
    return iceCreams;
}

async function displayIceCreams() {
    const iceCreams = await fetchIceCreams();
    const container = document.getElementById('ice-cream-container');
    
    iceCreams.forEach(iceCream => {
        // Create a div for each ice cream
        const iceCreamDiv = document.createElement('div');
        iceCreamDiv.className = 'ice-cream';

        // Create the image element
        const img = document.createElement('img');
        img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;

        // Create the overlay div
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.innerText = iceCream.name;

        // Append the image and overlay to the ice cream div
        iceCreamDiv.appendChild(img);
        iceCreamDiv.appendChild(overlay);

        // Append the ice cream div to the container
        container.appendChild(iceCreamDiv);
    });
}

// Call the function to display the ice creams
displayIceCreams();

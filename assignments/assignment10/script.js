// Associative array with image source, title, and description
const imageArray = [
    {
        src: 'images/birthday.jpg',  // Path to image
        title: 'Birthday Party',
        description: 'This little figure is ready to celebrate with a party hat!'
    },
    {
        src: 'images/clown.jpg',
        title: 'Koala Outfit',
        description: 'Dressed up like a cute koala with fluffy ears.'
    },
    {
        src: 'images/rain.jpg',
        title: 'Rainy Day',
        description: 'I think it\'s time to bring your umbrella.'
    },
    {
        src: 'images/read.jpg',
        title: 'Reading Time',
        description: 'This figure enjoys some peaceful reading time.'
    },
    {
        src: 'images/shovel.jpg',
        title: 'Gardening',
        description: 'Getting ready to plant some flowers!'
    },
    {
        src: 'images/work.jpg',
        title: 'Laptop Work',
        description: 'Time for some serious laptop work.'
    }
];

// Function to dynamically load images from the array
function loadImages() {
    const container = document.getElementById('image-container');

    // Loop through the image array and create img elements
    imageArray.forEach((imageObj, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = imageObj.src;  // Set image source
        imgElement.alt = imageObj.title;  // Set alt text
        imgElement.addEventListener('click', () => displayDescription(index));  // Click event to show description
        container.appendChild(imgElement);  // Append the image to the container
    });
}

// Function to display title and description when an image is clicked
function displayDescription(index) {
    const titleElement = document.getElementById('title');  // Get title element
    const textElement = document.getElementById('text');  // Get description element

    // Update the title and description
    titleElement.textContent = imageArray[index].title;
    textElement.textContent = imageArray[index].description;
}

// Load images when the page loads
window.onload = loadImages;



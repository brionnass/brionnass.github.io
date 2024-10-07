// Bird class definition with attributes and methods for generating HTML sections
class Bird {
    constructor(name, size, lifespan, food, habitat, interestingFact, image) {
        this.name = name;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.interestingFact = interestingFact;
        this.image = image;
    }

    // Method to create a compact view of the bird (name and image)
    getSection() {
        return `
            <div class="bird-box" onclick="showModal('${this.name}')">
                <h3>${this.name}</h3>
                <img src="images/${this.image}" alt="${this.name}">
            </div>
        `;
    }

    // Method to create an expanded view of the bird's details for the modal
    getExpandedSection() {
        return `
            <div>
                <span class="close-button" onclick="closeModal()">&times;</span>
                <h2>${this.name}</h2>
                <p><strong>Size:</strong> ${this.size}</p>
                <p><strong>Lifespan:</strong> ${this.lifespan}</p>
                <p><strong>Food:</strong> ${this.food}</p>
                <p><strong>Habitat:</strong> ${this.habitat}</p>
                <p><strong>Interesting Fact:</strong> ${this.interestingFact}</p>
                <p>Tiny little colorful birds that bring joy to everyone :)</p>
            </div>
            <img src="images/${this.image}" alt="${this.name}">
        `;
    }
}

// Array of Bird objects with detailed attributes for each bird
const birds = [
    new Bird('Hummingbird', '2.5 inches', '3-5 years', 'Nectar (Sugar water)', 'Trees', "They're nicknamed 'Hummers'", 'hummingbird.jpg'),
    new Bird('Blue Jay', '9-12 inches', '7 years', 'Seeds, Nuts', 'Forests', 'Mimics other bird calls', 'bluejay.jpg'),
    new Bird('Cardinal', '8-9 inches', '3 years', 'Seeds, Fruits', 'Woodlands', 'Males are bright red', 'cardinal.jpg'),
    new Bird('Robin', '10 inches', '2 years', 'Insects, Worms', 'Gardens', 'Famous for its red chest', 'robin.jpg')
];

// Arrow function to dynamically display the bird boxes on the page
const displayBirds = () => {
    const birdContainer = document.getElementById('bird-container');
    birdContainer.innerHTML = ''; // Clear the container before adding content
    birds.forEach(bird => {
        birdContainer.innerHTML += bird.getSection();
    });
};

// Arrow function to show the modal with bird details
const showModal = (birdName) => {
    const bird = birds.find(b => b.name === birdName);
    if (bird) {
        document.getElementById('modal-content').innerHTML = bird.getExpandedSection();
        document.getElementById('birdModal').style.display = 'block';
    } else {
        console.error(`Bird with name ${birdName} not found.`);
    }
};

// Arrow function to close the modal
const closeModal = () => {
    document.getElementById('birdModal').style.display = 'none';
};

// Initialize the bird display on page load
displayBirds();





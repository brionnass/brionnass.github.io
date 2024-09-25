// Toggle Menu for small screens
function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    const arrow = document.querySelector('.menu-arrow');
    menuItems.classList.toggle('visible');
    arrow.classList.toggle('up');
}

// Show Assignments based on menu click
function showAssignment(assignmentNumber) {
    document.getElementById('assignment1').classList.add('hidden');
    document.getElementById('assignment2').classList.add('hidden');

    if (assignmentNumber === 1) {
        document.getElementById('assignment1').classList.remove('hidden');
    } else if (assignmentNumber === 2) {
        document.getElementById('assignment2').classList.remove('hidden');
    }
}

// Color Slider Functionality
function updateColor() {
    const slider = document.getElementById('colorSlider');
    const value = slider.value;
    const colorBox = document.getElementById('assignment1');
    const message = document.getElementById('colorValue');

    // Update background color
    colorBox.style.backgroundColor = `rgb(${value}, 0, 0)`;

    // Update the message
    if (value < 85) {
        message.textContent = "Chill";
    } else if (value < 170) {
        message.textContent = "Warm";
    } else {
        message.textContent = "Hot!";
    }
}

// Picture Chooser Functionality
function showPicture(size) {
    let width;
    if (size === 'small') {
        width = 200;
    } else if (size === 'medium') {
        width = 300;
    } else if (size === 'large') {
        width = 500;
    }

    document.getElementById('pictureDisplay').innerHTML = `<img src="https://picsum.photos/${width}" alt="Random Picture">`;
}


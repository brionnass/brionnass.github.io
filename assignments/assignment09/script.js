document.addEventListener('DOMContentLoaded', function () {
    const drawButton = document.getElementById('draw-btn');
    const starCanvas = document.getElementById('star-canvas');
    const errorMessage = document.getElementById('error-message');
    const starMessage = document.getElementById('star-message');

    drawButton.addEventListener('click', function () {
        // Clear previous stars and messages
        starCanvas.innerHTML = '';
        starMessage.innerHTML = '';
        errorMessage.innerHTML = '';

        // Get the number of stars from input
        const starCount = parseInt(document.getElementById('star-count').value, 10);

        // Validate input
        if (isNaN(starCount) || starCount <= 0) {
            errorMessage.textContent = '* Invalid input. Please enter a number greater than 0.';
            return;
        }

        // Draw stars at random positions
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');

            // Randomize position within the canvas
            const xPos = Math.random() * (starCanvas.offsetWidth - 15);
            const yPos = Math.random() * (starCanvas.offsetHeight - 15);
            star.style.left = `${xPos}px`;
            star.style.top = `${yPos}px`;

            // Add event listener to display star number when clicked
            star.addEventListener('click', function () {
                starMessage.textContent = `You clicked star number ${i + 1}`;
            });

            // Append star to the canvas
            starCanvas.appendChild(star);
        }
    });
});





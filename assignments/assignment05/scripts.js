// Counter Functionality
let count = 0;
document.getElementById('counter-column').addEventListener('click', () => {
    count++;
    document.getElementById('counter').textContent = count;
});

// Refresh Image Functionality
function refreshImage() {
    document.getElementById('random-image').src = "https://picsum.photos/300?random=" + new Date().getTime();
}

// Slider Movement Functionality
function moveSquare() {
    let sliderValue = document.getElementById('slider').value;
    let square = document.getElementById('square');
    let maxWidth = document.querySelector('.slider-container').offsetWidth - square.offsetWidth;
    let position = (100 - sliderValue) / 100 * maxWidth;
    square.style.left = position + "px";
}



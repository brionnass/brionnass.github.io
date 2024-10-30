document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    formData.append('access_key', '57675fc6-83a2-4461-8853-6f5d7309fff5'); // Your Web3Forms access key
    const responseMessage = document.getElementById('responseMessage');
    
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            responseMessage.textContent = 'Thank you for your message!';
            responseMessage.style.color = 'green';
            event.target.reset(); // Clear the form fields after submission
        } else {
            responseMessage.textContent = 'There was a problem with your submission.';
            responseMessage.style.color = 'red';
        }
    } catch (error) {
        responseMessage.textContent = 'An error occurred while submitting the form.';
        responseMessage.style.color = 'red';
    }
});

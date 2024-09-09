// Get the elements
const submitButton = document.getElementById('submitButton');
const nameInput = document.getElementById('nameInput');
const message = document.getElementById('message');

// Add event listener to the submit button
submitButton.addEventListener('click', function() {
    const name = nameInput.value.trim(); // Get the input value and remove whitespace

    if (name === '') {
        // Show error message if the name input is empty
        message.textContent = 'Please enter your name!';
        message.style.color = 'red';
    } else {
        // Show success popup if the name is provided
        alert(`Congratulations, ${name}! You have successfully registered yourself.`);
        // Clear the input and message after submission
        nameInput.value = '';
        message.textContent = '';
    }
});

// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the form element and input fields
  var form = document.querySelector('form');
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');

  // Add event listener for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate the form before submitting
    if (validateForm()) {
      // Get the values from the input fields
      var name = nameInput.value;
      var email = emailInput.value;
      var message = messageInput.value;

      // Log the form submission details
      console.log('Form submitted!');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);

      form.reset(); // Reset the form after submission
    }
  });

  // Function to validate the form
  function validateForm() {
    var isValid = true;

    // Validate the name field
    if (nameInput.value.trim() === '') {
      isValid = false;
      setError(nameInput, 'Please enter your name');
    } else {
      clearError(nameInput);
    }

    // Validate the email field
    if (emailInput.value.trim() === '') {
      isValid = false;
      setError(emailInput, 'Please enter your email');
    } else if (!isValidEmail(emailInput.value)) {
      isValid = false;
      setError(emailInput, 'Please enter a valid email address');
    } else {
      clearError(emailInput);
    }

    // Validate the message field
    if (messageInput.value.trim() === '') {
      isValid = false;
      setError(messageInput, 'Please enter your message');
    } else {
      clearError(messageInput);
    }

    return isValid; // Return the overall validation result
  }

  // Function to set an error state for an input field
  function setError(input, errorMessage) {
    input.classList.add('error'); // Add 'error' class to input field
    var errorElement = document.createElement('div');
    errorElement.classList.add('error-message'); // Create and style an error message element
    errorElement.textContent = errorMessage; // Set the error message text
    input.parentNode.insertBefore(errorElement, input.nextSibling); // Insert the error message element after the input field
  }

  // Function to clear the error state for an input field
  function clearError(input) {
    input.classList.remove('error'); // Remove 'error' class from input field
    var errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
      errorElement.parentNode.removeChild(errorElement); // Remove the error message element
    }
  }

  // Function to validate email format using regular expression
  function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    return emailPattern.test(email);
  }
});

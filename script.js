// Function to validate form submission
function validateForm() {
    // Validate hCaptcha response
    var response = document.querySelector('.h-captcha-response').value;
    if (!response) {
      alert('Please complete the captcha!');
      return false; // Prevent form submission if captcha is not completed
    }
    // Show success message
    document.getElementById('success-message').style.display = 'block';
    // Prevent form submission
    return false;
  }
  
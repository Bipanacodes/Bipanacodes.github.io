const loginForm = document.querySelector('#loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login form submitted!');

  });
}
// Registration Form Validation
const registerForm = document.querySelector('#registerForm');

if (registerForm) {
  registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple form validation
    if (!username || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Perform AJAX request to register the user
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Registration successful! You can now log in.');
        window.location.href = '/login'; // Redirect to login page on successful registration
      } else {
        alert(data.message);
      }
    })
    .catch(error => {
      console.error('Error registering user:', error);
      alert('An error occurred while registering. Please try again later.');
    });
  });
}

// Contact Form Submission
const contactForm = document.querySelector('#contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform AJAX request to submit the contact form
    fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Message sent successfully!');
        // Optionally, clear the form fields after successful submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
      } else {
        alert(data.message);
      }
    })
    .catch(error => {
      console.error('Error submitting contact form:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    });
  });
}

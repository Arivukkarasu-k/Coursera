// JavaScript for form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Thank you for contacting us, ${email}!`);
    document.getElementById('contactForm').reset(); // Reset the form
});

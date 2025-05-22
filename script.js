document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Stop form from reloading the page
  alert('Merci pour votre message ! Nous vous contacterons bientôt.');
  this.reset(); // Reset form fields
});

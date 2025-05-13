document.getElementById('contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message!');
  e.target.reset();
});
console.log("Welcome to My Vlog Site!");

const form = document.getElementById('contact-form');
const submitBtn = form?.querySelector('button');

form?.addEventListener('submit', function (e) {
  e.preventDefault();

  // Add animation class to form
  form.classList.add('form-success-animation');

  // Change button style and text
  if (submitBtn) {
    submitBtn.textContent = "✔ Sent!";
    submitBtn.classList.add('success');
  }

  // Reset form after animation
  setTimeout(() => {
    form.classList.remove('form-success-animation');
    form.reset();

    // Restore button
    if (submitBtn) {
      submitBtn.textContent = "Send";
      submitBtn.classList.remove('success');
    }
  }, 1200);

  alert('Thank you for your message!');
});

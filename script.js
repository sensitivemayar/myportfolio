document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for contacting me! I’ll get back to you soon.");
      form.reset();
    });
  }
});

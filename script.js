// Wait for the DOM to load before executing any scripts
document.addEventListener("DOMContentLoaded", function () {
  
    // Contact form submission logic
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the form from submitting to a server
  
        // Gather form data
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;
  
        // Simple validation
        if (!name || !email || !message) {
          alert("Please fill out all fields.");
          return;
        }
  
        // Simulate form submission success (you can replace this with actual form submission logic later)
        alert(`Thank you, ${name}! Your message has been sent.`);
        
        // Clear form fields after submission
        contactForm.reset();
      });
    }
  
    // Scroll to the top of the page when the user clicks on the navbar items
    const navbarLinks = document.querySelectorAll("nav a");
    navbarLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
  
        const targetId = link.getAttribute("href").substring(1); // Get the target section ID (remove '#')
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjust to ensure it's not under the navbar
            behavior: "smooth" // Smooth scrolling
          });
        }
      });
    });
  });
  
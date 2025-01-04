document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) { // Check if the form exists on the page
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission

            // Basic form validation (you can add more robust validation here)
            const nameInput = document.querySelector('input[type="text"]');
            const emailInput = document.querySelector('input[type="email"]');
            const messageInput = document.querySelector('textarea');

            if (!nameInput.value || !emailInput.value || !messageInput.value) {
                alert("Please fill in all fields.");
                return; // Stop form submission
            }

            // Here you would typically send the form data to a server
            // using AJAX or Fetch API. For this example, we'll just show an alert.
            alert("Thank you for your message, Victor will get back to you soon!");

            // Optionally clear the form after successful "submission"
            contactForm.reset();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.header').offsetHeight, // Adjust offset for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });
});

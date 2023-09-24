document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user input
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // You can replace this part with your own logic to send the message.
        // For demonstration purposes, we'll just display an alert.
        alert("Message sent!\n\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);

        // Clear the form
        contactForm.reset();
    });
});

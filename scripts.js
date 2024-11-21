// scripts.js

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from being submitted in the traditional way

    // Getting form input values
    const name = event.target[0].value;
    const email = event.target[1].value;
    const message = event.target[2].value;

    // Simple validation
    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Display success message
    alert("Thank you for contacting us, " + name + ". We will get back to you soon!");
    
    // Optionally, you could send this data to a server here.
    
    // Clear form fields after submission
    event.target.reset();
});

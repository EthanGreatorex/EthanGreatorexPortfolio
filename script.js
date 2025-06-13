const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the menu when the user clicks outside of it
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

// Close the menu when a link is clicked
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

function copyEmail(){
    const email = 'eggGreatorex@gmail.com';

    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = email;


    document.body.appendChild(tempInput);


    tempInput.select();


    document.execCommand("copy");

    document.body.removeChild(tempInput);

    const copyEmailButton = document.getElementById('copy-email-button');
    copyEmailButton.textContent = 'Copied!';

    setTimeout(() => {
        copyEmailButton.textContent = 'Copy Email';
    }, 2000)

}
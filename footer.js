const date = new Date();
const year = date.getFullYear();

function loadFooter() {
	const footerHTML = `
        <footer>
            <p>&copy; ${year} Safio Tax & Accountancy. All Rights Reserved.</p>
            <nav>
                <a href="about.html">About Us</a> | 
                <a href="contact.html">Contact</a> | 
                <a href="privacy.html">Privacy Policy</a>
            </nav>
            <div class="social-icons">
                <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
        </footer>
    `;

	// Get all elements with the class "footer"
	const footerElements = document.querySelectorAll('.footer');

	// Iterate over each element and set its innerHTML to the footer HTML
	footerElements.forEach((element) => {
		element.innerHTML = footerHTML;
	});
}

// Call the function to load the footer when the window loads
window.onload = loadFooter;

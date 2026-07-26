// Select all website sections and cards for animation
const animatedElements = document.querySelectorAll(
    "section, .card, .project-card"
);

// Add hidden class initially
animatedElements.forEach((element) => {
    element.classList.add("hidden");
});

// Observe elements when they enter the screen
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

// Start observing each element
animatedElements.forEach((element) => {
    observer.observe(element);
});

// Smooth scrolling for navigation links
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const sectionId = link.getAttribute("href");

        if (sectionId && sectionId.startsWith("#")) {
            event.preventDefault();

            const targetSection = document.querySelector(sectionId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});

// Display the current year automatically in the footer
const footerText = document.querySelector("footer p");

if (footerText) {
    const currentYear = new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} Siri | Personal Profile Website created with AI assistance.`;
}

// Add active style to the navigation link while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});
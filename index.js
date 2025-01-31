const flavors = ["Sour Cream", "Tomato", "Spring Onion", "Mexican", "Salt & Vinegar", "Pizza", "Fruit Chutney", "Sweet Chilli"];

const flavorColors = {
    "Sour Cream": "#F5DEB3",
    "Tomato": "#FF6347",
    "Spring Onion": "#98FB98",
    "Mexican": "#D2691E",
    "Salt & Vinegar": "#ADD8E6",
    "Pizza": "#FF4500",
    "Fruit Chutney": "#8B4513",
    "Sweet Chilli": "#DC143C"
};

const dotColors = {
    "Sour Cream": "darkgreen",
    "Spring Onion": "beige",
    "Salt & Vinegar": "white",
    "Fruit Chutney": "purple",
    "Mexican": "black",
    "Sweet Chilli": "orange",
    "Tomato": "darkred",
    "Pizza": "yellow"
};

// the paaper bite(s)
function createPaperBite() {
    const bite = document.createElement("div");
    bite.classList.add("paper-biteSquare");
    bite.style.left = Math.random() * window.innerWidth + "px";
    bite.style.animationDuration = (Math.random() * 12 + 9) + "s"; // Falls in 9s - 21s

    // Select a random flavor
    const flavorEntries = Object.entries(flavorColors); // Get flavor-color pairs
    const [flavor, color] = flavorEntries[Math.floor(Math.random() * flavorEntries.length)];

    // Apply the color and flavor
    bite.style.background = color;

    // Create flavor bubble
    const bubble = document.createElement("div");
    bubble.classList.add("flavor-bubble");
    bubble.textContent = flavor;
    bite.appendChild(bubble);

    // Create and append dots
    if (dotColors[flavor]) {
        for (let i = 0; i < 7; i++) {
            const dot = document.createElement("div");
            dot.classList.add("flavor-dot");
            dot.style.background = dotColors[flavor];
            bite.appendChild(dot);
        }
    }

    // Show flavor on click
    bite.addEventListener("click", () => {
        bubble.style.opacity = "1";
        setTimeout(() => { bubble.style.opacity = "0"; }, 2000); // Hide after 2s
    });

    document.body.appendChild(bite);

    // Remove after animation ends
    setTimeout(() => bite.remove(), 13000);
}

// Generate paaper bites
setInterval(createPaperBite, 1500);

const buttons = document.querySelectorAll(".buttonWho, .buttonFlavours, .buttonContact");

// Hide all info divs initially
document.querySelectorAll(".info").forEach(info => info.style.display = "none");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const isExpanded = button.classList.contains('expanded');

        // Reset all buttons and hide all info sections
        buttons.forEach(btn => {
            btn.classList.remove('expanded');
            btn.style.transform = 'translateX(0)';
            btn.querySelector('.info').style.display = 'none';
        });

        if (!isExpanded) {
            button.classList.add('expanded');
            button.querySelector('.info').style.display = 'block'; // Show info

            // Adjust spacing
            const index = Array.from(buttons).indexOf(button);
            buttons.forEach((btn, i) => {
                if (i < index) {
                    btn.style.transform = 'translateX(-160px)';
                } else if (i > index) {
                    btn.style.transform = 'translateX(160px)';
                }
            });
        }
    });
});

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
    "Spring Onion": "yellow",
    "Salt & Vinegar": "white",
    "Fruit Chutney": "purple",
    "Mexican": "black",
    "Sweet Chilli": "orange",
    "Tomato": "darkred"
};

function createPaperBite() {
    const bite = document.createElement("div");
    bite.classList.add("paper-bite");
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

    // Remove from the DOM after animation ends
    setTimeout(() => bite.remove(), 13000);
}

// Generate paper bites every 1500ms
setInterval(createPaperBite, 1500);

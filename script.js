// Function that creates a recipe card inside the appropriate section
function addRecipe(category, name, image, link) {
    const grid = document.getElementById(`${category}-grid`);

    const card = document.createElement("div");
    card.classList.add("recipe-card");
    card.onclick = () => window.location.href = link;

    const img = document.createElement("img");
    img.src = image;

    const label = document.createElement("p");
    label.textContent = name;

    card.appendChild(img);
    card.appendChild(label);

    grid.appendChild(card);
}

// --- Add your pasta dishes here ---

addRecipe(
    "pasta",
    "Broccolo Pasta",
    "https://placehold.co/300x200?text=Broccolo+Pasta",
    "broccolo-pasta.html"
);

addRecipe(
    "pasta",
    "Pasta Bolognese",
    "https://placehold.co/300x200?text=Bolognese",
    "pasta-bolognese.html"
);

addRecipe(
    "pasta",
    "Gnocchi con Funghi e Mascarpone",
    "https://placehold.co/300x200?text=Gnocchi",
    "gnocchi-funghi.html"
);

// You can add more categories later in the same format

// Example structure to add recipe cards dynamically later
// You can expand this as you add recipes.

const recipes = {
    pasta: [],
    rice: [],
    soups: [],
    salads: [],
    local: []
};

// Function to add a recipe card to a grid
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

// Example usage (remove this later)
// addRecipe("pasta", "My Carbonara", "images/carbonara.jpg", "carbonara.html");

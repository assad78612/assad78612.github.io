// Toggle Details for Recipes
function toggleDetails(element) {
    const details = element.previousElementSibling;

    // Toggle the visibility of the recipe details (paragraph element)
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";  // Show the details
        element.textContent = "Show less";  // Change button text
    } else {
        details.style.display = "none";  // Hide the details
        element.textContent = "Show more";  // Revert button text
    }
}

// Search Functionality
function searchRecipes() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const recipes = document.getElementsByClassName("recipe");

    for (let i = 0; i < recipes.length; i++) {
        let title = recipes[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        if (title.includes(input)) {
            recipes[i].style.display = "";
        } else {
            recipes[i].style.display = "none";
        }
    }
}

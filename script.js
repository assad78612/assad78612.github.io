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

document.addEventListener("DOMContentLoaded", () => {
  const viewMoreBtn = document.querySelector("#projects .view-more-btn"); // Correct selector
  const projects = document.querySelectorAll("#projects .project"); // Correct selector

  if (viewMoreBtn && projects.length > 2) {
    // Initially hide all projects except the first 2
    projects.forEach((project, index) => {
      project.style.display = index < 2 ? "block" : "none";
    });

    viewMoreBtn.addEventListener("click", () => {
      window.location.href = "all-projects.html"; // Navigate to the new page
    });
  } else if (viewMoreBtn) {
    viewMoreBtn.style.display = "none"; // Hide the button if there are no extra projects
  } else {
    console.error("View More button or projects not found!"); // Debugging message
  }
});

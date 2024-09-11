// function showMessage() {
//   document.getElementById("message").style.display = "block";
//   document.getElementById("overlay").style.display = "block";
//   document.body.style.overflow = "hidden"; // Prevent scrolling
// }

// function closeMessage() {
//   document.getElementById("message").style.display = "none";
//   document.getElementById("overlay").style.display = "none";
//   document.body.style.overflow = "auto"; // Restore scrolling
// }

// ---------------------------------------------------------------------------------------------

// Function to show the job details
document.addEventListener("DOMContentLoaded", () => {
  const showJobButtons = document.querySelectorAll(".show-job");

  showJobButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const jobUrl = button.getAttribute("data-url");
      window.location.href = jobUrl;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const jobListings = document.getElementById("job-listings");
  const searchKeywords = document.getElementById("search-keywords");
  const clearAllButton = document.querySelector(".clearAll");

  // Function to get selected radio value by name
  function getSelectedValue(name) {
    const radios = document.querySelectorAll(`input[name="${name}"]`);
    let selectedValue = "all";
    radios.forEach((radio) => {
      if (radio.checked) {
        selectedValue = radio.value;
      }
    });
    return selectedValue;
  }

  // Function to check if all filters are set to 'all' or 'any'
  function checkFilters() {
    const category = getSelectedValue("category");
    const jobType = getSelectedValue("job-type");
    const datePosted = getSelectedValue("date-posted");
    const experienceLevel = getSelectedValue("experience-level");

    if (
      category === "all" &&
      jobType === "all" &&
      datePosted === "any" &&
      experienceLevel === "any"
    ) {
      clearAllButton.style.display = "none"; // Hide Clear All button if all default options are selected
    } else {
      clearAllButton.style.display = "block"; // Show Clear All button if any option is changed
    }
  }

  // Function to reset all filters to 'all' or 'any'
  function resetFilters() {
    document.querySelector(
      'input[name="category"][value="all"]'
    ).checked = true;
    document.querySelector(
      'input[name="job-type"][value="all"]'
    ).checked = true;
    document.querySelector(
      'input[name="date-posted"][value="any"]'
    ).checked = true;
    document.querySelector(
      'input[name="experience-level"][value="any"]'
    ).checked = true;
    clearAllButton.style.display = "none"; // Hide the button once reset
    filterJobs(); // Reapply filtering
  }

  // Function to filter jobs based on selected criteria
  function filterJobs() {
    const keyword = searchKeywords.value.toLowerCase();
    const category = getSelectedValue("category");
    const jobType = getSelectedValue("job-type");
    const datePosted = getSelectedValue("date-posted");
    const experienceLevel = getSelectedValue("experience-level");

    const jobCards = document.querySelectorAll(".job-card");

    jobCards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const cardCategory = card.dataset.category;
      const cardType = card.dataset.type;
      const cardDate = card.dataset.date;
      const cardExperience = card.dataset.experience;

      const matchesKeyword = keyword === "" || title.includes(keyword);
      const matchesCategory = category === "all" || cardCategory === category;
      const matchesJobType = jobType === "all" || cardType === jobType;
      const matchesDatePosted = datePosted === "any" || cardDate === datePosted;
      const matchesExperienceLevel =
        experienceLevel === "any" || cardExperience === experienceLevel;

      if (
        matchesKeyword &&
        matchesCategory &&
        matchesJobType &&
        matchesDatePosted &&
        matchesExperienceLevel
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    checkFilters(); // Check filters after filtering
  }

  // Event listeners for search input and radio buttons
  searchKeywords.addEventListener("input", filterJobs);
  document.querySelectorAll('input[name="category"]').forEach((input) => {
    input.addEventListener("change", filterJobs);
  });
  document.querySelectorAll('input[name="job-type"]').forEach((input) => {
    input.addEventListener("change", filterJobs);
  });
  document.querySelectorAll('input[name="date-posted"]').forEach((input) => {
    input.addEventListener("change", filterJobs);
  });
  document
    .querySelectorAll('input[name="experience-level"]')
    .forEach((input) => {
      input.addEventListener("change", filterJobs);
    });

  // Event listener for the "Clear All" button
  clearAllButton.addEventListener("click", resetFilters);

  filterJobs(); // Initial filter to show all jobs on load
});

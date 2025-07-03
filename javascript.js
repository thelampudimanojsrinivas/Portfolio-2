
function filterProjects(category) {
    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {
      if (category === "all" || card.classList.contains(category)) {
        card.classList.add("show");
      } else {
        card.classList.remove("show");
      }
    });
  }

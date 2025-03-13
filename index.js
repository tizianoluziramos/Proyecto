document.addEventListener("DOMContentLoaded", function() {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches;

  if (prefersDarkScheme) {
    document.body.classList.add("dark");
    document.documentElement.classList.add("dark");

    const navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.classList.remove("navbar-light", "bg-light");
      navbar.classList.add("navbar-dark", "bg-dark");
    }

    const toggleButton = document.getElementById("toggleButton");
    if (toggleButton) {
      toggleButton.innerHTML = "🌙";
      toggleButton.style.backgroundColor = "#333";
      toggleButton.style.color = "white";
    }

    document.querySelectorAll(".news-item").forEach(item => {
      item.classList.add("dark");
    });
  }

  document.getElementById("toggleButton").addEventListener("click", function() {
    document.body.classList.toggle("dark");
    document.documentElement.classList.toggle("dark");

    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (document.body.classList.contains("dark")) {
        navbar.classList.remove("navbar-light", "bg-light");
        navbar.classList.add("navbar-dark", "bg-dark");
      } else {
        navbar.classList.remove("navbar-dark", "bg-dark");
        navbar.classList.add("navbar-light", "bg-light");
      }
    }

    if (this.innerHTML === "☀️") {
      this.innerHTML = "🌙";
      this.style.backgroundColor = "#333";
      this.style.color = "white";
    } else {
      this.innerHTML = "☀️";
      this.style.backgroundColor = "";
      this.style.color = "";
    }

    document
      .querySelectorAll(".news-item")
      .forEach(item => item.classList.toggle("dark"));
    document
      .querySelectorAll(".nav-link")
      .forEach(link => link.classList.toggle("dark"));
  });
});

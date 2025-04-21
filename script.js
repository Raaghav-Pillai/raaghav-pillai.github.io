document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  const toggleBtn = document.getElementById("theme-toggle");
  const icons = document.querySelectorAll(".theme-icon");

  function updateIconsForTheme(theme) {
    icons.forEach(icon => {
      const src = theme === "dark" ? icon.dataset.dark : icon.dataset.light;
      icon.src = src;
    });
  }

  let currentTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateIconsForTheme(currentTheme);

  toggleBtn.addEventListener("click", () => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    currentTheme = nextTheme;
    updateIconsForTheme(nextTheme);
  });
});
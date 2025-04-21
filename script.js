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

// Mouse Trail Canvas
const canvas = document.getElementById("trail-canvas");
const ctx = canvas.getContext("2d");
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let trail = [];

document.addEventListener("mousemove", (e) => {
  trail.push({
    x: e.clientX,
    y: e.clientY,
    radius: 8,
    alpha: 1,
    vx: (Math.random() - 0.5) * 1,
    vy: (Math.random() - 0.5) * 1
  });
});

function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, width, height);

  for (let i = trail.length - 1; i >= 0; i--) {
    let p = trail[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 0.015;
    p.radius *= 0.97;

    if (p.alpha <= 0.01 || p.radius <= 0.5) {
      trail.splice(i, 1);
      continue;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(165, 0, 255, ${p.alpha})`; // Purple
    ctx.fill();
  }

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});
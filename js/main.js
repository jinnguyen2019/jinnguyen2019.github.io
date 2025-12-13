const intro = document.getElementById("intro");
const main = document.getElementById("main");
const music = document.getElementById("music");

intro.addEventListener("click", () => {
  intro.style.display = "none";
  main.classList.remove("hidden");
  music.play();
});

const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

faders.forEach(el => appearOnScroll.observe(el));

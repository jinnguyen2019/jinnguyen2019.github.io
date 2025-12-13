const intro = document.getElementById("intro");
const main = document.getElementById("main");
const music = document.getElementById("music");

intro.addEventListener("click", () => {
  intro.style.display = "none";
  main.classList.remove("hidden");
  music.play();
});

const intro = document.getElementById("intro");
const content = document.getElementById("content");
const music = document.getElementById("bgMusic");

intro.addEventListener("click", () => {
  intro.style.display = "none";
  content.classList.remove("hidden");
  music.play();
});

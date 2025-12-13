const intro = document.getElementById("intro");
const main = document.getElementById("main");
const music = document.getElementById("music");

intro.addEventListener("click", () => {
  intro.style.display = "none";
  main.classList.remove("hidden");
  music.play();
});

//Fade-in
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

//Music on/off
const toggleBtn = document.getElementById("musicToggle");

toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "🎵";
  } else {
    music.pause();
    toggleBtn.textContent = "🔇";
  }
});

//rsvp
document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();

  fetch("https://script.google.com/macros/s/AKfycbyN6BQoqbOI54DW71S0HIJLRGUD2Yw3t3qmiQgKkbbd1oybJ7RTlrUXasY-hMa8oBec3g/exec", {
    method: "POST",
    body: JSON.stringify({
      name: document.getElementById("name").value,
      status: document.getElementById("status").value
    })
  })
  .then(() => {
    alert("Cảm ơn bạn đã xác nhận 💙");
    this.reset();
  });
});

//light box when click album
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove("hidden");
    lightbox.style.pointerEvents = "auto";
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
  lightbox.style.pointerEvents = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add("hidden");
    lightbox.style.pointerEvents = "none";
  }
});

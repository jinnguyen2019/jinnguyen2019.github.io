//Click Intro open Card
const envelope = document.getElementById("openEnvelope");
const introEl = document.getElementById("intro");
const introFade = document.getElementById("introFade");
const mainEl = document.getElementById("main");
const musicEl = document.getElementById("music");

if (envelope) {
  envelope.addEventListener("click", () => {
    envelope.classList.add("open");

    // Sau khi thư mở gần xong
    setTimeout(() => {
      introFade.style.opacity = 1;
    }, 900);

    setTimeout(() => {
      mainEl.classList.add("show");
    }, 50);

    // Hiện website
    setTimeout(() => {
      introEl.style.display = "none";
      mainEl.classList.remove("hidden");
      musicEl.play().catch(() => {});
    }, 1600);
  });
}

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

//floating-leaf
let lastScroll = 0;
const leaves = document.querySelector(".floating-leaves");

window.addEventListener("scroll", () => {
  const current = window.scrollY;

  if (Math.abs(current - lastScroll) > 20) {
    leaves.style.opacity = 1;
  }

  lastScroll = current;
});

//Detect device
const mapBtn = document.getElementById("openMap");

if (mapBtn) {
  mapBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const destination =
      "Trung+tâm+Hội+nghị+%26+Tiệc+cưới+Gala";

    const ua = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
      // iOS
      window.location.href =
        "https://maps.apple.com/?q=" + destination;
    } else if (/android/i.test(ua)) {
      // Android
      window.location.href =
        "https://www.google.com/maps/dir/?api=1&destination=" +
        destination;
    } else {
      // Desktop
      window.open(
        "https://www.google.com/maps/place/" + destination,
        "_blank"
      );
    }
  });
}

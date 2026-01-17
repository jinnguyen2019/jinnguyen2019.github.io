//Click Intro open Card
const envelope = document.getElementById("openEnvelope");
const introEl = document.getElementById("intro");
const mainEl = document.getElementById("main");
const musicEl = document.getElementById("music");

if (envelope) {
  envelope.addEventListener("click", () => {
    envelope.classList.add("open");

    setTimeout(() => {
      introEl.style.display = "none";
      mainEl.classList.remove("hidden");

      // ⭐ KÍCH HOẠT FADE-IN COVER CARD
      const coverCard = document.querySelector(".cover-card");
      if (coverCard) {
        coverCard.classList.remove("show");
        void coverCard.offsetWidth; // force reflow cho Safari
        coverCard.classList.add("show");
      }

      musicEl.play().catch(() => {
        // iOS cần user interaction, ignore lỗi
      });
    }, 1200);

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
//document.getElementById("rsvpForm").addEventListener("submit", function (e) {
//  e.preventDefault();
//
//  const name = document.getElementById("name").value.trim();
//  const status = document.querySelector(
//    'input[name="status"]:checked'
//  )?.value;
//  const guest = document.getElementById("guest").value;
//  const message = document.getElementById("message")?.value || "";
//
//  if (!name || !status) {
//    alert("Vui lòng nhập đầy đủ thông tin 💌");
//    return;
//  }
//
//  const formData = new FormData();
//  formData.append("name", name);
//  formData.append("status", status);
//  formData.append("guest", guest);
//  formData.append("message", message);
//
//  fetch("https://script.google.com/macros/s/AKfycbxaVMh_ZDNpSWT6a_qzpDMTl0rNwE8S4hnL2rst2i94ZJeiRqxREJsp3nwFGC31huBIng/exec", {
//    method: "POST",
//    body: formData
//  })
//    .then(() => {
//      alert("Cảm ơn bạn đã gửi lời chúc 💖");
//      this.reset();
//    })
//    .catch(() => {
//      alert("Có lỗi xảy ra, vui lòng thử lại sau 🙏");
//    });
//});

const statusRadios = document.querySelectorAll('input[name="status"]');
const guestGroup = document.getElementById("guest").closest(".form-group");

statusRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    guestGroup.style.display =
      radio.value === "Không tham dự" && radio.checked
        ? "none"
        : "block";
  });
});

//light box when click album
document.addEventListener("DOMContentLoaded", () => {

  const albumImages = [
    "assets/images/1.jpg",
    "assets/images/2.jpg",
    "assets/images/3.jpg",
    "assets/images/4.jpg",
    "assets/images/5.jpg",
    "assets/images/6.jpg",
    "assets/images/7.jpg",
    "assets/images/8.jpg",
    "assets/images/9.jpg",
    "assets/images/10.jpg",
    "assets/images/11.jpg",
    "assets/images/12.jpg",
    "assets/images/13.jpg",
    "assets/images/14.jpg",
    "assets/images/15.jpg",
    "assets/images/16.jpg",
    "assets/images/17.jpg",
    "assets/images/18.jpg",
    "assets/images/19.jpg",
    "assets/images/20.jpg",
    "assets/images/21.jpg"
  ];

  // ⭐ preload ảnh
  albumImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  let albumIndex = 0;

  const albumImg = document.getElementById("albumImage");
  const prevBtn = document.querySelector(".album-nav.prev");
  const nextBtn = document.querySelector(".album-nav.next");

  function showAlbumImage(index) {
    albumImg.style.opacity = 0;

    const tempImg = new Image();
    tempImg.src = albumImages[index];

    tempImg.onload = () => {
      albumImg.src = tempImg.src;
      albumImg.style.opacity = 1;
    };
  }

  prevBtn.addEventListener("click", () => {
    albumIndex = (albumIndex - 1 + albumImages.length) % albumImages.length;
    showAlbumImage(albumIndex);
  });

  nextBtn.addEventListener("click", () => {
    albumIndex = (albumIndex + 1) % albumImages.length;
    showAlbumImage(albumIndex);
  });

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

//Fade up card
const eventCard = document.querySelector('.event-card');

if (eventCard) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          eventCard.classList.add('in-view');
          observer.unobserve(eventCard);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(eventCard);
}

//Timeline
document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".timeline-row");

  rows.forEach(row => {
    row.classList.add("in-view"); // fallback luôn hiện
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    rows.forEach(row => observer.observe(row));
  }
});

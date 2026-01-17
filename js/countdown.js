const targetDate = new Date("2026-01-24T11:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) return;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("cd-days").innerText = days;
  document.getElementById("cd-hours").innerText = hours;
  document.getElementById("cd-minutes").innerText = minutes;
  document.getElementById("cd-seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

function tick(id) {
  const el = document.getElementById(id);
  el.classList.add("tick");
  setTimeout(() => el.classList.remove("tick"), 300);
}

// gọi sau khi set innerText
tick("cd-seconds");

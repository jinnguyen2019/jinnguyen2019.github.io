const target = new Date("2025-12-27T00:00:00");

function countdown() {
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerText = "Hôm nay là ngày cưới 💍";
    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;

  document.getElementById("countdown").innerText =
    `${d} ngày ${h} giờ ${m} phút ${s} giây`;
}

setInterval(countdown, 1000);

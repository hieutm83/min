const messages = [
  "Nhớ nhớ nhớ Mèn!"
];

function generateRandomNotifications() {
  const notificationCount = 100;

  for (let i = 0; i < notificationCount; i++) {
    setTimeout(() => {
      const notification = document.createElement('div');
      notification.className = 'notification';

      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      notification.innerHTML = `
        <div class="notification-header">
          <button class="minimize-btn" onclick="minimizeNotification(this)">–</button>
          <span>Tràn bộ nhớ 💖</span>
        </div>
        <p>${randomMessage}</p>
      `;

      const x = Math.random() * (window.innerWidth - 240);
      const y = Math.random() * (window.innerHeight - 160);
      notification.style.left = `${x}px`;
      notification.style.top = `${y}px`;

      document.body.appendChild(notification);
    }, i * 200);
  }
}

function minimizeNotification(button) {
  const notification = button.closest('.notification');
  notification.style.display = 'none'; 
}

document.addEventListener("DOMContentLoaded", function () {
  var encodedText = '&#67;&#111;&#100;&#101;&#32;&#66;&#121;&#32;&#77;&#105;&#110;&#72;&#105;&#101;&#117;'; // "Code By MinHieu" đã mã hóa
  var footer = document.createElement("a");
  footer.innerHTML = encodedText;
  footer.style.position = "fixed";
  footer.style.bottom = "0";
  footer.style.textAlign = "center";
  footer.style.fontSize = "14px";
  footer.style.color = "red"; // Màu chữ đỏ
  footer.style.textDecoration = "none";
  footer.style.fontFamily = "'Roboto', sans-serif";
  document.body.appendChild(footer);
});
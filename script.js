// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Kalkulasi hari jadian
    const jadianDate = new Date("2024-08-21"); // Ganti dengan tanggal jadian kalian
    const today = new Date();
    const diffTime = Math.abs(today - jadianDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById("counter").textContent = `${diffDays} hari`;

    // Pesan rahasia
    const showMessageButton = document.getElementById("show-message");
    const message = document.getElementById("message");
    showMessageButton.addEventListener("click", function () {
        message.style.display = "block";
    });
});

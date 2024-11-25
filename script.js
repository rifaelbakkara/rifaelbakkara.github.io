// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Kalkulasi hari jadian
    const startDate = new Date("2024-08-21"); // Ganti dengan tanggal jadian kalian
    const today = new Date();
    const daysTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById("days-counter").textContent = `${daysTogether} hari`;

    // Quotes Romantis
    const quotes = [
        "Cinta itu seperti angin, aku tidak bisa melihatnya tapi aku bisa merasakannya. 💕",
        "Setiap hari bersamamu adalah hari terbaik dalam hidupku.",
        "Aku bersyukur setiap hari karena kamu hadir dalam hidupku.",
        "Kamu adalah alasan aku tersenyum setiap hari."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote-display").textContent = randomQuote;

    // Pesan Rahasia
    const secretBtn = document.getElementById("secret-message-btn");
    const secretMessage = document.getElementById("secret-message");
    secretBtn.addEventListener("click", () => {
        secretMessage.style.display = "block";
    });
});

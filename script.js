document.addEventListener("DOMContentLoaded", () => {

    // Fade-up animation
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    // Particles
    const container = document.getElementById("particles");
    for (let i = 0; i < 30; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        p.style.left = Math.random() * 100 + "%";
        p.style.top = Math.random() * 100 + "%";
        container.appendChild(p);
    }

    // Countdown
    const eventDate = new Date("February 20, 2026 17:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const diff = eventDate - now;

        document.getElementById("days").innerText =
            Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerText =
            Math.floor((diff / (1000 * 60 * 60)) % 24);
        document.getElementById("minutes").innerText =
            Math.floor((diff / (1000 * 60)) % 60);
        document.getElementById("seconds").innerText =
            Math.floor((diff / 1000) % 60);
    }, 1000);
});

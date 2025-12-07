// Animação suave ao rolar a página
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".feature-card, .plan-card, .faq-item").forEach((el) => observer.observe(el));

// Efeito neon ao mover o mouse
document.addEventListener("mousemove", (e) => {
    const glow = document.querySelector(".hero-bg");
    if (glow) {
        glow.style.transform = `translate(${e.clientX / 20}px, ${e.clientY / 20}px)`;
    }
});

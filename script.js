/* ===========================
   VELORIX AI — SCRIPT.JS
   Efeitos, animações e UX
=========================== */

/* === Smooth Scroll para navegação === */
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


/* === Fade-in no Scroll (Revelação automática) === */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".feature-card, .stat, .testimonial, .price-card").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


/* === Animação do Header ao rolar === */
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});


/* === Botão CTA com animação extra quando aparece === */
const ctaButton = document.querySelector(".btn-cta");

if (ctaButton) {
    observer.observe(ctaButton);
}


/* === Efeito de clique neon === */
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add("clicked");
        setTimeout(() => btn.classList.remove("clicked"), 300);
    });
});

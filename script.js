gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", () => {
    // Cursore
    window.addEventListener("mousemove", (e) => {
        gsap.to("#custom-cursor", { x: e.clientX, y: e.clientY, duration: 0.1 });
    });
    // Marquee
    gsap.to(".marquee-inner", { xPercent: -50, repeat: -1, duration: 10, ease: "none" });
    // Animazione Titolo
    gsap.from(".title-main", { y: 100, opacity: 0, duration: 1.5, ease: "power4.out" });
});

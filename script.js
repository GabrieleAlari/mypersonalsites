gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector("#custom-cursor");

    // Movimento Cursore
    window.addEventListener("mousemove", (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    });

    // Ingrandimento cursore
    document.querySelectorAll("a, .portfolio-item").forEach(el => {
        el.addEventListener("mouseenter", () => gsap.to(cursor, { scale: 4 }));
        el.addEventListener("mouseleave", () => gsap.to(cursor, { scale: 1 }));
    });

    // Animazione Hero
    gsap.from(".title-main", { y: 100, opacity: 0, duration: 1.5, ease: "power4.out" });

    // Marquee Infinito
    gsap.to(".marquee-inner", { xPercent: -50, repeat: -1, duration: 15, ease: "none" });

    // Scroll Anim per Portfolio
    gsap.from(".portfolio-item", {
        scrollTrigger: { trigger: ".portfolio", start: "top 80%" },
        y: 50, opacity: 0, stagger: 0.2, duration: 1
    });

    // Bottone Magnetico
    const mBtn = document.querySelector(".magnetic-btn");
    mBtn.addEventListener("mousemove", (e) => {
        const pos = mBtn.getBoundingClientRect();
        const mx = e.clientX - pos.left - pos.width / 2;
        const my = e.clientY - pos.top - pos.height / 2;
        gsap.to(mBtn, { x: mx * 0.4, y: my * 0.4, duration: 0.3 });
    });
    mBtn.addEventListener("mouseleave", () => {
        gsap.to(mBtn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    });
});

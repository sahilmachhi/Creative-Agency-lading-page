gsap.registerPlugin(ScrollTrigger);

let servicesList = document.querySelectorAll('.services');

for (let i = 0; i < servicesList.length; i++) {
    gsap.from(".servicesList[i]", {
        y: '100',
        duration: 2.0,
        // opacity:0,
        // stagger: 0.3,
        scrollTrigger: {
            trigger: ".services",
            start: "top center",
            end: "bottom center",
            markers: true,
        },
    });
};

gsap.from ('.logo-section, .list-item,  .navbar-btn', {
    duration: 0.6,
    delay: 0.5,
    translateX : "-10px",
    ease: "power2.out",
    stagger: 0.1,
    opacity:0,
});

gsap.from ('.hero-content', {
    duration: 1,
    x: '100',
    ease: "power2.out",
    opacity:0,
    stagger: 0,
    delay:1.0,
});

gsap.from ('.hero-image-container', {
    duration: 1,
    x: '-100',
    ease: "power2.out",
    opacity:0,
    stagger: 0,
    delay:1.0,
});
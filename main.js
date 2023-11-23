gsap.registerPlugin(ScrollTrigger)

gsap.from ('.list-item, .logo-section, .navbar-btn', {
    duration: 0.8,
    y: '-100',
    
    ease: "power2.out",
    stagger: 0.2,
});

gsap.from ('.hero-content, .about-heading-title, .about-detail-content, .project-heading, .project-img, .contact-content, .contact', {
    duration: 2.8,
    x: '-1000',
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: ".hero-content, .about-heading-title, .contact-content",
});

gsap.from ('.project-content', {
    duration: 2.8,
    x: '100',
    ease: "power2.out",
    // stagger: 0.2,
});
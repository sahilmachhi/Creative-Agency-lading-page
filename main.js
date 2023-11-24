gsap.registerPlugin(ScrollTrigger);

// var tl = gsap.timeline();

// tl.from ('.logo-section, .list-item,  .navbar-btn', {
//     duration: 0.6,
//     delay:0.5,
//     translateX : "-10px",
//     ease: "power2.out",
//     stagger: 0.05,
//     opacity:0,
// });

gsap.from ('.detail', {
    duration: 2.8,
    x: '-1000',
    // ease: "power2.out",
    // stagger: 0.2,
    ScrollTrigger: {
        trigger:'.detail',
        markers:true,
        scroller:"body",
        // start:"top 70%",
        // end:"bottom 90%"
    }
});

// tl.from ('.project-content', {
//     duration: 2.8,
//     x: '100',
//     ease: "power2.out",
//     stagger: 0.2,
// });
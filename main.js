gsap.registerPlugin(ScrollTrigger);

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

let left = gsap.utils.toArray(".left");
console.log(left);
left.forEach(left => {
    gsap.from(left,{
        x:"100",
        opacity: 0,
        duration:1.0,
        ease: "power2.out",
        scrollTrigger: {
            trigger : left,
            // markers: true,
            start: "center 90%",
        }})
});

let right = gsap.utils.toArray(".right");
console.log(right);
right.forEach(right => {
    gsap.from(right,{
        x:"-100",
        opacity: 0,
        duration:1.0,
        ease: "power2.out",
        scrollTrigger: {
            trigger : right,
            // markers: true,
            start: "center 90%",
        }})
});

let topIn = gsap.utils.toArray(".top");
console.log(topIn);
topIn.forEach(topIn => {
    gsap.from(topIn,{
        y:"-100",
        opacity: 0,
        duration:1.0,
        ease: "power2.out",
        scrollTrigger: {
            trigger : topIn,
            // markers: true,
            start: "center 90%",
        }})
});

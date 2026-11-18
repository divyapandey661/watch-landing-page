// Create Timeline

let tl = gsap.timeline();

// Navbar Animation

tl.from(".logo", {
    y: -50,
    opacity: 0,
    duration: 0.8
})

.from("nav a", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
})

.from(".nav-btn", {
    scale: 0,
    opacity: 0,
    duration: 0.5
})

// Heading Animation

.from(".title", {
    x: -100,
    opacity: 0,
    duration: 1
})

// Subtitle Animation

.from(".subtitle", {
    x: -80,
    opacity: 0,
    duration: 0.7
})

// Description Animation

.from(".description", {
    y: 40,
    opacity: 0,
    duration: 0.7
})

// Button Animation

.from(".hero-btn", {
    scale: 0,
    opacity: 0,
    duration: 0.6
})

// Watch Image Animation

.from(".watch", {
    x: 150,
    opacity: 0,
    rotation: 180,
    duration: 1.5
})

// Feature Cards Animation

.from(".card", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3
});


// Continuous Watch Floating Animation

gsap.to(".watch", {
    y: -15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});
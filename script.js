// Shery.mouseFollower();
// Shery.makeMagnet(".magnet");
// Shery.hoverWithMediaCircle(".hvr", {
//   videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
// });

// gsap.to(".fleftelm", {
//   scrollTrigger: {
//     trigger: "#fimages",
//     pin: true,
//     start: "top top",
//     end: "bottom bottom",
//     endTrigger: ".last",
//     scrub: 1,
//   },
//   y: "-300%",
//   ease: Power1,
// });

// let sections = document.querySelectorAll(".fleftelm");
// Shery.imageEffect(".images", {
//   style: 4,
//   config: { onMouse: { value: 1 } },
//   slideStyle: (setScroll) => {
//     sections.forEach(function (section, index) {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         scrub: 1,
//         onUpdate: function (prog) {
//           setScroll(prog.progress + index);
//         },
//       });
//     });
//   },
// });

Shery.mouseFollower(); // No apparent errors

Shery.makeMagnet(".magnet"); // No apparent errors

Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
}); // No apparent errors

gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1.easeInOut, // Corrected the ease parameter to Power1.easeInOut
});

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (self) { // Corrected the parameter name from 'prog' to 'self'
          setScroll(self.progress + index); // Corrected 'prog' to 'self'
        },
      });
    });
  },
}); // No apparent errors

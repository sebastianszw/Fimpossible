gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  scroller: "section",
});

gsap.fromTo(
  "body",
  { opacity: 0 },
  {
    scrollTrigger: "body",
    opacity: 1,
    delay: 0.5,
    ease: Power0.easeNone,
  }
);

/**************************/
/* HERO SECTION */
/**************************/
gsap.fromTo(
  ".hero-content-logos",
  { opacity: 0, y: -50 },
  {
    scrollTrigger: ".section-hero",
    opacity: 1,
    y: 0,
    delay: 1,
    ease: Power0.easeNone,
  }
);

gsap.fromTo(
  ".heading-primary",
  { opacity: 0, y: 50 },
  {
    scrollTrigger: ".section-hero",
    opacity: 1,
    y: 0,
    delay: 1.2,
    ease: Power0.easeNone,
  }
);

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  scroller: "body",
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
/* SECTION HERO */
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

/**************************/
/* SECTION PROJECTS */
/**************************/
gsap.fromTo(
  ".heading-projects",
  { opacity: 0, y: -50 },
  {
    scrollTrigger: ".section-projects",
    opacity: 1,
    y: 0,
    delay: 1,
    ease: Power0.easeNone,
  }
);

gsap.fromTo(
  ".paragrowth",
  { opacity: 0, y: -50 },
  {
    scrollTrigger: ".section-projects",
    opacity: 1,
    y: 0,
    delay: 1.2,
    ease: Power0.easeNone,
  }
);

gsap.fromTo(
  ".specteared",
  { opacity: 0, y: -50 },
  {
    scrollTrigger: ".section-projects",
    opacity: 1,
    y: 0,
    delay: 1.4,
    ease: Power0.easeNone,
  }
);

gsap.fromTo(
  ".fimpossible",
  { opacity: 0, y: -50 },
  {
    scrollTrigger: ".section-projects",
    opacity: 1,
    y: 0,
    delay: 1.6,
    ease: Power0.easeNone,
  }
);

/**************************/
/* SECTION MORE */
/**************************/
gsap.fromTo(
  ".heading-more",
  { opacity: 0, y: -50 },
  {
    scrollTrigger: ".section-more",
    opacity: 1,
    y: 0,
    delay: 1,
    ease: Power0.easeNone,
  }
);

gsap.fromTo(
  ".col-one",
  { opacity: 0, y: -50 },
  {
    scrollTrigger: ".section-more",
    opacity: 1,
    y: 0,
    delay: 1.2,
    ease: Power0.easeNone,
  }
);

gsap.fromTo(
  ".col-two",
  { opacity: 0, y: -50 },
  {
    scrollTrigger: ".section-more",
    opacity: 1,
    y: 0,
    delay: 1.4,
    ease: Power0.easeNone,
  }
);

/**************************/
/* SECTION ABOUT */
/**************************/
gsap.fromTo(
  ".heading-about",
  { opacity: 0, y: -50 },
  {
    scrollTrigger: ".section-about",
    opacity: 1,
    y: 0,
    delay: 1,
    ease: Power0.easeNone,
  }
);

gsap.fromTo(
  ".about-text",
  { opacity: 0, y: -50 },
  {
    scrollTrigger: ".section-about",
    opacity: 1,
    y: 0,
    delay: 1.2,
    ease: Power0.easeNone,
  }
);

gsap.fromTo(
  ".mail-fimpossible-games, .mail-fimpossible-creations",
  { opacity: 0, y: 50 },
  {
    scrollTrigger: ".section-about",
    opacity: 1,
    y: 0,
    delay: 1.4,
    ease: Power0.easeNone,
  }
);

/**************************/
/* FOOTER */
/**************************/
gsap.fromTo(
  ".footer",
  { opacity: 0, y: 50 },
  {
    scrollTrigger: ".section-hero",
    opacity: 1,
    y: 0,
    delay: 1,
    ease: Power0.easeNone,
  }
);

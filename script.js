let tl = gsap.timeline();

tl.from('.line h1', {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});

tl.from('#line-part1', {
  opacity: 0,
  onStart: () => {
    let h5Timer = document.querySelector('#line-part1 h5');
    let grow = 0;
    setInterval(() => {
      if (grow < 100) {
        h5Timer.textContent = grow++;
      } else {
        h5Timer.textContent = grow;
      }
    }, 35);
  },
});
tl.to('.line h2', {
  opacity: 1,
  animationName: 'loaderAnime',
});
tl.to('#loader', {
  opacity: 0,
  duration: 0.2,
  delay: 4,
});
tl.from('#page1', {
  delay: 0.1,
  opacity: 0,
  y: 1600,
  duration: 0.5,
  ease: Power4,
});
tl.to('#loader', {
  display: 'none',
});

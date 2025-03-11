anime({
  targets: "ul.menu li",
  translateX: 250,
  ease: "linear",
  loop: true,
  borderRadius: ["0%", "50%"],
  direction: "alternate",
  duration: 1000,
  delay: anime.stagger(100),
  endDelay: anime.stagger(100),
  // stagger(100) 0.1.초 간격으로 진행되게 하는거임
  scale: {
    value: 2,
    duration: 1600,
    delay: 800,
    easing: "easeInOutQuart",
  },
});

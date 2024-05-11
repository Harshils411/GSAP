var tl = gsap.timeline();

tl.from(".nav h3",{
    y:-100,
    opacity:0,
    duration:1.5,
    stagger:0.5,
    delay:0.2
})
tl.from(".main h1",{
    x:-800,
    opacity:0,
    duration:1.1,
    stagger:0.7,
})
tl.from("img",{
    x:500,
    rotate:45,
    opacity:0,
    duration:1.5,
    stagger:0.8
})
tl.from(".main footer h3", {
    x: -500,
    opacity: 0,
    duration: 0.8,
    stagger: 1,
  });
  
  tl.from(".main footer p", {
    x: -300,
    opacity: 0,
    duration: 0.8,
    stagger: 1,
  });

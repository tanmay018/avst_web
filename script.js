var tl = gsap.timeline();
var t2 = gsap.timeline();


tl.from("#avst", {
  duration: 2,
  ease: "Expo.easeInOut",
  opacity: 0,
  y: -10,
})
  .from(
    "#links",
    {
      duration: 2,
      ease: "Expo.easeInOut",
      opacity: 0,
      y: -10,
    },
    "-=1.5"
  )
  .from(
    "#img",
    {
      duration: 2,
      ease: "Expo.easeInOut",
      opacity: 0,
    },
    "-=2"
  )
  .from(
    "#dets",
    {
      duration: 2,
      ease: "Expo.easeInOut",
      opacity: 0,
      y: -10,
    },
    "-=1.8"
  )

  .from(
    "#prsnt",
    {
      duration: 2,
      ease: "Expo.easeInOut",
      opacity: 0,
    },
    "-=2"
  )
  .from(
    "#avst2",
    {
      duration: 2,
      ease: "Expo.easeInOut",
      opacity: 0,
    },
    "-=2"
  )
  .from(
    "#rags",
  
    {
      duration: 2,
      ease: "Expo.easeInOut",
      opacity: 0,
      x: -15,
    },
    "-=1"
  )
  .from(
    "#right",
    {
      duration: 2,
      ease: "Expo.easeInOut",
      opacity: 0,
      x: 25,
    },
    "-=1.5"
  );


  t2.from(
    "#mera",
    {
      
      duration: 2,
      ease: "Expo.easeInOut",
      opacity: 0,
      y:20,
    },
    
  )
  .from(
    ".prg",
    {

      duration: 2,
      ease: "Expo.easeInOut",
      opacity: 0,
      y:20
    },
    "-=2"
  );

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

$(function () {
  $(".tlt").textillate();
});

drawSvg("#hero #circle svg circle", "#ffff", 5);
drawSvg("#second #link svg path", "#ffe699", 12);

function drawSvg(path, color, speed) {
  var distancePerPoint = speed;
  var drawFPS = 60;

  var orig = document.querySelector(path),
    length,
    timer;
  startDrawingPath();

  function startDrawingPath() {
    length = 0;
    orig.style.stroke = color;
    timer = setInterval(increaseLength, 1000 / drawFPS);
  }

  function increaseLength() {
    var pathLength = orig.getTotalLength();
    length += distancePerPoint;
    orig.style.strokeDasharray = [length, pathLength].join(" ");
    if (length >= pathLength) clearInterval(timer);
  }

  function stopDrawingPath() {
    clearInterval(timer);
    orig.style.stroke = "";
    orig.style.strokeDasharray = "";
  }
}

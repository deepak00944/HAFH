gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


gsap.to("#ca", {
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page2",
    start: "top 65%",
    end: "top -10",
    scrub: 1
  },
  left: "-40%"
})


gsap.to("#upper", {
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    scrub: 3,
    start: "top 0%",
    end: "top -200%",



  },
  top: "-100%"
})

gsap.to("#down", {
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    scrub: 3,
    start: "top -320%",
    end: "top -520%",



  },
  top: "0%"
})

gsap.to("#page6", {
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    scrub: 3,
    start: "top 0%",
    end: "top -520%",
    pin: true
  },

})

gsap.to("#dtline",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#down",
    start:"top -280%",
    end:"top -410%",
    scrub:3

  },

  top:"0"
})

gsap.to("#lline",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#down",
    start:"top -350%",
    end:"top -410%",
    scrub:3

  },

  left:"0"
})

gsap.to("#rline",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#down",
    start:"top -350%",
    end:"top -410%",
    scrub:3

  },

  left:"0"
})


var tl = gsap.timeline()

tl.to("#loader h1",{
  opacity:"1",
  duration:1
  
})

tl.to("#loader h1",{
  opacity:"0",
  duration:0.5
})

tl.to("#loader",{
  top:"-100%",
  duration:2  
})
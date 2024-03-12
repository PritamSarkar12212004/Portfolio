// animation

//locomotive

//gasp
let tin = gsap.timeline();
tin.from(".page1-content>form>h1  ", {
  opacity: 0,
  duration: 1,
  y: -800,
  stagger: 0.5,
});
tin.from(".page1-content>form>input ,.page1-content>button ", {
  opacity: 0,
  duration: 1,
  x: -800,
  stagger: 0.5,
});
tin.to(".page1-content>form>button ", {
  scale: 1.02,
  yoyo: true,
  repeat: -1,
});

// logick
let page1 = document.querySelector(".page1");
let click = document.querySelector("#lets");
let nav = document.querySelector("nav");
let nabbtn = document.querySelectorAll(".navBtn");
click.addEventListener("click", () => {
  page1ani();
  page2anim();
});
function page1ani() {
  gsap.to(".page1", {
    y: -900,
    duration: 2,
  });
}

// nav buttonst

nabbtn.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("ok");
    element.style.backgroundColor = "#583EBC";
    element.style.color = "white";
    // page 2 animation start function
  });
});

// page 2

function page2anim() {
  let p2 = gsap.timeline();
  let side = gsap.timeline();
  p2.from("nav", {
    y: -900,
    duration: 0.5,
    //    delay:1.5,
  });

  gsap.from(".page2-content-main-RIGHT", {
    x: "-100%",
    duration: 1,
  });
  side.from(".page2-content-main-left", {
    x: "100%",
    duration: 1,
  });

  side.from(".page2-content-side>p>img", {
    scale: 0,
    stagger: 0.4,
  });
  // arrow rotate
  let arrow = document.querySelector(".arrow");
  setInterval(() => {
      gsap.from(".arrow", {
          rotate: 360,
          duration: 1,
        });
  }, 4000);
}

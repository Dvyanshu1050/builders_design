let tl = gsap.timeline();

tl
    .from(".bottom", {

        onStart: function () {
            $('.bottom').textillate({
                in: {
                    effect: 'fadeInLeft',
                    callback: function () {
                        $('.bottom').textillate('out')
                    }
                },
                out: { effect: 'fadeOutRight' }
            });
        }
    })
    .from(".secondBottom", {
        opacity: 0,
        delay: 1,
        onStart: function () {
            $('.secondBottom').textillate({
                in: {
                    effect: 'fadeInLeft',
                    callback: function () {
                        $('.secondBottom').textillate('out')
                    }
                },
                out: { effect: 'fadeOutRight' }
            });
        }
    })

    .from(".secondTop", {
        opacity: 0,
        delay: 1,


        onStart: function () {
            $('.secondTop').textillate({
                in: {
                    effect: 'fadeInLeft',
                    callback: function () {
                        $('.secondTop').textillate('out')
                    }
                },
                out: { effect: 'fadeOutRight' }
            });
        }
    })
    .from(".top", {
        opacity: 0,
        delay: 1,



        onStart: function () {
            $('.top').textillate({
                in: {
                    effect: 'fadeInLeft',
                    callback: function () {
                        $('.top').textillate('out')
                    }
                },
                out: { effect: 'fadeOutRight' }
            });
        }
    })
    .from([".brand-name", ".logo"], {
        opacity: 0,
        delay: 1.3,
        y: 10,
        duration: 1,
    })

    .to(".top-screen", {
        top: "-200%",
        delay: 1,
        duration: 1.2,
        ease: "Power4.easeOut"
    })



// -------------------------------------Page 1----------------------------------------

gsap.from([".p1-Head h1", ".p1-Head h6"], {
    y: 40,
    opacity: 0,
    delay: 8.6,
    ease: "Power4.easeOut"


})
//  let page1= document.querySelector(".page1")
// let crsr= document.querySelector(".crsr");
// page1.addEventListener("mousemove",(event)=>{
//        crsr.style.left= event.x +30 + "px";
//        crsr.style.top= event.y +30 + "px";
//     })

// -------------------------------------Page 2----------------------------------------

let page2= document.querySelector(".page2");
let logoPage1= document.querySelector(".logoPage1");
let p1Ul= document.querySelector(".p1-ul");

page2.addEventListener("mouseenter",()=>{
    logoPage1.style.color="white"
    p1Ul.style.color="white"
})
page2.addEventListener("mouseleave",()=>{
    logoPage1.style.color="black"
    p1Ul.style.color="black"
})





// -------------------------------------Page 6----------------------------------------

let projectDiv2 = document.querySelector(".projectDiv2")
let projectDiv3 = document.querySelector(".projectDiv3")
let projectDiv4 = document.querySelector(".projectDiv4")
let projectDiv5 = document.querySelector(".projectDiv5")
let projectDiv6 = document.querySelector(".projectDiv6")


let p6Text = document.querySelector(".p6Text")
let p6Text2 = document.querySelector(".p6Text2")
let p6Text3 = document.querySelector(".p6Text3")
let p6Text4 = document.querySelector(".p6Text4")
let p6Text5 = document.querySelector(".p6Text5")
let p6Text6 = document.querySelector(".p6Text6")
let p6Text7 = document.querySelector(".p6Text7")
let p6Text8 = document.querySelector(".p6Text8")
let p6Text9 = document.querySelector(".p6Text9")
let p6Text10 = document.querySelector(".p6Text10")

projectDiv2.addEventListener("mouseover", () => {
    p6Text.style.color = "white"
    p6Text2.style.color = "white"
    projectDiv2.style.border = "none"
})
projectDiv2.addEventListener("mouseleave", () => {
    p6Text.style.color = "black"
    p6Text2.style.color = "black"
    projectDiv2.style.border = "1.5px solid #E4E4E4"

})


projectDiv3.addEventListener("mouseover", () => {
    p6Text3.style.color = "white"
    p6Text4.style.color = "white"
    projectDiv3.style.border = "none"

})
projectDiv3.addEventListener("mouseleave", () => {
    p6Text3.style.color = "black"
    p6Text4.style.color = "black"
    projectDiv3.style.border = "1.5px solid #E4E4E4"

})

projectDiv4.addEventListener("mouseover", () => {
    p6Text5.style.color = "white"
    p6Text6.style.color = "white"
})
projectDiv4.addEventListener("mouseleave", () => {
    p6Text5.style.color = "black"
    p6Text6.style.color = "black"
})

projectDiv5.addEventListener("mouseover", () => {
    p6Text7.style.color = "white"
    p6Text8.style.color = "white"
})
projectDiv5.addEventListener("mouseleave", () => {
    p6Text7.style.color = "black"
    p6Text8.style.color = "black"
})

projectDiv6.addEventListener("mouseover", () => {
    p6Text9.style.color = "white"
    p6Text10.style.color = "white"
})
projectDiv6.addEventListener("mouseleave", () => {
    p6Text9.style.color = "black"
    p6Text10.style.color = "black"
})



// ---------------------------------ScrollTrigger-----------------------------
// -------------Top screen---------------------------

gsap.from(".p1-bgImg", {
    y: 20,
    opacity: 0,
    delay: 8.7,
    duration: 0.5,

})

// -----------------------Page 2------------------------

gsap.from(".p2-slogan", {
    scrollTrigger: {
        trigger: ".p2-slogan",
        scroller: "body",
        start: "top 90%",
        scrub: 5,
        end: "bottom 80%"
    },
    y: 15,
    opacity: 0,
    duration: 0.5,

})

// ----------------------Page3-----------------------------


gsap.to(".p3-right", {
    scrollTrigger: {
        trigger: ".p3-right",
        scroller: "body",
        start: "top 70%",
        scrub: 5,
    },
    y: 180,
    // opacity:0,
    // duration:1,

})

// ----------------------Page5-----------------------------


gsap.to(".p5-img3", {
    scrollTrigger: {
        trigger: ".p5-img3",
        scroller: "body",
        start: "top 50%",
        scrub: 1,
        // pin:".p5-img3",
        // pinSpacing:true,

        // end:"bottom 80%"
    },

    scale: 3.2,

})

// ---------------------page 7---------------------------------

gsap.to(".p7-h1-1", {
    scrollTrigger: {
        trigger: ".p7-h1-1",
        start: "top 88%",
    },
    left: "9%",

})
gsap.to(".p7-h1-2", {
    scrollTrigger: {
        trigger: ".p7-h1-2",
        start: "top 88%",
    },
    right: "5%",

})


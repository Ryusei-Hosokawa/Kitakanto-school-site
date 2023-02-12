'use strict';

// Loading screen movement //
// Viewing history
if(!sessionStorage.getItem('visited')) {
    sessionStorage.set
};

// Navigation //
// Navigation clickAction 
// Processing on toggle button click
const navBtn = document.querySelector(".nav_btn");
const navWrap = document.querySelector(".nav_wrap");

// Menu button click
navBtn.addEventListener('click', () => {
    // Menu display
    navBtn.classList.toggle("active");
    navWrap.classList.toggle("open");
});
// Processing on link click
const navLists = document.querySelectorAll(".nav_link");
navLists.forEach((navList) => {
    navList.addEventListener('click', () => {
        navBtn.classList.remove("active");
        navWrap.classList.remove("open");
    });
});


// Scroll up & down
let setScrollPosition = 0;
window.addEventListener('scroll' , () => {
    if(setScrollPosition < document.documentElement.scrollTop) {
        console.log(`down`);
        navBtn.classList.add("fade_out");
        navBtn.classList.remove("fade_in");
    } else {
        console.log(`up`);
        navBtn.classList.remove("fade_out");
        navBtn.classList.add("fade_in");
    }
    setScrollPosition = document.documentElement.scrollTop;
});









// Opening title animaetion //
// Cursor position acquisition
const heroKitakan = document.querySelectorAll(".hero_kitakan");
const heroSchool = document.querySelectorAll(".hero_school");
const heroSapporo = document.querySelectorAll(".hero_sapporo");

gsap.set(heroKitakan,{
    // opacity: 0,
    y: -100,
    opacity:0,
});

gsap.set(heroSchool,{
    // opacity: 0,
    y: -100,
    opacity:0,
});

gsap.set(heroSapporo,{
    // opacity: 0,
    y: -100,
    opacity:0,
});

// Processing from finish loading //
window.onload = () => { 
// Loading screen processing
    setTimeout(() => {
        const loading = document.querySelector(".loading");
        loading.classList.add("loading_finish");
    }, 3000);
    setTimeout(() => {
        navBtn.classList.add("fade_in_first");
    }, 4000);
    
    // Hero title timeline animation //
    const heroDuration = 3;
    const horizontalTime = 5;
    const baseBlue = '#104C80';
    const accentColor = '#ED9405';
    const textWhite = '#f5f3f3';
    const titleWrap = document.querySelector(".title_wrap");
    const horizontalEasing = 'ease: CustomEase.create("custom", "M0,0,C0,0,0.023,0.173,0.045,0.276,0.05,0.301,0.058,0.319,0.07,0.34,0.077,0.355,0.085,0.37,0.1,0.375,0.352,0.46,0.586,0.52,0.875,0.612,0.891,0.617,0.904,0.623,0.915,0.634,0.928,0.648,0.936,0.664,0.945,0.683,0.955,0.707,0.96,0.725,0.965,0.751,0.981,0.846,1,1,1,1"),';

    // Vertical movement animation
    const tlLoad = gsap.timeline({repeat: 0, repeatDelay: 0});
    
    tlLoad
    .to(heroKitakan, {
        y:0,
        opacity:1,
        ease: "power4.out",
    },heroDuration)
    
    .to(heroSchool, {
        y:0,
        opacity:1,
        ease: "power4.out",
    })
    .to(heroSapporo, {
        y:0,
        opacity:1,
        ease: "power4.out",
    })
    // Horizontal movement animation
    .to(heroKitakan, {
        x: 0,
        ease: horizontalEasing,
    },horizontalTime)
    
    .to(heroSchool, {
        x: 150,
        ease: horizontalEasing,
    },horizontalTime)

    .to(heroSapporo, {
        x: -120,
        ease: horizontalEasing,
    },horizontalTime)

    //Changes color
    .to(titleWrap, {
        backgroundColor: baseBlue,
        ease: horizontalEasing,
    },horizontalTime + 0.6)
    
    .to(heroKitakan, {
        color: textWhite,
        ease: horizontalEasing,
    }, horizontalTime + 0.1)

    .to(heroSchool, {
        color: textWhite,
        ease: horizontalEasing,
    }, horizontalTime + 0.1)

    .to(heroSapporo, {
        color: accentColor,
        ease: horizontalEasing,
    }, horizontalTime + 0.1)

    // Screen unfix
    setTimeout(() => {
        const body = document.querySelector("body");
            body.classList.remove("display_fixde");
    }, 6500);
};





// ".main_wrap"background-color change 
const mainWrap = document.querySelector(".main_wrap");
const baseText = '#393939';
const accentColor = '#ED9405';
const titleAboutH1 = document.querySelector(".title_about h1");
const titleAboutH2 = document.querySelector(".title_about h2");
const helloKitakan = document.querySelector("#hello_kitakan");
const helloKitakanWrapH2 = document.querySelector(".hello_kitakan_wrap h2");
const aboutTedtMain = document.querySelector(".text_about .text_main");
const animationTargets = document.querySelectorAll(".animation_target");

// About title animation
let once = false;
    window.addEventListener('scroll', () => {
        const titleAboutPosition = titleAboutH1.getBoundingClientRect().top;
            if(titleAboutPosition <= window.innerHeight * 0.5 && once !== true) {
                once = true;
                console.log(`work`);
                mainWrap.style.cssText = `
                    background: var(--base_white);
                `
                titleAboutH1.style.cssText = `
                    color: var(--base_text);
                `
                titleAboutH2.style.cssText = `
                    color: var(--base_text);
                `
            };
        });
        
// About text animation    
// // Element positioning and scroll animation
document.addEventListener('scroll', () => {
    animationTargets.forEach(animationTarget => {
        const getElementDistance = animationTarget.getBoundingClientRect().top;
        if(getElementDistance < window.innerHeight * 0.7) {
            animationTarget.classList.add("textShow");
            console.log(`!`);
        };
    });
});

// Gsap ScrollTrgger//
// Hello kitakan scroll 
const sectionAbout = document.querySelector("#about");
const lessonDesk = document.querySelector(".lesson_desk");

gsap.to(helloKitakanWrapH2, {
    scale: 100,
    rotationZ:100, 
    ease: 'sine.inOut',
    scrollTrigger: {
        trigger: helloKitakanWrapH2,
        start: '200% 70%',
        end: '200% top',
        scrub: 1.5,
        markers: false,
    }
});

// About animation //
const titleAbout = document.querySelector(".title_about");

gsap.fromTo(titleAbout, {
    scale: 0.2,
    opacity: 0,
    ease: 'sine.inOut',
    },{
    scale: 1,
    opacity: 1,
    ease: 'sine.inOut',
    scrollTrigger: {
        trigger: sectionAbout,
        start: 'top bottom',
        end: 'top 53%',
        scrub: false,
        markers: false,
    }
});

gsap.fromTo(lessonDesk, {
    x: -200,
    ease: 'sine.inOut',
    },{
    x: 200,
    ease: 'sine.inOut',
    scrollTrigger: {
        trigger: lessonDesk,
        start: '100% 50%',
        end: '100% top',
        scrub: true,
        markers: false,
    }
});
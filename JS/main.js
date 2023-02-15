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
const startBlue = '#64a4dc';

gsap.set(heroKitakan,{
    y: -100,
    opacity:0,
    color: startBlue,
});

gsap.set(heroSchool,{
    y: -100,
    opacity:0,
    color: startBlue,
});

gsap.set(heroSapporo,{
    y: -100,
    opacity:0,
    color: startBlue,
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
const textWhite = '#f5f3f3';
const titleAboutH1 = document.querySelector(".title_about h1");
const titleAboutH2 = document.querySelector(".title_about h2");
const helloKitakan = document.querySelector("#hello_kitakan");
const helloKitakanWrapH2 = document.querySelector(".hello_kitakan_wrap h2");
const animationTargets = document.querySelectorAll(".animation_target");

// About title animation
window.addEventListener('scroll', () => {
const titleAboutPosition = titleAboutH1.getBoundingClientRect().top;
    if(titleAboutPosition <= window.innerHeight * 0.5) {
        console.log(`white`);
        mainWrap.style.cssText = `
            background: var(--base_white);
            transition: 0.4s;
        `
        titleAboutH1.style.cssText = `
            color: var(--base_text);
            transition: 0.4s;
        `
        titleAboutH2.style.cssText = `
            color: var(--base_text);
            transition: 0.4s;
        `
    } else if(titleAboutPosition <= window.innerHeight * 0.95) {
        console.log(`blue`);
        mainWrap.style.cssText = `
            background: var(--base_blue);
            transition: 0.4s;
        `
        titleAboutH1.style.cssText = `
            color: var(--text_white);
            transition: 0.4s;
        `
        titleAboutH2.style.cssText = `
            color: var(--base_blue);
            transition: 0.4s;
        `
    } else {
        console.log(`black`);
        mainWrap.style.cssText = `
            background: var(--main_wrap_color);
        `
        titleAboutH1.style.cssText = `
            color: var(--text_white);
            transition: 0.4s;
        `
        titleAboutH2.style.cssText = `
            color: var(--text_white);
            transition: 0.4s;
        `
    };
});

// About text animation    
// // Element positioning and scroll animation
const tlaboutM = gsap.timeline();
const tlaboutS = gsap.timeline();

gsap.set( animationTargets,{
    opacity: 0,
});

let tlAboutMOnce = false;
let tlAboutSOnce = false;
window.addEventListener('scroll', () => {
    const aboutTextMain = document.querySelector(".text_about .text_main");
    const aTM1 = document.querySelector(".text_main_1");
    const aTM2 = document.querySelector(".text_main_2");
    const aTM3 = document.querySelector(".text_main_3");
    const aTM4 = document.querySelector(".text_main_4");
    const aTM5 = document.querySelector(".text_main_5");
    const aTM6 = document.querySelector(".text_main_6");
    //About text main position
    const aTMP = aboutTextMain.getBoundingClientRect().top;
    // about text time line animation diray
    const aTMD = 1.2;

    if(aTMP <= window.innerHeight * 0.7 && tlAboutMOnce === false) {
        console.log(`about text main gsap!!!!`);
        tlAboutMOnce = true;
        tlaboutM
        .to(aTM1, aTMD,{
            opacity: 1,
            ease: 'Power3.easeOut',
        }, 0)

        .to(aTM2, aTMD,{
            opacity: 1,
            ease: 'Power3.easeOut',
        }, 0.2)

        .to(aTM3, aTMD,{
            opacity: 1,
            ease: 'Power3.easeOut',
        }, 0.4)

        .to(aTM4, aTMD,{
            opacity: 1,
            ease: 'Power3.easeOut',
        }, 0.6)

        .to(aTM5, aTMD,{
            opacity: 1,
            ease: 'Power3.easeOut',
        }, 0.8)

        .to(aTM6, aTMD,{
            opacity: 1,
            ease: 'Power3.easeOut',
        }, 1)
        //change color orange
        .fromTo(textMain1, {
            color: baseText,
            ease: 'Power3.easeOut',
        },{
            color: accentColor,
            ease: 'Power3.easeOut',
        }, 1.4);
    };
    
    // About sub text animation
    const aboutTextSub = document.querySelector(".text_about .text_sub");
    const aTS1 = document.querySelector(".text_sub_1");
    const aTS2 = document.querySelector(".text_sub_2");
    const aTS3 = document.querySelector(".text_sub_3");
    const aTS4 = document.querySelector(".text_sub_4");
    const aTS5 = document.querySelector(".text_sub_5");
    const aTS6 = document.querySelector(".text_sub_6");
    const aTS7 = document.querySelector(".text_sub_7");
    const aTS8 = document.querySelector(".text_sub_8");
    const aTS9 = document.querySelector(".text_sub_9");
    const aTS10 = document.querySelector(".text_sub_10");
    //About text sub position
    const aTSP = aboutTextSub.getBoundingClientRect().top;
    //About text sub animation diray
    const aTSD = 1.2;

    if(aTSP <= window.innerHeight * 0.6 && tlAboutSOnce === false) {
        console.log(`about text sub gsap!!!!`);
        tlAboutSOnce = true;
        tlaboutS
        .to(aTS1, aTSD,{
            opacity: 1,
            ease: 'Power3.easeOut',
        }, 0)
    
        .to(aTS2, aTSD,{
            opacity: 1,
            ease: 'Power3.easeOut',
        }, 0.2)
    
        .to(aTS3, aTSD,{
            opacity: 1,
            ease: 'Power3.easeOut',
        }, 0.4)
    
        .to(aTS4, aTSD,{
            opacity: 1,
            ease: 'Power3.easeOut',
        }, 0.6)
    
        .to(aTS5, aTSD,{
            opacity: 1,
            ease: 'Power3.easeOut',
        }, 0.8)
    
        .to(aTS6, aTSD,{
            opacity: 1,
            ease: 'Power3.easeOut',
        }, 1)

        .to(aTS7, aTSD,{
            opacity: 1,
            ease: 'Power3.easeOut',
        }, 1.2)

        .to(aTS8, aTSD,{
            opacity: 1,
            ease: 'Power3.easeOut',
        }, 1.4)

        .to(aTS9, aTSD,{
            opacity: 1,
            ease: 'Power3.easeOut',
        }, 1.6)

        .to(aTS10, aTSD,{
            opacity: 1,
            ease: 'Power3.easeOut',
        }, 1.8)
        //change color orange
        .fromTo(textSub9, {
            color: textWhite,
            ease: 'Power3.easeOut',
        },{
            color: accentColor,
            ease: 'Power3.easeOut',
        }, 2.2);
    };
});

//About_background_blue_box animation
const aBBB = document.querySelector(".about_background_blue_box");
const lessonDesk = document.querySelector(".lesson_desk");
let aBBBOnce = false;

gsap.set(lessonDesk ,{
    x: -1000,
    ease: 'Power4.easeOut',
});

window.addEventListener('scroll', () => {
    const aBBBPosition = aBBB.getBoundingClientRect().top;
    if(aBBBPosition <= window.innerHeight * 0.8 && aBBBOnce === false) {
        console.log(`about background animation!!!`);
        aBBBOnce = true;
        gsap.to(lessonDesk, 0.8,{
           x: 0,
           ease: 'Power4.easeOut',  
        }),
        aBBB.style.cssText = `
            width: 100vw;
            transition: 1.2s 0.5s cubic-bezier(0.135, 0.53, 0.139, 0.974);
        `
    };
});




// Section job //
const sectionJob = document.querySelector("#job");
const titleJob = document.querySelector(".title_job");
const titleJobH1 = document.querySelector(".title_job h1");
const titleJobH2 = document.querySelector(".title_job h2");
const textJb = document.querySelector(".title_job h2");
const textJob = document.querySelector(".title_job h2");

// Job title animation
window.addEventListener('scroll', () => {
    const titleJobPosition = titleJobH1.getBoundingClientRect().top;
        if(titleJobPosition <= window.innerHeight * 0.5) {
            console.log(`job white`);
            sectionJob.style.cssText = `
                background: var(--base_white);
                transition: 0.4s;
            `
            titleJobH1.style.cssText = `
                color: var(--base_text);
                transition: 0.4s;
            `
            titleJobH2.style.cssText = `
                color: var(--base_text);
                transition: 0.4s;
            `
        } else {
            console.log(`job blue`);
            sectionJob.style.cssText = `
                background: var(--base_blue);
                transition: 0.4s;
            `
            titleJobH1.style.cssText = `
                color: var(--text_white);
                transition: 0.4s;
            `
            titleJobH2.style.cssText = `
                color: var(--base_blue);
                transition: 0.4s;
            `
        };

// Job title animation

    const textJobPosition = textJob.getBoundingClientRect().top;
        if(titleJobPosition <= window.innerHeight * 0.5) {
            console.log(`job white`);
            sectionJob.style.cssText = `
                background: var(--base_white);
                transition: 0.4s;
            `
            titleJobH1.style.cssText = `
                color: var(--base_text);
                transition: 0.4s;
            `
            titleJobH2.style.cssText = `
                color: var(--base_text);
                transition: 0.4s;
            `
        } else {
            console.log(`job blue`);
            sectionJob.style.cssText = `
                background: var(--base_blue);
                transition: 0.4s;
            `
            titleJobH1.style.cssText = `
                color: var(--text_white);
                transition: 0.4s;
            `
            titleJobH2.style.cssText = `
                color: var(--base_blue);
                transition: 0.4s;
            `
        };
    });
    
// Gsap ScrollTrgger//
// Hello kitakan scroll 
const sectionAbout = document.querySelector("#about");

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
// Title animetion
const titleAbout = document.querySelector(".title_about");

gsap.set(titleAbout, {
    scale: 0,
    opacity: 0,
});

gsap.fromTo(titleAbout, {
    scale: 0,
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

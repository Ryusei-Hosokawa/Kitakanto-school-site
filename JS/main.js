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
        navBtn.classList.add("fade_out");
        navBtn.classList.remove("fade_in");
    } else {
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
        mainWrap.style.cssText = `
            background: var(--base_white);
            transition: 0.5s;
        `
        titleAboutH1.style.cssText = `
            color: var(--base_text);
            transition: 0.5s;
        `
        titleAboutH2.style.cssText = `
            opacity: 0.8;
            color: var(--base_text);
            transition: 0.5s;
        `
    } else if(titleAboutPosition <= window.innerHeight * 0.95) {
        mainWrap.style.cssText = `
            background: var(--base_blue);
            transition: 0.5s;
        `
        titleAboutH1.style.cssText = `
            color: var(--text_white);
            transition: 0.5s;
        `
        titleAboutH2.style.cssText = `
            color: var(--base_blue);
            transition: 0.5s;
        `
    } else {
        mainWrap.style.cssText = `
            background: var(--main_wrap_color);
        `
        titleAboutH1.style.cssText = `
            color: var(--text_white);
            transition: 0.5s;
        `
        titleAboutH2.style.cssText = `
            color: var(--text_white);
            transition: 0.5s;
        `
    };
});

// About text animation    
// // Element positioning and scroll animation
const tlaboutM = gsap.timeline();
const tlaboutS = gsap.timeline();

gsap.set( animationTargets,{
    opacity: 0,
    x: -100,
});

let tlAboutMOnce = false;
let tlAboutSOnce = false;
const aTMEase = 'Power3.easeOut';
window.addEventListener('scroll', () => {
    const aboutTextMain = document.querySelector(".text_about .text_main");
    const aTM1 = document.querySelector(".text_about .text_main_1");
    const aTM2 = document.querySelector(".text_about .text_main_2");
    const aTM3 = document.querySelector(".text_about .text_main_3");
    const aTM4 = document.querySelector(".text_about .text_main_4");
    const aTM5 = document.querySelector(".text_about .text_main_5");
    const aTM6 = document.querySelector(".text_about .text_main_6");
    //About text main position
    const aTMP = aboutTextMain.getBoundingClientRect().top;
    // about text time line animation diray
    const aTAD = 1.2;

    if(aTMP <= window.innerHeight * 0.7 && tlAboutMOnce === false) {
        tlAboutMOnce = true;

        tlaboutM
        .to(aTM1, aTAD,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        }, 0)

        .to(aTM2, aTAD,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        }, 0.2)

        .to(aTM3, aTAD,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        }, 0.4)

        .to(aTM4, aTAD,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        }, 0.6)

        .to(aTM5, aTAD,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        }, 0.8)

        .to(aTM6, aTAD,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        }, 1)
        //change color orange
        .fromTo(aTM1, aTAD,{
            color: baseText,
            ease: aTMEase,
        },{
            color: accentColor,
            ease: aTMEase,
        }, 1.4);
    };
    
    // About sub text animation
    const aboutTextSub = document.querySelector(".text_about .text_sub");
    const aTS1 = document.querySelector(".text_about .text_sub_1");
    const aTS2 = document.querySelector(".text_about .text_sub_2");
    const aTS3 = document.querySelector(".text_about .text_sub_3");
    const aTS4 = document.querySelector(".text_about .text_sub_4");
    const aTS5 = document.querySelector(".text_about .text_sub_5");
    const aTS6 = document.querySelector(".text_about .text_sub_6");
    const aTS7 = document.querySelector(".text_about .text_sub_7");
    const aTS8 = document.querySelector(".text_about .text_sub_8");
    const aTS9 = document.querySelector(".text_about .text_sub_9");
    const aTS10 = document.querySelector(".text_about .text_sub_10");
    //About text sub position
    const aTSP = aboutTextSub.getBoundingClientRect().top;
    //About text sub animation diray
    const aTSD = 1.2;

    if(aTSP <= window.innerHeight * 0.6 && tlAboutSOnce === false) {
        tlAboutSOnce = true;
        tlaboutS
        .to(aTS1, aTSD,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        }, 0)
    
        .to(aTS2, aTSD,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        }, 0.2)
    
        .to(aTS3, aTSD,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        }, 0.4)
    
        .to(aTS4, aTSD,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        }, 0.6)
    
        .to(aTS5, aTSD,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        }, 0.8)
    
        .to(aTS6, aTSD,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        }, 1)

        .to(aTS7, aTSD,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        }, 1.2)

        .to(aTS8, aTSD,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        }, 1.4)

        .to(aTS9, aTSD,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        }, 1.6)

        .to(aTS10, aTSD,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        }, 1.8)
    };
});

//About_background_blue_box animation
const aBBB = document.querySelector(".about_background_blue_box");
const aboutPhoto = document.querySelector(".lesson_desk");
let aBBBOnce = false;

gsap.set(aboutPhoto,{
    opacity: 0,
    x: -300,
    ease: 'Power4.easeOut',
});

window.addEventListener('scroll', () => {
    const aBBBPosition = aBBB.getBoundingClientRect().top;
    if(aBBBPosition <= window.innerHeight * 0.8 && aBBBOnce === false) {
        aBBBOnce = true;
        gsap.to(aboutPhoto, 1,{
            opacity: 1,
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
const textJob = document.querySelector(".text_job");
const titleWrap = document.querySelector(".title_wrap");
const flexJob = document.querySelector(".flex_job");
const jobTextMain = document.querySelector(".flex_job .text_main");
const jobPhoto = document.querySelector(".w_pc");
const jobLink = document.querySelector(".job_link");
const jTM1 = document.querySelector(".text_job .text_main_1");
const jTM2 = document.querySelector(".text_job .text_main_2");
const jTM3 = document.querySelector(".text_job .text_main_3");
const jTM4 = document.querySelector(".text_job .text_main_4");
const jTM5 = document.querySelector(".text_job .text_main_5");
const jTS1 = document.querySelector(".text_job .text_sub_1");
const jTS2 = document.querySelector(".text_job .text_sub_2");
const jTS3 = document.querySelector(".text_job .text_sub_3");
const jTS4 = document.querySelector(".text_job .text_sub_4");
const jTS5 = document.querySelector(".text_job .text_sub_5");
const jTS6 = document.querySelector(".text_job .text_sub_6");

const tlJob = gsap.timeline();
gsap.set(jobPhoto, {
    opacity: 0,
    x: -500,
});
// Job title animation
window.addEventListener('scroll', () => {
    const titleJobPosition = titleJobH1.getBoundingClientRect().top;
    if(titleJobPosition <= window.innerHeight * 0.45) {
        sectionJob.style.cssText = `
            background: var(--base_white);
            transition: 0.5s;
            `
            titleJobH1.style.cssText = `
            color: var(--base_text);
            transition: 0.5s;
            `
            titleJobH2.style.cssText = `
            color: var(--base_text);
            transition: 0.5s;
            `
            titleWrap.style.cssText = `
            opacity: 0;
            transition: 0.5s;
            `
        } else {
            sectionJob.style.cssText = `
            background: var(--base_blue);
            transition: 0.5s;
            `
            titleJobH1.style.cssText = `
            color: var(--text_white);
            transition: 0.5s;
            `
            titleJobH2.style.cssText = `
            color: var(--base_blue);
            transition: 0.5s;
            `
            titleWrap.style.cssText = `
            opacity: 1;
            background: var(--base_blue);
            transition: 0.5s;
            `
        };
        
    // job flex and text animation
    //text job animation dilay
    const jTAD = 1.2;
    let jFAOnce = false;
    const textJobPosition = textJob.getBoundingClientRect().top;
    if(textJobPosition <= window.innerHeight * 0.3 && jFAOnce === false) {
        jFAOnce = true;
        
        tlJob
        .to(jobPhoto,0.5,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        })        
            
        .to(jTM1,jTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },0.2)

        .to(jTM2,jTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },0.4)

        .to(jTM3,jTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },0.6)

        .to(jTM4,jTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },0.8)

        .to(jTM5,jTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },1)

        .to(jTS1,jTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },1.2)

        .to(jTS2,jTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },1.4)

        .to(jTS3,jTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },1.6)

        .to(jTS4,jTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },1.8)

        .to(jTS5,jTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },2)

        .to(jTS6,jTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },2.2)
        //change color orange
        .fromTo(jTM5,{
            color: baseText,
            ease: aTMEase,
        },{
            color: accentColor,
            ease: aTMEase,
        },1.4)

        .fromTo(jobLink,jTAD,{
            opacity: 0,
            y: 10,
            ease: aTMEase,
        },{
            opacity: 1,
            y: 0,
            ease: aTMEase,
        },2.4)
    };
});

// Section course //
const sectionCourse = document.querySelector("#course");
const titleCourse = document.querySelector(".title_course");
const titleCourseH1 = document.querySelector(".title_course h1");
const titleCourseH2 = document.querySelector(".title_course h2");
const courseTextMain = document.querySelector("#course .text_main");
const coursePhoto = document.querySelector(".lesson_time");
const courseLink = document.querySelector(".course_link");
const cTM1 = document.querySelector("#course .text_main_1");
const cTM2 = document.querySelector("#course .text_main_2");
const cTM3 = document.querySelector("#course .text_main_3");
const cTS1 = document.querySelector("#course .text_sub_1");
const cTS2 = document.querySelector("#course .text_sub_2");
const cTS3 = document.querySelector("#course .text_sub_3");
const cTS4 = document.querySelector("#course .text_sub_4");
const cTS5 = document.querySelector("#course .text_sub_5");
const cTS6 = document.querySelector("#course .text_sub_6");
const cTS7 = document.querySelector("#course .text_sub_7");

// One-time animation only
let cAOnce = false;

const tl = gsap.timeline();

gsap.set(coursePhoto,{
    opacity: 0,
    x: 500,
    ease: aTMEase,
});

// course title animation
window.addEventListener('scroll', () => {
    const titleCoursePosition = titleCourseH1.getBoundingClientRect().top;
    if(titleCoursePosition <= window.innerHeight * 0.45) {
        sectionCourse.style.cssText = `
        background: var(--base_blue);
        transition: 0.5s;
        `
        titleCourseH1.style.cssText = `
        color: var(--text_white);
        transition: 0.5s;
        `
        titleCourseH2.style.cssText = `
        color: var(--text_white);
        transition: 0.5s;
        `
        titleWrap.style.cssText = `
        opacity: 0;
        transition: 0.5s;
        `
    } else {
        sectionCourse.style.cssText = `
        background: var(--base_white);
        transition: 0.5s;
        `
        titleCourseH1.style.cssText = `
        color: var(--base_text);
        transition: 0.5s;
        `
        titleCourseH2.style.cssText = `
        color: var(--base_white);
        transition: 0.5s;
        `
        titleWrap.style.cssText = `
        opacity: 1;
        background: var(--base_blue);
        transition: 0.5s;
        `
    };
    
    // Course and text animation
    //text course animation dilay
    const cTAD = 1.2;
    const textCoursePosition = courseTextMain.getBoundingClientRect().top;
    if(textCoursePosition <= window.innerHeight * 0.3 && cAOnce === false) {
        console.log(`after!!!!!!!!!!!!!!!!!!!!!!`);
        cAOnce = true;
        
        tl  
        .to(cTM1, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        })

        .to(cTM2, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },0.2)

        .to(cTM3, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },0.4)

        .to(cTS1, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },0.6)

        .to(cTS2, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },0.8)

        .to(cTS3, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },1)

        .to(cTS4, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },1.2)

        .to(cTS5, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },1.4)

        .to(cTS6, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },1.6)

        .to(cTS7, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },1.8)

        .to(coursePhoto, cTAD,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        },2.2)
        //change color orange
        .fromTo(cTM3,{
            color: textWhite,
            ease: aTMEase,
        },{
            color: accentColor,
            ease: aTMEase,
        },0.6) 

        .fromTo(courseLink,{
            opacity: 0,
            y: 10,
            ease: aTMEase,
        },{
            opacity: 1,
            y: 0,
            ease: aTMEase,
        },2.4) 
    };
});


// Section secondary //
const sectionSecondary = document.querySelector(".secondary");
const secondaryB = document.querySelector(".secondary_blue");
const secondaryW = document.querySelector(".secondary_white");
const secondaryTextB = document.querySelector(".secondary_blue h2");
const secondaryTextW = document.querySelector(".secondary_white h2");
const secondaryPhotoB = document.querySelector(".corridor");
const secondaryPhotoW = document.querySelector(".book");
const TB1 = document.querySelector(".text_divisio_ji_7");
const TB2 = document.querySelector(".text_divisio_shin_8");
const TB3 = document.querySelector(".text_divisio_su_10");
const TB4 = document.querySelector(".text_divisio_ki_11");
const TB5 = document.querySelector(".text_divisio_ru_12");
const TW1 = document.querySelector(".text_divisio_tano_1");
const TW2 = document.querySelector(".text_divisio_shi_2");
const TW3 = document.querySelector(".text_divisio_ku_3");
const TW4 = document.querySelector(".text_divisio_shi_6");
const TW5 = document.querySelector(".text_divisio_x_7");
const TW6 = document.querySelector(".text_divisio_ka_8");
const TW7 = document.querySelector(".text_divisio_ri_9");

// One-time animation only
let sPBAOnce = false;
let sPWAOnce = false;

// secondary title animation
window.addEventListener('scroll', () => {
    const secondaryTextBPosition = secondaryTextB.getBoundingClientRect().top;
    if(secondaryTextBPosition <= window.innerHeight * 0.6) {
        secondaryB.style.cssText = `
        background: var(--base_white);
        ease: in-out;
        transition: 0.5s;
        `
        secondaryW.style.cssText = `
        background: var(--base_blue);
        ease: in-out;
        transition: 0.5s;
        `
        secondaryPhotoB.style.cssText = `
        transfrom: translateX(0);
        ease: in-out;
        transition: 0.5s;
        `
        secondaryPhotoW.style.cssText = `
        transfrom: translateX(0);
        ease: in-out;
        transition: 0.5s;
        `
        secondaryTextB.style.cssText = `
        color: var(--base_text);
        transfrom: translateX(0);
        ease: in-out;
        transition: 0.5s;
        `
        secondaryTextW.style.cssText = `
        color: var(--text_white);
        transfrom: translateX(0);
        ease: in-out;
        transition: 0.5s;
        `
    } else {
        secondaryB.style.cssText = `
        background: var(--base_blue);
        ease: in-out;
        transition: 0.5s;
        `
        secondaryW.style.cssText = `
        background: var(--base_white);
        ease: in-out;
        transition: 0.5s;
        `
        secondaryPhotoB.style.cssText = `
        transfrom: translateX(45.588vw);
        ease: in-out;
        transition: 0.5s;
        `
        secondaryPhotoW.style.cssText = `
        transfrom: translateX(0);
        ease: in-out;
        transition: 0.5s;
        `
        secondaryTextB.style.cssText = `
        color: var(--text_white);
        transfrom: translateX(45.588vw);
        ease: in-out;
        transition: 0.5s;
        `
        secondaryTextW.style.cssText = `
        color: var(--base_text);
        transfrom: translateX(-45.588vw);
        ease: in-out;
        transition: 0.5s;
        `    
    };
    
    // Secondary text animation
    const secondaryPhotoBPosition = secondaryPhotoB.getBoundingClientRect().top;
    const secondaryPhotoWPosition = secondaryPhotoW.getBoundingClientRect().top;
    if(secondaryPhotoBPosition <= window.innerHeight * 0.3 && sPBAOnce === false) {
        console.log(`after!!!!!!!!!!!!!!!!!!!!!!`);
        sPBAOnce = true;
        secondaryPhotoB.classList.add("corridor_active");
    };
    if(secondaryPhotoWPosition <= window.innerHeight * 0.3 && sPWAOnce === false) {
        console.log(`after!!!!!!!!!!!!!!!!!!!!!!`);
        sPWAOnce = true;
        secondaryPhotoW.classList.add("book_active");
    };
});












// Section apply //
const sectionApply = document.querySelector("#apply");
const applyTextH1 = document.querySelector(".title_apply h1");
const applyTextH2 = document.querySelector(".title_apply h2");
const apTM1 = document.querySelector(".text_apply text_main_1");
const apTM2 = document.querySelector(".text_apply text_main_2");
const apTM3 = document.querySelector(".text_apply text_main_3");
const apTS1 = document.querySelector(".text_apply .text_sub_1");
const apTS2 = document.querySelector(".text_apply .text_sub_2");
const apTS3 = document.querySelector(".text_apply .text_sub_3");
const apTS4 = document.querySelector(".text_apply .text_sub_4");
const apTS5 = document.querySelector(".text_apply .text_sub_5");
const apTS6 = document.querySelector(".text_apply .text_sub_6");
const apTS7 = document.querySelector(".text_apply .text_sub_7");
const apTS8 = document.querySelector(".text_apply .text_sub_8");
const apTS9 = document.querySelector(".text_apply .text_sub_9");
const apTS10 = document.querySelector(".text_apply .text_sub_10");
const apTS11 = document.querySelector(".text_apply .text_sub_11");
const apTS12 = document.querySelector(".text_apply .text_sub_12");
const apTS13 = document.querySelector(".text_apply .text_sub_13");

// One-time animation only 
let apTMAOnce = false;
let apTSAOnce = false;

// secondary title animation
window.addEventListener('scroll', () => {
    const applyTextH1Position = applyTextH1.getBoundingClientRect().top;
    if(applyTextH1Position <= window.innerHeight * 0.5) {
        sectionApply.style.cssText = `
        background: var(--base_white);
        ease: in-out;
        transition: 0.5s;
        `
        applyTextH1.style.cssText = `
        color: var(--base_text);
        ease: in-out;
        transition: 0.5s;
        `
        applyTextH2.style.cssText = `
        color: var(--base_text);
        ease: in-out;
        transition: 0.5s;
        `
    } else {
        sectionApply.style.cssText = `
        background: var(--base_blue);
        ease: in-out;
        transition: 0.5s;
        `
        applyTextH1.style.cssText = `
        color: var(--base_white);
        ease: in-out;
        transition: 0.5s;
        `
        applyTextH2.style.cssText = `
        color: var(--base_blue);
        ease: in-out;
        transition: 0.5s;
        `
    };
    
    const applyTextPosition = applyText.getBoundingClientRect().top;
    if(applyTextPosition <= window.innerHeight * 0.5) {

        tl  
        .to(cTM1, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        })

        .to(cTM2, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },0.2)

        .to(cTM3, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },0.4)

        .to(cTS1, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },0.6)

        .to(cTS2, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },0.8)

        .to(cTS3, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },1)

        .to(cTS4, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },1.2)

        .to(cTS5, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },1.4)

        .to(cTS6, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },1.6)

        .to(cTS7, cTAD,{
            opacity:1,
            x: 0,
            ease: aTMEase,
        },1.8)

        .to(coursePhoto, cTAD,{
            opacity: 1,
            x: 0,
            ease: aTMEase,
        },2.2)
        //change color orange
        .fromTo(cTM3,{
            color: textWhite,
            ease: aTMEase,
        },{
            color: accentColor,
            ease: aTMEase,
        },0.6) 

        .fromTo(courseLink,{
            opacity: 0,
            y: 10,
            ease: aTMEase,
        },{
            opacity: 1,
            y: 0,
            ease: aTMEase,
        },2.4) 
    };
});

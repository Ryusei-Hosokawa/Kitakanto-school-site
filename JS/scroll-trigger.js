

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

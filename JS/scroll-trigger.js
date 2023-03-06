

// Gsap ScrollTrgger//
// Hello kitakan scroll
const sectionAbout = document.querySelector("#about");
const titleAbout = document.querySelector(".title_about");
if (window.matchMedia('(max-width: 428px)').matches) { //Mobile
    gsap.to(helloKitakanWrapH2, {
        scale: 400,
        rotationZ:180, 
        ease: 'sine.inOut',
        scrollTrigger: {
            trigger: helloKitakanWrapH2,
            start: '200% top',
            end: '500% top',
            scrub: 1.5,
            markers: false,
        }
    }); 
} else if (window.matchMedia('(min-width:429px)').matches && window.matchMedia('(max-width: 1024px)').matches) { //Tablet
    gsap.to(helloKitakanWrapH2, {
        scale: 400,
        rotationZ:180, 
        ease: 'sine.inOut',
        scrollTrigger: {
            trigger: helloKitakanWrapH2,
            start: '200% top',
            end: '500% top',
            scrub: 1.5,
            markers: false,
        }
    });    
} else { //PC
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
};






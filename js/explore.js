/*==================================================

RUNNING RICE
EXPLORE PAGE

==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initStickyHeader();

    initScrollReveal();

    initCounterAnimation();

    initParallaxHero();

    initSmoothScroll();

    initGalleryHover();

    initFaqAccordion();

});



/*==================================================

STICKY HEADER

==================================================*/

function initStickyHeader(){

    const header = document.querySelector(".header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 80){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    });

}



/*==================================================

SCROLL REVEAL

==================================================*/

function initScrollReveal(){

    const elements=document.querySelectorAll(

        ".stat-card,.story-image,.story-content,.value-card,.experience-card,.journey-item,.gallery-item,.testimonial-card,.faq-wrapper details,.cta-content"

    );

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    elements.forEach(el=>{

        el.classList.add("fade-up");

        observer.observe(el);

    });

}



/*==================================================

COUNTER

==================================================*/

function initCounterAnimation(){

    const numbers=document.querySelectorAll(".stat-card h2");

    let started=false;

    function runCounter(){

        if(started) return;

        const section=document.querySelector(".statistics");

        const top=section.getBoundingClientRect().top;

        if(top<window.innerHeight-120){

            started=true;

            numbers.forEach(counter=>{

                const target=parseInt(

                    counter.innerText.replace(/\D/g,'')

                );

                let value=0;

                const speed=Math.max(20,target/80);

                const update=()=>{

                    value+=speed;

                    if(value>=target){

                        counter.innerText=target.toLocaleString()+"+";

                    }else{

                        counter.innerText=

                        Math.floor(value).toLocaleString()+"+";

                        requestAnimationFrame(update);

                    }

                };

                update();

            });

        }

    }

    window.addEventListener("scroll",runCounter);

    runCounter();

}



/*==================================================

PARALLAX HERO

==================================================*/

function initParallaxHero(){

    const hero=document.querySelector(".hero-image");

    if(!hero) return;

    window.addEventListener("scroll",()=>{

        let y=window.pageYOffset;

        hero.style.transform=

        `translateY(${y*0.35}px) scale(1.08)`;

    });

}



/*==================================================

SMOOTH SCROLL

==================================================*/

function initSmoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(

                this.getAttribute("href")

            );

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}



/*==================================================

GALLERY EFFECT

==================================================*/

function initGalleryHover(){

    const gallery=document.querySelectorAll(".gallery-item");

    gallery.forEach(item=>{

        item.addEventListener("mousemove",(e)=>{

            const img=item.querySelector("img");

            const rect=item.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            const rotateY=(x-rect.width/2)/18;

            const rotateX=(rect.height/2-y)/18;

            img.style.transform=

            `scale(1.08) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        });

        item.addEventListener("mouseleave",()=>{

            const img=item.querySelector("img");

            img.style.transform="scale(1)";

        });

    });

}



/*==================================================

FAQ

==================================================*/

function initFaqAccordion(){

    const details=document.querySelectorAll(

        ".faq-wrapper details"

    );

    details.forEach(target=>{

        target.addEventListener("toggle",()=>{

            if(target.open){

                details.forEach(item=>{

                    if(item!==target){

                        item.removeAttribute("open");

                    }

                });

            }

        });

    });

}



/*==================================================

ACTIVE MENU

==================================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.clientHeight;

        if(window.scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(

            current &&

            link.getAttribute("href").includes(current)

        ){

            link.classList.add("active");

        }

    });

});



/*==================================================

BACK TO TOP

==================================================*/

const back=document.createElement("div");

back.className="back-top";

back.innerHTML="↑";

document.body.appendChild(back);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        back.classList.add("show");

    }else{

        back.classList.remove("show");

    }

});

back.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



/*==================================================

PRELOADER (OPTIONAL)

==================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});



/*==================================================

END

==================================================*/
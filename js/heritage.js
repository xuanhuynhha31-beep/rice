/*=========================================
RUNNING RICE
HERITAGE PAGE
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    initLoader();

    initHeader();

    initBackToTop();

    initReveal();

    initModal();

    initCounter();

    initSmoothScroll();

});



/*=========================================
LOADER
=========================================*/

function initLoader(){

    const loader = document.querySelector(".page-loader");

    if(!loader) return;

    window.addEventListener("load",()=>{

        loader.classList.add("hide");

    });

}



/*=========================================
HEADER
=========================================*/

function initHeader(){

    const header = document.querySelector(".header");

    if(!header) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 80){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    });

}



/*=========================================
BACK TO TOP
=========================================*/

function initBackToTop(){

    const btn = document.querySelector(".back-to-top");

    if(!btn) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 600){

            btn.classList.add("show");

        }else{

            btn.classList.remove("show");

        }

    });

    btn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}



/*=========================================
REVEAL
=========================================*/

function initReveal(){

    const items = document.querySelectorAll(

        ".section-title,.story-section,.timeline-section,.artifact-card,.artisan-story,.gallery-item,.number-item,.visit-content"

    );

    if(items.length===0) return;

    const observer = new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold:.15

        }

    );

    items.forEach(item=>{

        item.classList.add("reveal");

        observer.observe(item);

    });

}



/*=========================================
BOOKING MODAL
=========================================*/

function initModal(){

    const modal=document.querySelector(".booking-modal");

    if(!modal) return;

    const openBtns=document.querySelectorAll("[data-booking]");

    const closeBtns=document.querySelectorAll("[data-close-modal]");

    openBtns.forEach(btn=>{

        btn.addEventListener("click",(e)=>{

            e.preventDefault();

            modal.classList.add("active");

            document.body.style.overflow="hidden";

        });

    });

    closeBtns.forEach(btn=>{

        btn.addEventListener("click",()=>{

            modal.classList.remove("active");

            document.body.style.overflow="";

        });

    });

    window.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            modal.classList.remove("active");

            document.body.style.overflow="";

        }

    });

}



/*=========================================
COUNTER
=========================================*/

function initCounter(){

    const numbers=document.querySelectorAll(".number-item h2");

    if(numbers.length===0) return;

    const observer=new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    animate(entry.target);

                    observer.unobserve(entry.target);

                }

            });

        },

        {

            threshold:.5

        }

    );

    numbers.forEach(number=>{

        observer.observe(number);

    });

}



function animate(el){

    const text=el.innerText;

    const value=parseInt(text.replace(/\D/g,""));

    const suffix=text.replace(/[0-9]/g,"");

    let start=0;

    const speed=25;

    const timer=setInterval(()=>{

        start++;

        el.innerText=start+suffix;

        if(start>=value){

            el.innerText=value+suffix;

            clearInterval(timer);

        }

    },speed);

}



/*=========================================
SMOOTH SCROLL
=========================================*/

function initSmoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",(e)=>{

            const id=link.getAttribute("href");

            if(id==="#" || id==="#bookingModal") return;

            const target=document.querySelector(id);

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        });

    });

}



/*=========================================
ACTIVE MENU
=========================================*/

const sections=document.querySelectorAll("section[id]");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        if(window.scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

import "../styles/style.css";
import "../styles/header.css";
import "../styles/home.css";
import "../styles/favorites.css";
import "../styles/swiper-bundle.min.css";
import "../styles/care-banner.css";
import "../styles/products.css";
import "../styles/contact.css";
import "../styles/footer.css";

/*====== show menu =====*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*  menu show  */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*===== remove menu mobile =====*/
const navLink =document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu= document.getElementById('nav-menu')
    // when we click on each link. we remove the show menu 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

   /*===== shadow header =====*/
const shadowHeader =() =>{
    const header= document.getElementById('header')
    //add a class if the button offset is freater than 50of the view
    this.scrollY<= 50 ? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header')     
} 
window.addEventListener('scroll', shadowHeader)

         /*===== swiper favorite  =====*/

const swiperFavorites = new Swiper('favorites__swiper', {
    loop: true,
    grabCursor: true, 
    slidesPreView: 'auto', 
    centeredSlides: 'auto', 
  })



     /*==========   Show scroll up   ==========*/

const scrollUp =() =>{
    const scroolUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewpoint height,
    // add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        :  scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



   /*==========    Scroll sections active link    ==========*/
 
   const sections = document.querySelectorAll('section[id]')

   const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(curret =>{
        const sectionHeight = curret.offsetHeight,
              sectionTop = curret.offsetTop - 58,
              sectionId = curret.gotAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[herf*=' + sectionId + ']')
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        } else{
            sectionsClass.classList.remove('active-link')
        }
    })
   }
window.addEventListener('scroll', scrollActive)




/*==========   Scroll reveal animation   ==========*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
   // reset: true,// Animationa repeat
})

sr.reveal('.home__data, .favorites__container, .footer__container')
sr.reveal('.home__circle, .home__img', {delay: 600, scale: .5})
sr.reveal('.home__chips-1, .home__chpis-2, .home__chips-3', {delay: 1000, interval: 100})
sr.reveal('.home__leaf', {delay: 1200})
sr.reveal('.home__tomato-1, .home__tomato-2', {delay:1400, interval: 100})
sr.reveal('.care__img, contact__img', {origin: 'left'})
sr.reveal('.care__list, .contact__data', {origin: 'right'})
sr.reveal('.banner__item, .products__card', {interval: 100})
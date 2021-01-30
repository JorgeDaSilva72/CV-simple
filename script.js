//NAVBAR
let lastScrolltop=0;
navbar = document.getElementById('menuNav');
window.addEventListener('scroll',function(){
    const scrollTop = window.pageTOffset || 
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrolltop) {
        navbar.style.top="-50px";
      
    }else{
        navbar.style.top="0";
      
    }
    lastScrolltop = scrollTop;

  })
//TYPED
var typed = new Typed('.typed', {
    strings: ["Bonjour, je m'appelle Jorge.", "Je suis diplômé d'une école d'ingénieur l'ENSEA et je souhaite exercer dans le développement web partie front end.", "Je maitrise en particulier le HTML, CSS, le langage javascript et le framework React et je souhaiterais vous faire profiter de mes compétences."],
    typeSpeed: 30,
    loop:true
  });

//AOS
  AOS.init();
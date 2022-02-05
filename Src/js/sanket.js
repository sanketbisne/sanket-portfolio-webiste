const navToggle= document.querySelector('.nav-toggle');
const navLinks=document.querySelectorAll('.nav__link');

//Every time click button, add class
navToggle.addEventListener('click',() =>{
    document.body.classList.toggle('nav-open');
    console.log('clicky');
});

//Close nav bar when nav link clicked
navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open');
    })
});
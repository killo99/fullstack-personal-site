$(document).ready(function(){
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Fullstack Web Developer", "Mobile App Developer", "Penetration Tester", "UI/UX Designer", "Software Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["I'm a Developer", "I'm a Designer", "I'm a CEH", "I ❤ Python", "I'm a Freelancer"],
        typeSpeed: 120,
        backSpeed: 60,
        loop: true
    });

    const social = document.getElementById('social', );
    const card = document.getElementById("card");
    const details = document.getElementById("details");
    const imgbox = document.getElementById("img_box");

    const socialClick = document.getElementById('social').onclick = function(){
        card.style.height='350px'

        details.style.transform = "translateY(0px)";
        content.style.transform = "translateY(0px)";

        imgbox.style.width='250px';
        imgbox.style.height='250px'
    }

    // hover card
    card.addEventListener('mouseenter', () => card.style.height='350px');
    card.addEventListener('mouseenter', () => details.style.transform = "translateY(0px)");
    card.addEventListener('mouseenter', () => imgbox.style.width='250px');
    card.addEventListener('mouseenter', () => imgbox.style.height='250px');

    // mouseleave card
    card.addEventListener('mouseleave', () => card.style.height='190px');
    card.addEventListener('mouseleave', () => details.style.transform = "translateY(145px)");
    card.addEventListener('mouseleave', () => imgbox.style.width='150px');
    card.addEventListener('mouseleave', () => imgbox.style.height='150px');
});
// Sticky navbar function
window.addEventListener('scroll', ()=> {
    let navBar = document.querySelector('.top-nav')
    let navLink = document.querySelectorAll('.nav-link')

    navBar.classList.toggle('nav-active', window.scrollY >= 800);
    navLink.forEach((n) => n.classList.toggle("nav-active", window.scrollY >= 800)
	);
})

// Mountain Schedule selection function
let mountainLabel1 = document.querySelector('#label-mountain1');
let mountainLabel2 = document.querySelector("#label-mountain2");
let mountainInput1 = document.querySelector('#mountain1');
let mountainInput2 = document.querySelector("#mountain2");

mountainLabel1.addEventListener('click', ()=> {
    mountainLabel1.classList.toggle("active");
    mountainLabel2.classList.remove("active");
    mountainInput2.checked = false;
});

mountainLabel2.addEventListener("click", () => {
    mountainLabel2.classList.toggle("active");	
	mountainLabel1.classList.remove("active");
    mountainInput1.checked = false;
});


if(mountainInput1.checked = true) {
    mountainLabel1.classList.toggle("active");
}
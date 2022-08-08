const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
/* header bg change */
// const header = document.querySelector("header");

// header.addEventListener("click", function(e){
//     header.style.backgroundColor = "white"
// });

/* ----------------------------------------------------- */
/* 1 */
// let burger = document.getElementById('burger'),
// 	 nav    = document.getElementById('menu'),
// 	 slowmo = document.getElementById('slowmo');

// burger.addEventListener('click', function(e){
// 	this.classList.toggle('active');
// 	nav.classList.toggle('active');
// });

// slowmo.addEventListener('click', function(e){
// 	this.classList.toggle('is-slowmo');
// });

// /* Onload demo - dirty timeout */
// let clickEvent = new Event('click');

// window.addEventListener('load', function(e) {
// 	slowmo.dispatchEvent(clickEvent);
// 	burger.dispatchEvent(clickEvent);
	
// 	setTimeout(function(){
// 		burger.dispatchEvent(clickEvent);
		
// 		setTimeout(function(){
// 			slowmo.dispatchEvent(clickEvent);
// 		}, 3500);
// 	}, 5500);
// });

/* 2 */
// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggleButton.addEventListener('click', () => {
//   toggleButton.classList.toggle('active')
//   navbarLinks.classList.toggle('active')
// })


/* 3 */
// let menu       = document.querySelector('.menu')
// let menuButton = document.querySelector('.menu-button')

// menuButton.addEventListener('click', function() {
//   let menuIsClosed = !menu.classList.contains('opened')

//   if (menuIsClosed) {
//     menu.classList.add('opened')
//   } else {
//     menu.classList.remove('opened')
//   }
// })
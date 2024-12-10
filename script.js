let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  searchForm.classList.remove('active');
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle('show');
  }
window.onscroll = () =>{
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  searchForm.classList.remove('active');
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
var style = document.createElement('style');
        var position = 'right';
        style.innerHTML = `
        @keyframes my-animation{
        0%{${position}:${document.querySelector('.text').offsetWidth + 10}px;}
        100%{${position}: 100%}
        }`;
        document.head.append(style);

// Function to decrement the value
function decrement() {
  var input = document.getElementById('number-input');
  var currentValue = parseInt(input.value);

  if (!isNaN(currentValue) && currentValue > 0) {
      input.value = currentValue - 1;
  }
}

// Function to increment the value
function increment() {
  var input = document.getElementById('number-input');
  var currentValue = parseInt(input.value);

  if (!isNaN(currentValue)) {
      input.value = currentValue + 1;
  }
}

    const toggleButton = document.getElementById('toggle-btn');
    const dataSection = document.getElementById('data-section');

    toggleButton.addEventListener('click', () => {
        dataSection.classList.toggle('hidden');

        if (dataSection.classList.contains('hidden')) {
            toggleButton.textContent = 'See More >';
        } else {
            toggleButton.textContent = 'See Less <';
        }
    });


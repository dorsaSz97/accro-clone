const header = document.querySelector('header');
let mouseEnter;

// Navigation bg-color
document.addEventListener('scroll', function () {
  let windowScroll = window.scrollY;
  if (windowScroll > 100 || (windowScroll <= 100 && mouseEnter == true)) {
    header.style.backgroundColor = '#fff';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

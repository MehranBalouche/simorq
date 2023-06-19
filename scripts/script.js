// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
let $ = document;
let navbarElem = $.getElementById('navbar'); 
console.log(navbarElem);
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if ($.body.scrollTop > 50 || $.documentElement.scrollTop > 50) {
    navbarElem.classList.add('shadow-sm');
  } else {
    navbarElem.classList.remove('shadow-sm');
  }
}
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
let $ = document;
let navbarElem = $.getElementById('navbar'); 
let moveTopBtnElem = $.getElementById('moveTopBtn');
console.log(moveTopBtnElem);

moveTopBtnElem.addEventListener('click', backToTop);

window.onscroll = function () {
  scrollFunction();
};


function scrollFunction() {
  if ($.body.scrollTop > 50 || $.documentElement.scrollTop > 50) {
    navbarElem.classList.add('shadow-sm');
  } else {
    navbarElem.classList.remove('shadow-sm');
  }

  if ($.body.scrollTop > 250 || $.documentElement.scrollTop > 250){
    moveTopBtnElem.style.display = 'block';
  }else{
    moveTopBtnElem.style.display = 'none';

  }
}


function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
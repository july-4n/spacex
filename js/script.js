var headerToggle = document.querySelector('.page-header__toggle');
var navToggle = document.querySelector('.page-header__nav');
var body = document.querySelector('body');


headerToggle.addEventListener('click', function(event) {
  headerToggle.classList.toggle('active');
  navToggle.classList.toggle('active');
  body.classList.toggle('lock');
});

function mainScreen(){

  var mainScreen = document.querySelectorAll('.main-screen');
  for (var i = 0; i < mainScreen.length; i++) {
    if(mainScreen[i].querySelector('img')){
      mainScreen[i].style.backgroundImage = 'url('+mainScreen[i].querySelector('img').getAttribute('src')+')';
    }
  };
}

mainScreen();

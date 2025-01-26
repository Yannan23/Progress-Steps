const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const line = document.querySelector('.line');

nextButton.addEventListener('click', function () {
    console.log('Next button clicked');
    line.style.setProperty('--counter-border-color', 'red');

});

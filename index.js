const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const lines = document.querySelectorAll('.line');

const lineCount = lines.length + 1;
// console.log(lineCount);

let currentActive = 1;

nextButton.addEventListener('click', function () {
    // console.log('Next button clicked');
    currentActive++;

    if (currentActive > lineCount) {
        currentActive = lineCount;
    }
    update();

});

prevButton.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
});

function update() {
    lines.forEach((line, i) => {
        if (i === 0 || i < currentActive) {
            line.style.setProperty('--counter-border-color', '#4379e4');
            line.style.setProperty('--bg-color', '#4379e4');

        } else {
            line.style.setProperty('--counter-border-color', '#E5E7EB');
            line.style.setProperty('--bg-color', '#E5E7EB');

        }

        if (i < currentActive - 1) {
            line.style.setProperty('--bg-color', '#4379e4');
        } else {
            line.style.setProperty('--bg-color', '#E5E7EB');
        }

        updateButtonStates();
    });


    // if (currentActive === 1) {
    //     prevButton.classList.add('disabled');
    //     // nextButton.classList.add('active');
    // } else if (currentActive === lineCount) {
    //     nextButton.classList.add('disabled')
    // } else {
    //     prevButton.classList.add('active');
    //     nextButton.classList.add('active');
    // }

    function updateButtonStates() {
        // Reset all button states first
        prevButton.classList.remove('disabled', 'active');
        nextButton.classList.remove('disabled', 'active');

        if (currentActive === 1) {
            prevButton.classList.add('disabled');
            nextButton.classList.add('active');
        } else if (currentActive === lineCount - 1) {
            prevButton.classList.add('active');
            nextButton.classList.add('disabled');
        } else {
            prevButton.classList.add('active');
            nextButton.classList.add('active');
        }
    }


    // if (currentActive === 1) {
    //     prevButton.disabled = true;
    // } else if (currentActive === lineCount) {
    //     nextButton.disabled = true;
    // } else {
    //     prevButton.disabled = false;
    //     nextButton.disabled = false;
    // }
}

update();
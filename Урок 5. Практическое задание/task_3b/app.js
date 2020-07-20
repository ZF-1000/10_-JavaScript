const modal = document.querySelector('.wrap');
const closeBtn = document.querySelector('span');
const showBtn = document.querySelector('button');


showBtn.addEventListener('click', function () {
    modal.classList.remove('rollOut', 'hidden');
    modal.classList.add('animated', 'rollIn');
});

closeBtn.addEventListener('click', function () {
    modal.classList.remove('rollIn');
    modal.classList.add('rollOut');
    // анимация (animation-duration) длится в течении 1 сек, поэтому нужно подождать 1 сек
    setTimeout(function () {
        modal.classList.add('hidden');
    }, 1000);
});
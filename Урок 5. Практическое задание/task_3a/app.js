const modal = document.querySelector('.wrap'); // объект модального окна с классом '.wrap'
const closeBtn = document.querySelector('span'); // тег 'span' для закрытия окна
const showBtn = document.querySelector('button'); // кнопка для показа модального окна

// обработчик события клика на кнопку показа модального окна, удаляет у модального окна класс hidden
showBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
});
// обработчик события клика на кнопку закрытия модального окна, удаляет у модального окна класс hidden
closeBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
});
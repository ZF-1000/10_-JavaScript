const buttons = document.querySelectorAll('button');
// handleClick - обработчик клика
// каждой кнопке назначаем слушателя события
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    })
});

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode; // получаем родительский элемент кнопок
    // clickedButtonEvent.target - получаем саму кнопку
    // clickedButtonEvent.target.parentNode - получаем родительский элемент кнопки, т.е. div

    // информация о карточке по которой произошёл клик
    const card = {
        wrap: cardNode, // элемент с классом .product. Обёртка, т.е. вся карточка целиком
        img: cardNode.querySelector('img'), // картинка внутри .product
        productName: cardNode.querySelector('.productName'), // .productName, который внутри .product
        button: cardNode.querySelector('button'), // button, который внутри .product
    };

    // получаем текст на кнопке, которая внутри .product
    const textOnButton = card.button.innerText;
    if (textOnButton === 'Подробнее') {
        showMoreText(card);
    } else if (textOnButton === 'Отмена') {
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    card.img.style.display = 'block'; // отображается картинка
    card.wrap.querySelector('.desc').remove(); // внутри .product находим элемент с классом .desc и удаляем его (подробное описание удаляем)
    card.button.innerText = 'Подробнее'; // меняем внутренний текст кнопки ('Отмена' => 'Подробнее')
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    card.img.style.display = 'none'; // скрываем картинку
    const text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
    // вставляем текст описания после div-а
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    card.button.innerText = 'Отмена'; // меняем внутренний текст кнопки ('Подробнее' => 'Отмена')
}
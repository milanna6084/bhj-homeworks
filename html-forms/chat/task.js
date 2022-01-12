const widgetElement = document.querySelector('.chat-widget');
const inputElement = document.getElementById('chat-widget__input');
const messagesElement = document.getElementById('chat-widget__messages');
const answersElement = ['Ждем Вас после всех праздников',
    'Товары закончились, но есть скидки',
    'Не забудьте рассказать о нас Вашим друзьям',
    'Вы самый несносный клиент',
    'Сколько можно Вам повторять',
    'Я думаю',
];
let indexInterval;
let clickCounter = 0;

widgetElement.addEventListener('click', function () {
    widgetElement.classList.add('chat-widget_active');
    if (clickCounter === 0) {
        indexInterval = setInterval(() => addMessage('botQuestion'), 30000);
    }
    clickCounter += 1;
});

function addMessage(author) {
    const date = new Date();
    const hours = checkTwoDigit(date.getHours());
    const minutes = checkTwoDigit(date.getMinutes());
    const seconds = checkTwoDigit(date.getSeconds());

    function checkTwoDigit(x) {
        return (x < 10) ? `0${x}` : x;
    }

    function createMessage(text, className) {
        return `<div class="message ${className || ''}">
            <div class="message__time">${hours}:${minutes}:${seconds}</div>
            <div class="message__text">${text}</div>
        </div>`;
    }

    if (author === 'client') {
        messagesElement.innerHTML += createMessage(inputElement.value, 'message_client');
    } else if (author === 'botAnswer') {
        let answerIndex = Math.floor(Math.random() * answersElement.length);

        messagesElement.innerHTML += createMessage(answersElement[answerIndex]);
    }
    else {
        messagesElement.innerHTML += createMessage('Я могу Вам помочь?');
    }

    messagesElement.scrollIntoView(false);
}

document.addEventListener('keydown', function (event) {
    if ((inputElement.value) && (event.code === 'Enter')) {
        addMessage('client');
        clearInterval(indexInterval);
        inputElement.value = '';
        addMessage('botAnswer');
        indexInterval = setInterval(() => addMessage('botQuestion'), 30000);
    }
});
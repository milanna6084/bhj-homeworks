const question = document.getElementById('poll__title');
const answer = document.getElementById('poll__answers');
const url = ' https://netology-slow-rest.herokuapp.com/poll.php';

function loadPollItem(url) {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', getAnswer);
    xhr.responseType = 'json';

    function getAnswer() {
        
        if (xhr.readyState !== xhr.DONE && xhr.status !== 200) {
            return;
        }
        const { title, answers } = xhr.response.data;

        question.innerText = title;

        answers.forEach(element => {
            answer.insertAdjacentHTML("afterend",
                `<button class="poll__answer">
                    ${element}
                </button>`);
        });

        const answerItems = document.querySelectorAll('.poll__answer');

        answerItems.forEach(element => {
            element.addEventListener('click', function () {
                alert('Спасибо, Ваш голос засчитан!');
            });
        });  
    }

    xhr.open('Get', url);
    xhr.send();
}
loadPollItem(url);
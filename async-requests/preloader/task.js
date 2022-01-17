const imgLoader = document.getElementById('loader');
const currencyList = document.getElementById('items');
const url = 'https://netology-slow-rest.herokuapp.com';

function loadCurrencyList(url) {

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState !== xhr.DONE || xhr.status !== 200) {
            return;
        }

        const listObj = xhr.response.response.Valute;

        imgLoader.classList.remove('loader_active');

        for (item in listObj) {
            const { CharCode, Value } = listObj[item];

            currencyList.insertAdjacentHTML("afterend",
                `<div class="item">
                <div class="item__code">
                    ${CharCode}
                </div>
                <div class="item__value">
                    ${Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`);
        }
    });

    xhr.responseType = 'json';

    xhr.open('Get', url);
    xhr.send();
}

loadCurrencyList(url);
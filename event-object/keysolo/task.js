class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timeElement = container.querySelector('.status__time');
    this.wordLength;
    this.newWord = true;

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    const newThis = this; 
    let indexTimeInter;

    document.addEventListener('keydown', function(event) {
      if (newThis.newWord) {
        indexTimeInter = setInterval(() => {
          if (newThis.timeElement.textContent <= 0) {
            newThis.fail(indexTimeInter); 
            return;
          }
          
          newThis.timeElement.innerText = newThis.timeElement.textContent - 1;
        }, 1000);

        newThis.newWord = false;
      }

      if (event.code[3] === newThis.currentSymbol.textContent.toUpperCase()) {
        newThis.success(indexTimeInter);
      } else {
        newThis.fail(indexTimeInter);
      }
    });

    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
    */
  }

  success(index) {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }

    this.setNewWord();
    clearInterval(index);
  }

  fail(index) {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }

    this.setNewWord();
    clearInterval(index);
  }

  setNewWord() {
    const word = this.getWord();

    this.newWord = true;
    this.renderWord(word);
    this.wordLength = this.wordElement.querySelectorAll('.symbol').length;
    this.timeElement.textContent = this.wordLength;
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'));
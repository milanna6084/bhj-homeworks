const lost = document.getElementById('lost');
const dead = document.getElementById('dead');

function checkMole() {
    if (this.className === 'hole hole_has-mole') {
        dead.innerText = +dead.textContent + 1;

        if (dead.textContent >= 10) {
            alert('You are win!');
            dead.textContent = 0;
            lost.textContent = 0;
        }

        return;
    }
    
    lost.innerText = +lost.textContent + 1;

    if (lost.textContent >= 5) {
        alert('Game over!');
        lost.textContent = 0;
        dead.textContent = 0;
    }
}

for (let index = 1; index < 10; index++) { 
    const getHole = index => document.getElementById(`hole${index}`);
    getHole(index).onclick = checkMole; 
}
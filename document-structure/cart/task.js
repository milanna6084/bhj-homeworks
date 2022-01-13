const controls = document.querySelectorAll('.product__quantity-controls');
const productAdd = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart__products');

controls.forEach(element => {
    element.addEventListener('click', function (e) {
        if ((e.target === this.children[0])
            && (+this.children[1].textContent > 0)) {
            this.children[1].innerText = +this.children[1].textContent - 1;
        } else if (e.target === this.children[2]) {
            this.children[1].innerText = +this.children[1].textContent + 1;
        }
    });
});

productAdd.forEach(element => {
    element.addEventListener('click', function (e) {
        let product = this.closest('.product');
        let productId = product.dataset.id;
        let productImg = product.querySelector('img').getAttribute('src');
        let productQuantity = product.querySelector('.product__quantity-value').textContent.trim();

        if (+productQuantity === 0) {
            return;
        }

        const item = Array.from(cart.children).find(i => i.dataset.id === productId);

        if (item) {
            let itemCount = item.querySelector('.cart__product-count');
            itemCount.innerText = +itemCount.textContent + (+productQuantity);
            return;
        }
    
        cart.insertAdjacentHTML('afterBegin', `<div class="cart__product" data-id=${productId}>
        <img class="cart__product-image" src=${productImg}>
        <div class="cart__product-count">${productQuantity}</div>
        </div>`);
    });
});

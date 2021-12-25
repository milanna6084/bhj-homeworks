const menuItemElements = document.querySelectorAll('.menu__item');

function showSubMenu() {
    let subMenus = this.closest('ul').querySelectorAll('ul.menu_sub');
    let activeSubMenu = this.closest('li').querySelector('ul.menu_sub');

    if (activeSubMenu.className === 'menu menu_sub') {
        for (element of subMenus) {
            element.className = 'menu menu_sub';
        }

        activeSubMenu.className = 'menu menu_sub menu_active';
    }
    else {
        activeSubMenu.className = 'menu menu_sub';
    }

    return false;
}

for (let i=0; i < menuItemElements.length; i++) { 
    if (menuItemElements.item(i).querySelector('ul')) {
        menuItemElements.item(i).querySelector('a.menu__link').onclick = showSubMenu;
    }
}

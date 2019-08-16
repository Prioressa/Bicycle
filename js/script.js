const btn = document.querySelector('.top__button-mobile'),
      menu = document.querySelector('.top__menu-mobile'),
      back = document.querySelector('.menu-mobile__back'),
      links = document.querySelectorAll('.top__a-mobile');
      
function openAndCloseMenu(element) {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle('top__menu-mobile_active');
        back.classList.toggle('menu-mobile__back_aktive');
    }); 
}
openAndCloseMenu(btn);
openAndCloseMenu(back);

function closeToLinkMenu(elements) {
    elements.forEach(item => {
        item.addEventListener('click', (e) => {
            menu.classList.toggle('top__menu-mobile_active');
            back.classList.toggle('menu-mobile__back_aktive');
        }); 
    }); 
}
closeToLinkMenu(links);
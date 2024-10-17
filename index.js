// function menuShow() {
//     let menuMobile = document.querySelector('.mobile-menu');
//     if (menuMobile.classList.contains('open')) {
//         menuMobile.classList.remove('open');
//         document.querySelector('icon').src = "img/menu_white_36dp.svg";
//     } else {
//         menuMobile.classList.add('open');
//         document.querySelector('icon').src = "img/close_white_36dp.svg";
//     }
// }
//----------------------------------------
function slider (anything){
    document.querySelector ('.one').src = anything;
    // Função para mudar a imagem principal com base na imagem clicada
};

        let menu = document.querySelector ('#menu-icon');
        let navbar = document.querySelector ('.navbar');

        menu.onclick = () => {
            menu.classList.toggle ('bx-x');
            navbar.classList.toggle ('open');
            // Lógica para abrir/fechar o menu de navegação
        }

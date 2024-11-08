// TODO: sự kiện click cho menu header
const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('ul.menu');
//* xử lí sự kiện
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle('menu-header-display');
    console.log(menuList.classList);
})

document.querySelector('.menuIcon').addEventListener("click", openSideMenu);
document.querySelector('.hideSideMenu').addEventListener("click", hideSideMenu);

function openSideMenu(e){
    let menu = document.querySelector('.sidemenu');
    menu.style.tra
    menu.style.width = "250px";
}

function hideSideMenu(e) {
    let menu = document.querySelector('.sidemenu');
    menu.style.width = "0vw";
}
let isOpen = false;
function openHamburgerMenu(){
    const menu = document.querySelector('.hamburger-menu');
    const openButtonText = document.getElementById('openButtonText');
    const hiddenButtons = document.querySelector('.hidden-buttons');

    menu.classList.toggle('open');
    if (menu.classList.contains('open')){
        openButtonText.textContent = 'Close menu';
    } else {
        openButtonText.textContent = 'Open menu';
    }
    // Animation
    if (isOpen == false){
        setTimeout(function() {
            hiddenButtons.style.display = 'block';
            setTimeout(function() {
                hiddenButtons.style.opacity = 1;
            }, 10); // opacity transition
        }, 400); // Delay
    } else if(isOpen == true){
        setTimeout(function() {
            hiddenButtons.style.display = 'none';
            setTimeout(function() {
                hiddenButtons.style.opacity = 0;
            }, 10); // Opacity transition
        }, 10); // Delay
    }
    isOpen = !isOpen;
}
function toCompare(){
    location.href = 'Pages/compare.html';
}
function toCompare2(){
    location.href = 'compare.html';
}
const hiddenButtons = document.querySelector('.hidden-buttons');
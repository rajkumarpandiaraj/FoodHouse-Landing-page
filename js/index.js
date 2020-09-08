const menuBtn = document.querySelector('.fa-bars');
const menuItem = document.querySelector('.nav-list')
let isMenuOpened = false;


const isMenuOpen = ()=>{
    if(isMenuOpened){
        menuItem.className = 'nav-list show' ;
        isMenuOpened = false;
    } else{
        menuItem.className = 'nav-list hide' ;
        isMenuOpened = true;
    }
}
menuBtn.addEventListener('click', ()=>{
    isMenuOpen();
});
isMenuOpen();
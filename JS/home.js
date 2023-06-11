const nav1 = document.querySelector('#nav1')
const nav2 = document.querySelector('#nav2')
const nav3 = document.querySelector('#nav3')
window.addEventListener('scroll', fixNav)
function fixNav(){
    if(window.scrollY < 630){
        nav1.classList.add('current')
        nav2.classList.remove('current')
        nav3.classList.remove('current')
    }
    else if(window.scrollY >= 630 && window.scrollY < 980){
        nav1.classList.remove('current')
        nav2.classList.add('current')
        nav3.classList.remove('current')
    }
    else{
        nav1.classList.remove('current')
        nav2.classList.remove('current')
        nav3.classList.add('current')
    }
    //console.log(window.scrollY)
}
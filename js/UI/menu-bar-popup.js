document.getElementById('menu-bar').addEventListener('click', () => {
    document.querySelector('.menu-popup').style.display = 'block'
    document.querySelector('body').style.overflow = 'hidden'
})

document.getElementById('menu-popup__close').addEventListener('click', () => {
    document.querySelector('.menu-popup').style.display = 'none'
    document.querySelector('body').style.overflow = 'auto'
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        document.querySelector('.menu-popup').style.display = 'none'
        document.querySelector('body').style.overflow = 'auto'
    }
})
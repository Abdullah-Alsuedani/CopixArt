

let cursor = document.querySelector('.cursor')
let titleEls = document.querySelectorAll('.hero h1 span')

let mainTitle = document.querySelector('.hero h1')
let mainP = document.querySelector('.hero p')
let mainbtns = document.querySelector('.hero .but')
let mainImage = document.querySelector('.hero-img img')

document.addEventListener("mousemove", (e)=>{
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
})

titleEls.forEach((el)=>{
        el.addEventListener('mouseover', ()=>{
            el.style.color = 'var(--main-color)';
            cursor.style.transform = 'scale(2)'
            cursor.style.zIndex = '-1000'
        })
        el.addEventListener('mouseleave', ()=>{
            el.style.color = 'white';
            cursor.style.transform = 'scale(1)'
            cursor.style.zIndex = '1000'
        })
})

function mainAnim(el, d){
    el.style.transform = `translate${d}(0)`
    el.style.opacity = 1
}

window.addEventListener('load', () => {
    mainAnim(mainTitle, 'X')
    mainAnim(mainP, 'X')
    mainAnim(mainbtns, 'Y')
    mainAnim(mainImage, 'Y')
})
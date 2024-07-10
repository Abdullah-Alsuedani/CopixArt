

let cursor = document.querySelector('.cursor')
let titleEls = document.querySelectorAll('.hero h1 span')

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
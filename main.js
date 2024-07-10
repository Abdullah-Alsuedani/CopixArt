

let cursor = document.querySelector('.cursor')

let mainTitle = document.querySelector('.hero h1')
let mainP = document.querySelector('.hero p')
let mainbtns = document.querySelector('.hero .but')
let mainImage = document.querySelector('.hero-img img')

document.addEventListener("mousemove", (e)=>{
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
})

let titleText = 'جميع الخدمات التي تحتاجها لبناء براند أو بزنس ناجح في مكان واحد'
let titleArr = []


for(let i=1; i< titleText.length+1; i++){
    titleArr.push(`<span>${titleText.slice(i-1, i)}</span>`)
    mainTitle.innerHTML += titleArr[i-1]
}

setTimeout(()=>{
    let titleEls = document.querySelectorAll('.hero h1 span')
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
}, 2000)

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
const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
     clearactiveclasses()
     slide.addEventListener('click', () => {
         clearactiveclasses()
     slide.classList.add('active')  
    })
}
function clearactiveclasses() {
    slides.forEach((slide) => {
    slide.classList.remove('active')
    })
}
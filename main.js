
const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
  slide.addEventListener('click', () => {
        clearAcriveClasses()
    slide.classList.add('active')
  })
}


function clearAcriveClasses() {

    slides.forEach((slide)=> {
        slide.classList.remove('active')
    })
}
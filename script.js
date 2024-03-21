// const sliders = document.querySelectorAll(' .slider .slide');
    
//     for(let elem of sliders) {
//         elem.addEventListener('click', function() {
//             document.querySelector('.slider .slide.active').classList.remove('active');
//             elem.classList.add('active')
//     })
// }



const sliders = document.querySelectorAll('.sliders .slider') 

for(let elem of sliders) {
    elem.addEventListener('click',() => {
        document.querySelector('.sliders .slider.active').classList.remove('active')
        elem.classList.add('active')
    })
}
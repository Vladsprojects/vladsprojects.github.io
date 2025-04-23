const containerProyectos = document.querySelector('.container-proyectos');
const allCardProyectos = document.querySelectorAll('.proyectos');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const totalCardProyectos = allCardProyectos.length;

let currentIndex = 0;
let autoPlayInverval;


//funcion actualizado del carrusel

const updateCarousel = () =>{
    const offset = currentIndex * containerProyectos.clientWidth;
    containerProyectos.scrollTo({
        left: offset,
        behavior: 'smooth'
    })
}

//Boton next

nextBtn.addEventListener('click', () => {

    currentIndex = (currentIndex+1) % totalCardProyectos;
    updateCarousel();
    
})

prevBtn.addEventListener('click', () => {

    currentIndex = (currentIndex-1+totalCardProyectos) % totalCardProyectos;
    updateCarousel();
    
})


//funcion autoplay

function startAutoPlay(){
    autoPlayInverval = setInterval(() =>{
        currentIndex = (currentIndex + 1) % totalCardProyectos;
        updateCarousel();
    }, 7000)
}

//Reinicio tiempo del autoplay

function resetAutoPlay() {
    clearInterval(autoPlayInverval);
    startAutoPlay();
}

startAutoPlay();
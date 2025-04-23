const containerTabs = document.querySelectorAll('.tab');
const containerIdiomas = document.querySelectorAll('.container-idiomas');

containerTabs.forEach((tab) => {
    tab.addEventListener('click', (event) =>{
        const tabName = event.target.dataset.nombre;

        containerTabs.forEach(tab => tab.classList.remove('active'));
        event.target.classList.add('active');

        containerIdiomas.forEach(containerIdiomas => {
            const idiomaNombre = containerIdiomas.dataset.nombre;

            if( tabName === idiomaNombre){
                containerIdiomas.classList.add('active')
            }
            else{
                containerIdiomas.classList.remove('active')
            }


        });

    });

});
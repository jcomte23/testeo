// Función para cambiar el color de fondo
const changeColorBtn = document.getElementById('changeColorBtn');

changeColorBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '#f0f0f0' : 'lightblue';
});

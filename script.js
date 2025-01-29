const btnPrevious = document.querySelectorAll ('.btnPrevious');
const btnNext = document.querySelectorAll ('.btnNext');
const containerTanya = document.getElementById ('tanya');
const containerJohn = document.getElementById ('john');

const showContainer = (show, hide) => {
    show.classList.toggle('hide');
    hide.classList.toggle('hide');
};

btnNext.forEach((buttonNext) => {
    buttonNext.addEventListener('click', () => showContainer(containerJohn, containerTanya));
})

btnPrevious.forEach((buttonPrevious) => {
    buttonPrevious.addEventListener('click', () => showContainer(containerTanya, containerJohn));
})

document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowRight"){
        showContainer(containerJohn, containerTanya);
    } else if (event.key === "ArrowLeft"){
        showContainer(containerTanya, containerJohn);
    }
})
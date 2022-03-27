let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.main-block__edit');
let closedPopup = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__profession');
let mainName = document.querySelector('.main-block__title');
let mainJob = document.querySelector('.main-block__subtitle');

function formSubmitHandler(evt) {
    evt.preventDefault();
    mainName.textContent = nameInput.value
    mainJob.textContent = jobInput.value
    tooglePopup()
};


function tooglePopup() {
    popup.classList.toggle('popup__inactive')
};

console.log (nameInput.textContent)

popup.addEventListener('click', function(event) {
    if(event.target === event.currentTarget) {
        tooglePopup()
    }
})

formElement.addEventListener('submit', formSubmitHandler);
openPopup.addEventListener('click', tooglePopup);
closedPopup.addEventListener('click', tooglePopup);

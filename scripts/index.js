let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.main-block__edit');
let closePopupButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__item_type_name');
let jobInput = document.querySelector('.popup__item_type_profession');
let mainName = document.querySelector('.main-block__title');
let mainJob = document.querySelector('.main-block__subtitle');



function openedPopup() {
    popup.classList.add('popup_opened')
    nameInput.value = mainName.textContent
    jobInput.value =  mainJob.textContent
};

function closedPopup() {
    popup.classList.remove('popup_opened')
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    mainName.textContent = nameInput.value
    mainJob.textContent = jobInput.value
    closedPopup()
};

openPopupButton.addEventListener('click', openedPopup);
closePopupButton.addEventListener('click', closedPopup);
formElement.addEventListener('submit', formSubmitHandler);
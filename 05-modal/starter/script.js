'use strict';

//modal elements
conts modalEl = document.querySelector('.modal');
//overlay modal element
const overlayEl = document.querySelector('.overlay');
//close modal 
const btnCloseModal = document.querySelector('.close-modal');
//open modal 
const btnsOpenModal = document.querySelectorAll('.show-modal');


//function to open modal
const openModal = function () {
  //remove hidden classname in modal
  modalEl.classList.remove('hidden');
  //remove the hidden classname in overlay
  overlayEl.classList.remove('hidden');
 
};


const closeModal = function () {
    modalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

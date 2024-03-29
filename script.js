'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btncloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

}

const openModal = function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}
for(let i = 0; i < btnsOpenModal.length; i++) {
   btnsOpenModal[i].addEventListener('click',openModal);
    
}



btncloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(event) {
    console.log(event.key);

    if(event.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
    
    }
    
})


'use strict'

// For start we need to organize selecting the elements in variables.

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const butnsOpenModal = document.querySelectorAll('.show-modal') // will get all the componets with the class not the frist one.
console.log(butnsOpenModal)

const openModal = () => {
  modal.classList.remove('hidden') // heare we will remove the remove class we doesent use the dot in the remove function.
  overlay.classList.remove('hidden')
}

const closeModal = () => { // this function will add the hidden class to these classes.  ]
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

for (let i = 0; i < butnsOpenModal.length; i++) {
  console.log(butnsOpenModal[i].addEventListener('click', openModal)) // this loop will return one node list, wich is similar one array.
}

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', e => { // the e is the object captured and passed when this function is called.
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) { // Creating a condition to esc pressed using the object dot key equal to 'scape'.
    closeModal() // checking if we contain the class hidden to the element.
  }
})

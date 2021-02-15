'use strict'

const valoracionIn  = document.querySelector('#valoracionIn')
const valoracionBtn = document.querySelector('#valoracionBtn')

valoracionBtn.addEventListener('click',()=>{
	alert(`has valorado con ${valoracionIn.value} puntos`)
})



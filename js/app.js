//monstrar valoracion
'use strict'

const valoracionIn  = document.querySelector('#valoracionIn')
const valoracionBtn = document.querySelector('#valoracionBtn')
//monstrar cuenta coger cuando es vacio
const paisIn        = document.querySelector('#paisIn')
const controlIn     = document.querySelector('#controlIn')
const entidadIn     = document.querySelector('#entidadIn')
const sucursalIn    = document.querySelector('#sucursalIn')
const dcIn          = document.querySelector('#dcIn')
const cuentaIn      = document.querySelector('#cuentaIn')
const cuentaBtn     = document.querySelector('#cuentaBtn')

valoracionBtn.addEventListener('click',()=>{
	alert(`has valorado con ${valoracionIn.value} puntos`)
})
//ts
// const valoracionIn = (document.querySelector('#valoracionIn') as HTMLElement)
// const valoracionBtn = (document.querySelector('#valoracionBtn') as HTMLButtonElement)


//montrar dia de la semana
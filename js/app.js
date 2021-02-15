'use strict'

const valoracionIn  = document.querySelector('#valoracionIn')
const valoracionBtn = document.querySelector('#valoracionBtn')
const paisIn        = document.querySelector('#paisIn')
const controlIn     = document.querySelector('#controlIn')
const entidadIn     = document.querySelector('#entidadIn')
const sucursalIn    = document.querySelector('#sucursalIn')
const dcIn          = document.querySelector('#dcIn')
const cuentaIn      = document.querySelector('#cuentaIn')
const cuentaBtn     = document.querySelector('#cuentaBtn')
const dateIn        = document.querySelector('#dateIn')
const dateBtn       = document.querySelector('#dateBtn')

valoracionBtn.addEventListener('click',function(){
	alert(`has valorado con ${valoracionIn.value} puntos.`)
})

cuentaBtn.addEventListener('click', function(){
	if(cuentaIn === ''){
		alert(`Rellene los campos indicados`)
	}else{
	alert(`le informamos de que el numero de cuenta es: ${paisIn.value}-${controlIn.value}-${entidadIn.value}-${sucursalIn.value}-${dcIn.value}-${cuentaIn.value}`)
}})


dateBtn.addEventListener('click', function(){
	alert(`El dia de la realizaxción de la encuesta es: ${dateIn.value}`)
})

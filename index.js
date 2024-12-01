
let countEl = document.querySelector('#count-el');
let parael = document.querySelector('#p-el');
let count = 0

let increment = () =>{

	count += 1
	countEl.textContent = count

}

let save = () =>{

	let countStr = count + ' - '
	parael.textContent += countStr 
	count = 0

}
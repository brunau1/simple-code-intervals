//function: get the ranges of a certain number
//autor: Bruno Otávio Ferreira Santos
//date: 01/04/2019
function getRange() {

	let value = document.getElementById('search').value

	let numLength = parseInt(value).toFixed(0).length

	if (numLength < 2) {

		let potencia = Math.trunc((value/(Math.pow(10,(numLength-1)))))

		let before = potencia*(Math.pow(10,(numLength-1)))

		let after = (potencia+1)*(Math.pow(10,(numLength-1)))

		printResults(numLength, before, after)

	}else{

		let firstValue = Math.trunc(value).toString().split('')[0]
		let secondValue = Math.trunc(value).toString().split('')[1]
		parseInt(secondValue)

		let before = firstValue*(Math.pow(10,(numLength-1)))

		let after = firstValue*(Math.pow(10,(numLength-1)))
		let aux = (parseInt(secondValue)+1)*(Math.pow(10,(numLength-2)))

		after += aux + (Math.pow(10,(numLength-1)) - aux)

		printResults(numLength, before, after)
	}
}

function printResults(numLength, before, after){  

	let html = `<h4>Number length: ${numLength}</h4>`
	html += `<h4>Previous range: ${before}</h4>`
	html += `<h4>Next range: ${after}</h4>`

	document.querySelector('#print').innerHTML = html
}
// o`rtasrifmetika
let num = [1, 2, 3, 4, 2,]
let something = num.reduce((a, b) => {
	return a + b
}, 0)

console.log(Math.floor(something ** (1 / num.length)))

// arifmetikProgressiya

function something(a) {
	let number = [2, 4, 6, 8, 10, 12, 14, 16];
	let two = 2;
	let firstArray = number[0]
	let lastArray = number[number.length - 1]
	a = ((firstArray + lastArray) / 2) * number.length + 1
	console.log(Math.floor(a))
}
something()

// 3< P
function peremetr() {
	let a = 2
	let b = 3
	let c = 5
	console.log(a + b + c);
}

peremetr()

// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(n) {
	return (n % 2 === 0);
}

let out = isEven(4)
console.log(out)

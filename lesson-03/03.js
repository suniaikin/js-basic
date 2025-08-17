// Разработайте функцию findLargest, которая принимает три числа
// и возвращает наибольшее из них.

function findLargest(x, y, z) {
	if (x > y && x > z) {
		return x;
	} else if ( y > x && y > z) {
		return y;
	} else return z;
}

let out = findLargest(11, 5, 10)
console.log(out)




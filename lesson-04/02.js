/*
Напишите функцию `findUniqueElements`,
которая принимает массив и возвращает новый массив,
содержащий только уникальные элементы из исходного массива.

**Входные данные:**
- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**
- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`,
которую мы написали ранее. Переписывать её не нужно,
она доступна по всему проекту за счёт hoisting.
*/


function findUniqueElements(array) {
	let newArray = []
	for (let i = 0; i < array.length; i++) {
		let isDuplicated = false
		for (let j = 0; j < newArray.length; j++) {
			if (newArray[j] === array[i]) {
				isDuplicated = true
				break
			}
	   } if (!isDuplicated) {
	   	newArray.push(array[i])
	   }
	}
	return newArray
}

let out = findUniqueElements([1, 2, 3, 2, 1, 4])
console.log(out);




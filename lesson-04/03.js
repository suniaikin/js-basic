/*
Напишите функцию `findCommonElements`, которая принимает два массива 
и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4])
// [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findCommonElements(arrayFirst, arraySecond) {
	let newArray = [];
	for (let i = 0; i < arrayFirst.length; i++) {
		for (let j = 0; j < arraySecond.length; j++) {
			if (arraySecond[j] === arrayFirst[i]) {
				 let isDuplicate = false;
				 for (let k = 0; k < newArray.length; k++) {
					 if (arraySecond[j] === newArray[k]) {
						 isDuplicate = true;
						 break;
					 }
				 } if (isDuplicate === false) {
					 newArray.push(arraySecond[j])
				}
			}
			
		}

		
	} return newArray

}

let out = findCommonElements([1, 2, 2, 3, 4], [2, 3, 4, 4])
console.log(out)




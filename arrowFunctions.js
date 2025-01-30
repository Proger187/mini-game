const myFilter = (list, callback) =>{
    let result = []
    list.forEach(element => {
        if (callback(element)) {
            result.push(element)
        }
    });
    return result
}

const numbers = [1, 2, 3, 4, 5];

// Используем myFilter для фильтрации четных чисел
const evenNumbers = myFilter(numbers, function(num) { // Не стрелочная функция, для примера
  return num % 2 === 0;
});
console.log(evenNumbers);

const greaterThanThree = myFilter(numbers, function(num) { // Не стрелочная функция, для примера
    return num > 3;
  });
  console.log(greaterThanThree); // [4, 5]
function getSummOfNumbers(object){
    let summ = 0
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            if (typeof object[key] === 'number') {
              summ += object[key]
            }
          }
    }
    return summ
}

function getSortedNumericFields(object) {
    return Object.entries(object)
      .filter(([key, value]) => typeof value === 'number')
      .sort((a, b) => a[1] - b[1])
      .map(([key]) => key);
  }

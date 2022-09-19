const calProduct = (arr) => {
  let product = 1
  let resultArr = []

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        product = product * arr[j]
      }
    }
    resultArr.push(product)
    product = 1
  }

  return resultArr
}

console.log(calProduct([1, 2, 3, 4, 5]))

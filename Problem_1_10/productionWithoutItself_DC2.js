const calProduct = (arr) => {
  let product = 1
  let resultArr = []

  arr.forEach((elem) => {
    product = product * elem
  })

  for (let i = 0; i < arr.length; i++) {
    let elem = product / arr[i]
    resultArr.push(elem)
  }
  return resultArr
}

console.log(calProduct([1, 2, 3, 4, 5]))

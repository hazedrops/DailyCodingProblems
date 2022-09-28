function findLowestInt(arr) {
  const low = Math.min(...arr)
  const high = Math.max(...arr)

  let intArr = []

  for (let i = low; i <= high; i++) {
    intArr.push(i)
  }

  let tempArr = intArr

  arr.forEach((item) => {
    let idx = intArr.indexOf(item)

    // same items are in both arrays
    if (idx !== -1) {
      tempArr.splice(idx, 1)
    }
  })

  if (tempArr.length === 0) return high + 1

  return Math.min(...intArr.filter((num) => num > 0))
}

// console.log(findLowestInt([3, 4, 1, -1]));
console.log(findLowestInt([1, 1, 2, 2, 3, 5]))

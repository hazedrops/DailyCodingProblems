const addUp = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    const rest = k - arr[i]

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === rest) return true
      else return false
    }
  }
}

console.log(addUp([10, 15, 3, 7], 11))

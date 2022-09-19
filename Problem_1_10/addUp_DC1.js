const addUp = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    const rest = k - arr[i]
    console.log('rest is', rest)

    for (let j = 0; j < arr.length; j++) {
      console.log('arr[j] is:', arr[j])
      if (arr[j] === rest) return true
    }
  }
  return false
}

console.log(addUp([10, 15, 3, 7], 10))

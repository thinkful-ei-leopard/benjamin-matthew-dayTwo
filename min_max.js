function max(numbers) {
    let temp = numbers[0]
    let i = 1
    while( i < numbers.length){
        if( temp < numbers[i]){
            temp = numbers[i]
        }
        i++
    }
return temp

  }
  
  function min(numbers) {
    let temp = numbers[0]
    let i = 0
    while( i < numbers.length){
        if( temp > numbers[i]){
            temp = numbers[i]
        }
        i++
    }
return temp

  }

  console.log(max([3, 5, 4]))
  console.log(min([3, 5, 4]))
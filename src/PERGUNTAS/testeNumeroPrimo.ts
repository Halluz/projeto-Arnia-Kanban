export const isPrimeNumber = (number: number) =>{
    let aux = number -1
    let isPrime = true

    if( number === 0 || number === 1){
        return false
    }
    while (aux >= number / 2){
        if(number % aux === 0){
            isPrime = false
            break
        }
        aux = aux - 1
    }

    return isPrime
}

export const isPrimeNumber2 = (number: number) => {
    let aux = 1
    let isPrime = true
    
    if( number === 0 || number === 1 ){
        return false
    }

    while (aux <= number / 2) {
      if (aux === 1) {
        aux = aux + 1
        continue
      } else if (number % aux === 0) {
        isPrime = false
        break
      }
      aux = aux + 1
    }
  
    return isPrime
  }
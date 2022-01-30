function randomArrayNumbers(max,min,steps){
    let arr = [];
    
    let formula = (max - min) + min;
    
    for (let i = 0; i < steps; i++){
      let randomNumbers = Math.floor(Math.random() * formula)
      
      arr.push(randomNumbers)
    }
    
    return arr
  }
  
  
  
  randomArrayNumbers(20,2,5)
  
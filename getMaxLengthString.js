const { template } = require('@babel/core')

// function getMaxLengthString(arrayOfString){
//  if (arrayOfString==null ||arrayOfString==undefined) {
//      return undefined;
//  }
//  let a = arrayOfString
//  for (let i = 0; i < arrayOfString.length; i++) {
//      const element = array[index];
     
//  } 

// } 
 
function getMaxLengthString(arrayOfString) {

    if (arrayOfString === null || arrayOfString === undefined) {
      return undefined
    }
  
    let MaxLength = [arrayOfString[0]]
    
      for (let i = 1; i < arrayOfString.length; i++){
      if (arrayOfString[i].length > MaxLength[0].length) {
        MaxLength = [arrayOfString[i]]
      }
      else if(arrayOfString[i].length === MaxLength[0].length) {
        MaxLength.push(arrayOfString[i]) 
      }
    } 
    return MaxLength
  }
module.exports = getMaxLengthString

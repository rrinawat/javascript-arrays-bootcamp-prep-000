var chocolateBars =  ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(String[] array,element){
  array.unshift = `${element}`
  return array
}

function destructivelyAddElementToBeginningOfArray(String[] array,element){
  array[0]= `${element}`
  return array
}

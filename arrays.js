var chocolateBars =  ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  array = [element,...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.shift(element)
  return array
}

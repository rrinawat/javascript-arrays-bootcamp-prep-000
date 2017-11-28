var chocolateBars =  ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  array = [element,...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array = array.shift()
  array = a[elemt, ...array]
  return array
}

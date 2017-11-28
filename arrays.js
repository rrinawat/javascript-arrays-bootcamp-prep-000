var chocolateBars =  ["snickers", "hundred grand", "kitkat", "skittles"]
//add to beginning
function addElementToBeginningOfArray(array, element){
  array = [element,...array]
  return array
}
//mutate array add to beigning
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
//add to end of array
function addElementToEndOfArray(array, element){
  array = [...array,element]
  return array
}
//mutate to end of array
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
// when a parameter able to use index as a value in array
function accessElementInArray(array, index){
  return array[index]
}
//remove first element
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
//destructivelyRemoveElementFromEndOfArray
function destructivelyRemoveElementFromEndOfArray(array){
  array.slice(-1)
  return array
}

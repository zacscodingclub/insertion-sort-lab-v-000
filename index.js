function findMinAndRemove(array){
  let min = array[0];

  for(let i = 1; i < array.length; i++) {
    if(array[i] < min) {
      min = array[i];
    }
  }

  array.splice(array.indexOf(min), 1);
  return min
}

function insertionSort(array){
  let sortedArray = [];

  while(array.length > 0) {
    sortedArray.push(findMinAndRemove(array));
  }

  return sortedArray;
}

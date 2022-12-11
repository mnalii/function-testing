function sortingInteger(arr) {
  console.log('Initial number array: ' + arr);

  //sort array from small to large
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log('Sorted from small to large: ' + arr);

  //sort array from large to small
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log('Sorted from large to small: ' + arr);
}

module.exports = sortingInteger;

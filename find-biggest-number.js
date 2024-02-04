const findBiggestNumber = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  } else {
    if (arr[0] > arr[1]) {
      arr.splice(1, 1);
      return findBiggestNumber(arr);
    } else {
      arr.shift();
      return findBiggestNumber(arr);
    }
  }
};

const a = findBiggestNumber([1, 2, 2, 3, 5, 99, 3, 14, 100]);

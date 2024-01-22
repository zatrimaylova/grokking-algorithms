const TEST_NUMBERS = [1, 4, 19, 3, 46, 12, 20, 48, 50, 44, 2, 5, 23, 16];

const findSmallest = (arr) => {
  let smallest = arr[0];
  let indexOfSmallest = 0;

  arr.forEach((number, index) => {
    if (number < smallest) {
      smallest = number;
      indexOfSmallest = index;
    }
  });

  return indexOfSmallest;
};

const selectionSort = (arr) => {
  let unfilteredArr = [...arr];
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    const smallestNumber = findSmallest(unfilteredArr);

    filteredArr.push(unfilteredArr[smallestNumber]);
    unfilteredArr.splice(smallestNumber, 1);
  }

  return filteredArr;
};

selectionSort(TEST_NUMBERS);

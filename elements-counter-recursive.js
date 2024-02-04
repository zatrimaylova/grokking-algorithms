const elementsCounter = (list) => {
  if (list.length) {
    list.shift();
    return 1 + elementsCounter(list);
  } else return 0;
};

const a = elementsCounter(["1, 2, 3, 4, 5, 6, 7", "aswgdysu", 14, 16, {}, 4]);

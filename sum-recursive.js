const sum = (numbers) => {
  if (!Array.isArray(numbers)) {
    return null;
  }

  let res = 0;

  if (!numbers.length) {
    res += 0;
  } else {
    res += numbers[0];

    if (numbers.length > 1) {
      res += sum(numbers.slice(1));
    }
  }

  return res;
};

const a = sum([1, 2, 3]);

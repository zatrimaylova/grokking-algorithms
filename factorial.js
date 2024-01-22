const factorial = (x) => {
  console.log(x);
  if (x === 1) {
    return x;
  } else {
    return x * factorial(x - 1);
  }
};

const b = factorial(5);

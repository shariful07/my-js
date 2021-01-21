function isNumber(x) {
  if (x === 0 || (x && typeof x === "number")) {
    // here is your code
    return true;
  }
  return false;
}


if (isNumber(5)) {
  console.log("Hello")
}



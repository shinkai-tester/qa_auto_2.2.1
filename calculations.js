function increaseBalance(x, y) {
  return (x += y);
}

function decreaseBalance(x, y) {
  return (x -= y);
}

function divideBalanceByAccounts(x, y) {
  return (x /= y);
}

function getRestAfterDivision(x, y) {
  return (x %= y);
}

function incrementNumber(x) {
  return ++x;
}

function decrementNumber(x) {
  return --x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
console.log(getRestAfterDivision(7000, 3));
console.log(incrementNumber(29));
console.log(decrementNumber(29));

function increaseBalance(x, y) {
  return x += y;
}

function decreaseBalance(x, y) {
  return x -= y;
}

function divideBalanceByAccounts(x, y) {
  return x /= y;
}

function getRestAfterDivision(x, y) {
  return x %= y;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
console.log(getRestAfterDivision(7000, 3));

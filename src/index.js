module.exports = function getZerosCount(number, base) {
  let zerosCol = 0;
  let max = 1;
  let nums = [];

  for (let i = 2; i < base + 1; i++) {
    if (base % i == 0) nums.push(i);
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 2; j < nums[i]; j++) {
      if (nums[i] % j == 0) {
        nums[i] = 1;
      }
    }

    if (nums[i] > max)  {
      max = nums[i];
    }
  }

  do {
    zerosCol += Math.floor(number / max);
    number = Math.floor(number / max);
  } while (number > 0);

  return zerosCol;
}
/**Given a list of numbers and a number k,
 * return whether any two numbers from the list add up to k..
 */
const solveTask3 = (randomArr, k) => {
  if (isNaN(k)) return console.error("K is not a number!");
  let flag = false;
  for (let i = 0; i < randomArr.length; i++) {
    for (let j = i + 1; j < randomArr.length; j++) {
      if (randomArr[i] + randomArr[j] === k) flag = true;
    }
  }
  return flag ? true : false;
};

console.log(solveTask3([10, 5, 2, 6], 16));

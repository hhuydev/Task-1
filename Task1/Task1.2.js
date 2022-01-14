/**RLE (Run-length encoding) is a compressing data algorithm, 
 * it save data like this: the number of data + data. Implement this algorithm.
Input data only use English Upppercase : Letter A  Z.
 */
const solveTask2 = (randomString) => {
  const stringLength = randomString.length;
  let result = "";
  for (let i = 0; i < stringLength; i++) {
    let count = 1;
    while (i < stringLength - 1 && randomString[i] === randomString[i + 1]) {
      count++;
      i++;
    }
    result += count + randomString[i];
  }
  return result;
};
console.log(solveTask2("XYZ"));

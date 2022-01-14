/**Giving a random string, write a function arrange all characters
 * according alphabet table */
const solveTask1 = (chars) => {
  return chars.split("").sort().join("");
};

console.log(solveTask1("webmaster"));

import { wait } from "./sub";
const logAfterTwoSeconds = (a, b) => {
  wait(2000);
  return a + b;
};

console.log(logAfterTwoSeconds(2, 5));

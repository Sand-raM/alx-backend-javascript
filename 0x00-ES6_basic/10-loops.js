export default function appendToEachArrayValue(array, appendString) {
  const NAR = [];
  for (const val of array) {
    NAR.push(appendString + val);
  }

  return NAR;
}

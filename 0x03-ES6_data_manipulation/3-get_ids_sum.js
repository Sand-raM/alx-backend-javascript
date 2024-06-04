export default function getStudentIdsSum(arr) {
  return arr.reduce((acc, next) => acc + next.id, 0);
}

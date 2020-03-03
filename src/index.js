module.exports = function towelSort (matrix = []) {
  return matrix.map((arr, arrIndex) => arrIndex % 2 ? arr.reverse() : arr).flat()
}


exports.min = function min (array) {
 if (!array || array.length <1) return 0;
  return array.sort((a, b) => a - b).shift();
}

exports.max = function max (array) {
  if (!array || array.length <1) return 0;
 return array.sort((a, b) => a - b).pop();
}

exports.avg = function avg (array) {
if (!array || array.length <1) return 0;
  return array.reduce((a, b) => a + b,0) / array.length;
}

function analyzeArray(arr) {
    const length = arr.length;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return {
      average: length > 0 ? sum / length : NaN,
      min: Math.min(...arr),
      max: Math.max(...arr),
      length: length
    };
  }
  
  module.exports = analyzeArray;
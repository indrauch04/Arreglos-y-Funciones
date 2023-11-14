function fibonacciSequence(limit) {
    var sequence = [0, 1];
  
    for (var i = 2; i < limit; i++) {
      var nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }
  
    return sequence;
  }

var result = fibonacciSequence(12);
console.log(result);
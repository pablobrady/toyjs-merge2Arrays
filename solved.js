/* ./index.js */

module.exports = function() {

  // Convert arguments object to an array
  var args = Array.prototype.slice.call(arguments);

  // // Throw error if arguments contain non-finite number values
  // if (!args.every(Number.isFinite)) {
  //   throw new TypeError('sum() expects only numbers.')
  // }

  // Return the solution output
  var solution = function (input) {
    const MAX_IDX = input;
    var outputArray = []; 

    console.log("Number of items requested = " + MAX_IDX)

    var fibProcess = function(tempArray, idx) {
      if(idx==0) { return 0; }
      if(idx==1 || idx==2) { return 1; }
      return tempArray[idx - 2] + tempArray[idx - 1]
    }

    var outputArray = [];
    for(index=0; index<MAX_IDX; index++) {
      outputArray[index] = fibProcess(outputArray, index)
      console.log(index + " " + outputArray[index])
    }

    return outputArray
  }

  return solution(args)
}

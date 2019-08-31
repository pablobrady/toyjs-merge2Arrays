/* ./index.js */

module.exports = function() {

  // Convert arguments object to an array
  var args = Array.prototype.slice.call(arguments);

  // console.log("PARAM 0 = " + args[0])
  // console.log("PARAM 1 = " + args[1])


  // Throw error if arguments contain non-finite number values
  // if (!args.every(Number.isFinite)) {
  //   throw new TypeError('mergeTwoArrays() expects only numeric arrays.')
  // }

  var sleep = function (milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
  
  /*
   RETURN THE OUTPUT THAT PASSES THE TESTS

   GOAL:  Merge the contents of two input arrays, 
          keeping the elements in numerical order.
  */
  var solution = function (myList, yourList) {
    console.log( "SOLUTION() ARRIVAL:::");
    var outputList = [], myIdx = 0, yourIdx = 0;
    while( myIdx < myList.length || yourIdx < yourList.length ) {
      var myValue = myList[myIdx] || -1;
      var yourValue = yourList[yourIdx] || -1;

      console.log("TEST VALUES LOG:  myValue = " + myValue + " -- vs. -- yourValue = " + yourValue)

      // Take the smaller of the two
      if( myValue < yourValue) {
        outputList.push( myValue==-1 ? yourList[yourIdx++] : myList[myIdx++] )
      } else if( yourValue < myValue) {
        outputList.push( yourValue==-1 ? myList[myIdx++] : yourList[yourIdx++] )
      } 
      else if ( myValue==-1 && yourValue==-1 ) {
        console.log("ERR: No valid values left!")
        break;
      }

      // sleep(200);
    }

    console.log("outputList[] ==> " + outputList )
    
    return outputList
  }

  return solution(args[0], args[1])
}

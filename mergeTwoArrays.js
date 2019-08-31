/* ./index.js */

module.exports = function() {

  // Convert arguments object to an array
  var args = Array.prototype.slice.call(arguments);

  // Throw error if arguments contain non-finite number values
  if (!args.every(Number.isFinite)) {
    throw new TypeError('sum() expects only numbers.')
  }


  // Return the problem output
  var mergeTwoArrays = function (myList, yourList) {
    console.log("myList >>> " + myList )
    console.log("yourList >>> " + yourList )
    
    return { myList, yourList }
  }

  return mergeTwoArrays(args)
}

/* ./test/index.js */

/* Source Data */
var mergeTwoArrays = require('../mergeTwoArrays');
var chai = require('chai'); // Only required for headless testing - "> mocha"
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

console.log( "STARTING TESTS....");

describe('***** Computed Answer Validations ******', function() {
  it('mergeTwoArrays - Mixed values', function() {

    var myList   = [3, 4, 6, 10, 11, 15]
    var yourList = [1, 5, 8, 12, 14, 19]

    var outputArray = mergeTwoArrays(myList, yourList)

    assert.isArray( outputArray, "returns an Array" )
    myList.forEach( function( num, idx) {
      assert.include( outputArray, myList[idx], "includes all of myList array" );
    })
    myList.forEach( function( num, idx) {
      assert.include( outputArray, yourList[idx], "includes all of yourList array" );
    })
    assert.equal( outputArray.length, (myList.length + yourList.length), "output length is expected (12)" )
    
    outputArray.forEach( function( num, idx) {
      assert.equal( outputArray[idx], [1,3,4,5,6,8,10,11,12,14,15,19][idx], 'precisely matches predicted array' )
    })

  });

  // it('mergeTwoArrays - More Mine than Yours', function() {

  //   var myList   = [3, 4, 6, 10, 11, 15, 20];
  //   var yourList = [1, 5, 8, 12, 14, 19];

  //   var outputArray = mergeTwoArrays(myList, yourList)

  //   assert.isArray( outputArray, "returns an Array" )
  //   myList.forEach( function( num, idx) {
  //     assert.include( outputArray, myList[idx], "includes all of myList array" );
  //   })
  //   myList.forEach( function( num, idx) {
  //     assert.include( outputArray, yourList[idx], "includes all of yourList array" );
  //   })
  //   assert.equal( outputArray.length, (myList.length + yourList.length), "output length is expected (12)" )
    
  //   outputArray.forEach( function( num, idx) {
  //     assert.equal( outputArray[idx], [1,3,4,5,6,8,10,11,12,14,15,19][idx], 'precisely matches predicted array' )
  //   })

  // });

  // it('mergeTwoArrays - More Yours than Mine', function() {

  //   var myList   = [   4, 6, 10, 11, 15];
  //   var yourList = [1, 5, 8, 12, 14, 19, 21];

  //   assert.equal( mergeTwoArrays(myList, yourList), [1,4,5,6,8,10,11,12,14,15,19,21] );

  // });

  // it('mergeTwoArrays - Mine has a few in a row', function() {

  //   var myList   = [   4, 6, 10, 11, 15];
  //   var yourList = [1, 5, 8, 12, 14, 19, 21];

  //   assert.equal( mergeTwoArrays(myList, yourList), [1,4,5,6,8,10,11,12,14,15,19,21] );

  // });
});

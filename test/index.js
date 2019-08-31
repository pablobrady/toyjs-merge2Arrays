/* ./test/index.js */

/* Source Data */
var mergeTwoArrays = require('../mergeTwoArrays');
var chai = require('chai'); // Only required for headless testing - "> mocha"
var assert = chai.assert;
var expect = chai.expect;

describe('Answer Key Validation', function() {
  it('mergeTwoArrays - Mixed values', function() {

    var myList   = [3, 4, 6, 10, 11, 15];
    var yourList = [1, 5, 8, 12, 14, 19];

    expect( mergeTwoArrays(myList, yourList) ).to.eql( [1,3,4,5,6,8,10,11,12,14,15,19] );

  });

  it('mergeTwoArrays - More Mine than Yours', function() {

    var myList   = [3, 4, 6, 10, 11, 15, 20];
    var yourList = [1, 5, 8, 12, 14, 19];

    expect( mergeTwoArrays(myList, yourList) ).to.eql( [1,3,4,5,6,8,10,11,12,14,15,19,20] );

  });

  it('mergeTwoArrays - More Yours than Mine', function() {

    var myList   = [   4, 6, 10, 11, 15];
    var yourList = [1, 5, 8, 12, 14, 19, 21];

    expect( mergeTwoArrays(myList, yourList) ).to.eql( [1,4,5,6,8,10,11,12,14,15,19,21] );

  });

  it('mergeTwoArrays - Mine has a few in a row', function() {

    var myList   = [   4, 6, 10, 11, 15];
    var yourList = [1, 5, 8, 12, 14, 19, 21];

    expect( mergeTwoArrays(myList, yourList) ).to.eql( [1,4,5,6,8,10,11,12,14,15,19,21] );

  });
});

describe('Computed Answer Validation', function() {
  var output = -1 // solved(n)
  it('output is -1', function() {
    assert.equal(output, -1);
  });
});


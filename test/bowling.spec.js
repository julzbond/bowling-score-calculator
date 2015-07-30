var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var bowlingScore = require ('../bowlingscore.js');

describe ("bowlingScore", function(){

  it('should be a function', function(){
    expect(bowlingScore).to.be.a('function');
  });

  it('should return a number', function(){
    expect(typeof bowlingScore([0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).to.equal('number');
  });

  it('should return the correct total score', function(){
    expect( 0 === bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) );
    expect( 190 == bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9]) );
    expect( 300 == bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) );
    expect( 11 == bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10,1,0]));
    expect( 12 == bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0]) );

  });


});
var assert = require('assert')
var Food = require('../food.js')


describe('Food', function(){
  var food;

  beforeEach(function () {
    food = new Food("Cabbage", 15);
  })

  it("Should get food's name", function(){
    assert.strictEqual("Cabbage", food.name)
  })

  it("Should get food's calories", function(){
    assert.strictEqual(15, food.calories)
  })




})

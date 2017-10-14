var assert = require('assert')
var Food = require('../food.js')
var Rat = require('../rats.js')


describe('Food', function(){
  var food;
  var rat;

  beforeEach(function () {
    food = new Food("Cabbage", 15);
    rat = new Rat();
  })

  it("Should get food's name", function(){
    assert.strictEqual("Cabbage", food.name)
  })

  it("Should get food's calories", function(){
    assert.strictEqual(15, food.calories)
  })

  it("rat should poison food when touched", function(){
    rat.touch(food)
    assert.strictEqual(true, food.poisoned)
  })




})

var assert = require('assert')
var Hero = require('../heroes.js')
var Food = require('../food.js')


describe('Hero', function(){
  var hero1;
  var cabbage;

  beforeEach(function () {
    hero1 = new Hero("Derek", 300, "chocolate");
    cabbage = new Food("Cabbage", 20)
  })

  it("should return name of hero", function () {
    assert.strictEqual("Derek", hero1.name);
  })

  it("should return health of hero", function () {
    assert.strictEqual(300, hero1.health);
  })

  it("should return favourite food of hero", function () {
    assert.strictEqual("chocolate", hero1.favFood);
  })

  it("hero should say name when talking", function () {
    assert.strictEqual("Hi, my name is Derek", hero1.talk());
  })

  it("check hero to do list starts empty", function () {
    assert.strictEqual(0,hero1.toDoList.length)
  })

  it("hero health should go up when eating food", function () {
    hero1.eat(cabbage)
    assert.strictEqual(320, hero1.health)
  })
})

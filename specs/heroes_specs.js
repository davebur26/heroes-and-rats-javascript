var assert = require('assert')
var Hero = require('../heroes.js')


describe('Hero', function(){
  var hero1;

  beforeEach(function () {
    hero1 = new Hero("Derek", "300", "chocolate");
  })

  it("should return name of hero", function () {
    assert.strictEqual("Derek", hero1.name);
  })

  it("should return health of hero", function () {
    assert.strictEqual("300", hero1.health);
  })

  it("should return favourite food of hero", function () {
    assert.strictEqual("chocolate", hero1.favFood);
  })

  it("hero should say name when talking", function () {
    assert.strictEqual("Hi, my name is Dale", hero1.talk());
  })
})

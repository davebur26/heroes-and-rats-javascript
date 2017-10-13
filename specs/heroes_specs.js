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


})

var assert = require('assert')
var Hero = require('../hero.js')


describe('Hero', function(){
  var hero1;

  beforeEach(function () {
    hero1 = new Hero("Derek", "300", "chocolate");
  })

  it("should return name of hero", function () {
    assert.strictEquals("Derek", hero1.name);
  })


})




// A. Create a constructor to create a Hero character
// A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name
// A Hero has a collection of tasks to complete

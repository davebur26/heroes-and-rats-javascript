var assert = require('assert')
var Hero = require('../tasks.js')


describe('Task', function(){
  var task;

  beforeEach(function () {
    task = new Task(65, "red", "5000");
  })

  it("should return difficulty level", function () {
    assert.strictEqual(65, task.difficulty);
  })

})

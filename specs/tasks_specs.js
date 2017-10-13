var assert = require('assert')
var Task = require('../tasks.js')


describe('Task', function(){
  var task;

  beforeEach(function () {
    task = new Task(65, 1, 5000);
  })

  it("should return difficulty level", function () {
    assert.strictEqual(65, task.difficulty);
  })

  it("should return urgency of task", function (){
    assert.strictEqual(1, task.urgency);
  })

  it("should return reward of task", function (){
    assert.strictEqual(5000, task.reward);
  })

  it("should change the status of the task", function (){
    task.completed();
    assert.strictEqual(true, task.completion)
  })

})

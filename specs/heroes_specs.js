var assert = require('assert')
var Hero = require('../heroes.js')
var Food = require('../food.js')
var Task = require('../tasks.js')


describe('Hero', function(){
  var hero1;
  var cabbage;
  var task1;
  var task2;
  var task3;

  beforeEach(function () {
    hero1 = new Hero("Derek", 300, "chocolate");
    cabbage = new Food("chocolate", 20)
    task1 = new Task(65, 3, 1234);
    task2 = new Task(100, 2, 3241);
    task3 = new Task(89, 1, 9999);
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
    assert.strictEqual(330, hero1.health)
  })

  it("sort to do list for difficulty", function() {
    hero1.addTask(task1)
    hero1.addTask(task2)
    hero1.addTask(task3)
    hero1.sortToDoList("difficulty", "HiToLo")
    assert.deepStrictEqual([task2, task3, task1], hero1.toDoList)
  })

  it("sort to do list for difficulty", function() {
    hero1.addTask(task1)
    hero1.addTask(task2)
    hero1.addTask(task3)
    hero1.sortToDoList("urgency", "LoToHi")
    assert.deepStrictEqual([task3, task2, task1], hero1.toDoList)
  })

  it("should show list of completed tasks", function () {
    hero1.addTask(task1)
    hero1.addTask(task2)
    hero1.addTask(task3)
    task2.completed()
    assert.deepStrictEqual([task2], hero1.tasksCompleted(true))
    assert.deepStrictEqual([task1, task3], hero1.tasksCompleted(false))
    })

})

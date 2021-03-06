// A. Create a constructor to create a Hero character
// A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name
// A Hero has a collection of tasks to complete

var Hero = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.toDoList = []
}

Hero.prototype.talk = function () {
  return "Hi, my name is " + this.name
}

Hero.prototype.eat = function (food) {
  var multiplyer = 1
  if (food.name === this.favFood) multiplyer *= 1.5;
  if (food.poisoned === true) multiplyer *= - 2
  this.health += (food.calories * multiplyer)
}

Hero.prototype.addTask = function (task) {
  this.toDoList.push(task);
};

Hero.prototype.sortToDoList = function (taskElement, order) {
  var orderMultiplyer = 1
  this.toDoList.sort(function(a,b){
    if (order === "LoToHi") orderMultiplyer = -1;
    return (b[taskElement] - a[taskElement]) * orderMultiplyer
  })
}

Hero.prototype.tasksCompleted = function (status) {
  filteredTasks = []
  filteredTasks = this.toDoList.filter(function(task){
    return task.completion === status
  })
  return filteredTasks
}


module.exports = Hero;

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
  if (food.name === this.favFood) multiplyer = 1.5;
  this.health += food.calories * multiplyer
}

Hero.prototype.addTask = function (task) {
  this.toDoList.push(task);
};

Hero.prototype.sortToDoList = function (taskElement, order) {
  this.toDoList.sort(function(a,b){
    return b[taskElement] - a[taskElement]
  })

};
module.exports = Hero;

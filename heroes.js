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
  this.health += food.calories
}

module.exports = Hero;

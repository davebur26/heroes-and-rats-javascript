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
}

module.exports = Hero;

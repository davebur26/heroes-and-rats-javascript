var Task = function(difficulty, urgency, reward) {
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completion = false;
}

Task.prototype.completed = function () {
  this.completion = true;
};

module.exports = Task;

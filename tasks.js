var Task = function(difficulty, urgency, reward) {
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completion = false;
}

module.exports = Task;

/**
 * tast.manager
 *
 * Used to get the highest priority task.
 */

module.exports = {

  dispatch: function (creep) {
    // TODO assign the most important task.
    let task = 'harvester';

    creep.memory.task = task;
    creep.say(task);
    return task;
  },

  getWorkers: function () {
    return _.filter(Game.creeps, (creep) => creep.memory.role == 'worker');
  },

  /**
   * @param task the name of the task
   * @return array of workers on that task
   */
  getTaskWorkers: function (task) {
    return _.filter(this.getWorkers, (creep) => creep.memory.task == task)
  }
};

/**
 * tast.manager
 *
 * Used to get the highest priority task.
 */

module.exports = {

  dispatch: function (creep) {
    if (0 >= creep.carry.energy) {
      creep.memory.task = null;
      creep.memory.state = 'harvest';
    }


    this.transfer(creep) || this.build(creep) || this.upgrade(creep);

    creep.say(creep.memory.task);
    return creep.memory.task;
  },

  transfer: function(creep) {
    let target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
      filter: (structure) => {
        return (
          structure.structureType == STRUCTURE_EXTENSION
          || structure.structureType == STRUCTURE_SPAWN
        ) && structure.energy < structure.energyCapacity;
      }
    });

    if (target) {
      creep.memory.task = 'transfer';
      creep.memory.target = target.id;
      return true;
    }
    return false;
  },

  upgrade: function(creep) {
    creep.memory.task = 'upgrade';
    creep.memory.target = creep.room.controller.id;

    return true;
  },

  build: function(creep) {
    target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);

    if (target) {
      creep.memory.task = 'build';
      creep.memory.target = target.id;
      return true;
    }
    return false;
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

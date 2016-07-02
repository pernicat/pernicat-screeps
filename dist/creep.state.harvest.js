var actionFind = require('creep.action.find');

module.exports = {

  /** @param {Creep} creep **/
  run: function(creep) {
    if (!creep.memory.target) {
      // could use findClosestByPath instead
      // TODO filter so that they have energy
      creep.memory.target = creep.pos.findClosestByRange(FIND_SOURCES).id;
    }

    if(creep.harvest(Game.getObjectById(creep.memory.target)) == ERR_NOT_IN_RANGE) {
      actionFind.run(creep);
    } else {
      actionFind.reset(creep);
    }

    if (creep.carry.energy >= creep.carryCapacity) {
      creep.memory.state = 'working';
      creep.memory.target = null;
      creep.memory.task = null;
    }
  }

};

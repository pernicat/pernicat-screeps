var actionFind = require('creep.action.find');

module.exports = {

    /** @param {Creep} creep **/
    run: function(creep) {

      if (!creep.memory.target) {
        // could use findClosestByPath instead
        console.log(`${creep.name} no target`);
        creep.memory.task = null;
        actionFind.reset(creep);
      }

      let result = creep.transfer(Game.getObjectById(creep.memory.target), RESOURCE_ENERGY)

      switch (result) {
        case ERR_NOT_IN_RANGE:
          console.log(`${creep.name} not in range`);
          actionFind.run(creep);
          break;
        case OK:
          console.log(`${creep.name} transfer OK`);
          actionFind.reset(creep);
          break;
        case ERR_NOT_ENOUGH_RESOURCES:
        case ERR_FULL:
          creep.memory.task = null;
          creep.memory.target = null;
          actionFind.reset(creep);
          break;
        default:
          console.log(`error ${result}`)
      }

      if (0 >= creep.carry.energy) {
        creep.say(`Done`);
        creep.memory.task = null;
        creep.memory.target = null;
      }
    }
};

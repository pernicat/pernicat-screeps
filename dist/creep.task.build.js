var actionFind = require('creep.action.find');

module.exports = {

    /** @param {Creep} creep **/
    run: function(creep) {

      if(creep.build(Game.getObjectById(creep.memory.target)) == ERR_NOT_IN_RANGE) {
        actionFind.run(creep);
      } else {
        actionFind.reset(creep);
      }

      if (0 >= creep.carry.energy) {
        creep.say(`Done`);
        creep.memory.task = null;
        creep.memory.target = null;
      }
    }
};

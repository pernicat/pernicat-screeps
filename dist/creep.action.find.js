module.exports = {

  /** @param {Creep} creep **/
  run: function(creep) {

    if (!creep.memory.path) {
      creep.memory.path = creep.pos.findPathTo(Game.getObjectById(creep.memory.target));
    }

    let result = creep.moveByPath(creep.memory.path);

    if (OK != result) {
      console.log(`${creep.name} can't move ${result}`);
      console.log(`${creep.name} reseting path`);
      creep.memory.path = null;
    }
  },
  reset: function(creep) {
    creep.memory.path = null;
  }
};

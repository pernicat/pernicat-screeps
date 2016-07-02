module.exports = {

  /** @param {Creep} creep **/
  run: function(creep) {
    if (!creep.memory.target) {
      console.error(`no target set for ${creep.name}`);
    }

    if (!creep.memory.path) {
      creep.memory.path = creep.pos.findPathTo(creep.memory.target);
    }

    creep.moveByPath(creep.memory.path);
  }
};

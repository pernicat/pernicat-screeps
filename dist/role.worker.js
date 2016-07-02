var states = {
  working: require('creep.state.working'),
  harvest: require('creep.state.harvest')
};

module.exports = {

  /** @param {Creep} creep **/
  run: function(creep) {
    if (!creep.memory.state) {
      creep.memory.state = 'harvest';
    }

    if (!states[creep.memory.state]) {
      console.error(`unknown state ${creep.memory.state}`);
    }

    states[creep.memory.state].run(creep);
  }

};

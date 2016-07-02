var manager = require('manager.task');
var taskTransfer = require('creep.task.transfer');
var taskUpgrade = require('creep.task.upgrade');
var taskBuild = require('creep.task.build');

module.exports = {

  /** @param {Creep} creep **/
  run: function(creep) {

    //console.log(`${creep.name} is working`);
    if (!creep.memory.task) {
      manager.dispatch(creep);
    }

    switch (creep.memory.task) {
      case 'transfer':
        taskTransfer.run(creep);
        break;
      case 'upgrade':
        taskUpgrade.run(creep);
        break;
      case 'build':
        taskBuild.run(creep);
        break;
      default:
        console.log(`unknown task ${creep.memory.task} for ${creep.name}`);
        console.log(`removing task ${creep.memory.task} for ${creep.name}`);
        creep.memory.task = null;
    }


    if (0 >= creep.carry.energy) {
      creep.say(`${creep.memory.task} is done.`);
      creep.memory.task = null;
      creep.memory.state = 'harvest';
      creep.memory.target = null;
    }
  }
};

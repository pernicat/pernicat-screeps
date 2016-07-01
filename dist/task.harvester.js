var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
            return;
        }


        var targets = creep.room.find(FIND_STRUCTURES, {
              filter: (structure) => {
                  return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                      structure.energy < structure.energyCapacity;
              }
        });


        if(targets.length < 0) {
          // No Targets
          return;
        }

        if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(targets[0]);
        } else if (0 >= creep.carry.energy) {
          creep.say(`Task ${creep.memory.task} is done.`);
          creep.memory.task = null;
        }

    }
};

module.exports = roleHarvester;

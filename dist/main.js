var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');


module.exports.loop = function () {

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }
    
    let mySpawn = Game.spawns.Spawn1;

    var checkCreeps = function (role, count) {
        //console.log(mySpawn.energyCapacity, mySpawn.energy);
        if (mySpawn.energyCapacity > mySpawn.energy) {
            //console.log('not enough energy');
            return;
        }
        
        
        let creeps = _.filter(Game.creeps, (creep) => creep.memory.role == role);

        if (creeps.length < count) {
            console.log('creating new creep', role);
            
            let bodyWork = [];
            let bodyCarry = [];
            let bodyMove = [];
            
            let buffer = 50;
            
            let quantityWork = Math.floor(((mySpawn.energy - buffer) * .5) / 100);
            let quantityCarry = Math.floor(((mySpawn.energy - buffer) * .25) / 50);
            let quantityMove = Math.floor(((mySpawn.energy - buffer) * .25) / 50);
            
            for(let i = 0; i < quantityWork; i++) {
                bodyWork.push(WORK);
            }
            
            for(let i = 0; i < quantityCarry; i++) {
                bodyCarry.push(WORK);
            }
            
            for(let i = 0; i < quantityMove; i++) {
                bodyMove.push(WORK);
            }
            
            let body = bodyWork.concat(bodyCarry, bodyMove);
            
            console.log(body);
            
           // var newCreep = Game.spawns.Spawn1.createCreep(body, undefined, {role: role});
        }
    }

    
    checkCreeps('harvester', 1);
    checkCreeps('upgrader', 3);
    checkCreeps('builder', 1);

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}
var config = require('./config');

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-screeps');

  grunt.initConfig({
    screeps: {
      options: config.screeps.options,
      dist: {
        src: ['dist/*.js']
      }
    }
  });
};

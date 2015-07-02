// Define grunt behavior for this project
module.exports = function(grunt) {

  // Define settings for modules
  grunt.initConfig({
    sample : {
      development : {
        options : {
          color: 'red'
        },
        files : {
          'result.file' : 'source.file'
        }
      }
    }
  });

  // Load modules
  grunt.loadNpmTasks('grunt-contrib-sample');

  // Define tasks
  grunt.registerTask('default', ['sample']);

};

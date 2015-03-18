module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {                  
      dist: {                   
        options: {              
          config: 'config.rb'
        }
      }
    },
    concat_css: {
      all: {
        src: ["public/css/reset.css","public/css/main.css","public/css/cv.css","public/css/responsive.css"],
        dest: "public/css/style.css"
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-concat-css');

  // Default task(s).
  grunt.registerTask('default', ['compass','concat_css']);

};
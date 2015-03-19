module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {                  
      all: {                   
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
    },
    processhtml: {
      all: {
        files: {
          'public/index.html': ['public/src_index.html'],
          'public/cv.html': ['public/src_cv.html']
        }
      }
    },
    watch: {
      scripts: {
        files: ['sass/*','public/src_*'],
        tasks: ['default'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['compass','concat_css','processhtml']);

};
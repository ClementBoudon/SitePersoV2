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
        src: ["src/css/reset.css","src/css/main.css","src/css/cv.css","src/css/responsive.css"],
        dest: "src/css/style.css"
      },
    },
    processhtml: {
      all: {
        files: {
          'clement/htdocs/index.html': ['src/html/index.html'],
          'clement/htdocs/cv.html': ['src/html/cv.html']
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/sass/*','src/html/*'],
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

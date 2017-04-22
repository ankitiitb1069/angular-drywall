var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    nodemon: {
      dev: {
        script: 'app.js',
        options: {
          ignore: [
            'node_modules/**'
            ],
          ext: 'js'
        }
      }
    },
    watch: {
      serverJS: {
        files: ['service/**/*.js'],
        task: ['newer:jshint:server']
      }
    },
    jshint: {
      server: {
        options: {
          jshintrc: '.jshintrc-server'
        },
        src: [
          'schema/**/*.js',
          'service/**/*.js'
        ]
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');



  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('dev', ['lint','concurrent']);
  grunt.registerTask('production', ['lint','concurrent']);

  grunt.registerTask('default', ['dev']);
};

/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    //concat js files to one mother of a file
    //not used atm
    uglify: {
      dist: {
        src: '<project name>-plugin/js/<project name>.js',
        dest: 'dist/<project name>-plugin/js/<project name>.min.js'
      }
    },

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'dist/<project name>-child_theme/css/style.min.css': '<project name>-child_theme/sass/master.scss',       // 'destination': 'source'
        }
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, src: ['<project name>-plugin/<project name>-plugin.php'], dest: 'dist/'},
          {expand: true, src: ['img/*'], dest: 'dist/'}
        ],
      },
    },

    ftpush: {

      plugin: {
        auth: {
          host: 'lakeside-design.de',
          port: 21,
          authKey: 'host'
        },
        src: 'dist/<project name>-plugin/',
        dest: '/wp-content/plugins/<project name>-plugin/',
        exclusions: ['**/.DS_Store']
      },

      childTheme: {
        auth: {
          host: 'lakeside-design.de',
          port: 21,
          authKey: 'host'
        },
        src: 'dist/<project name>-child_theme/',
        dest: '/wp-content/themes/<project name>-child_theme/',
        exclusions: ['**/.DS_Store']
      }
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['dist/js/*.js']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-ftpush');

  // Default task.
  grunt.registerTask('default', ['uglify', 'sass', 'copy', 'ftpush']); // 'concat',

};

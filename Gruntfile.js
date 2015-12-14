module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    concat: {
      dist: {
        src: ['less/header.less', 'less/content.less', 'less/sidebar.less', 'less/footer.less', 'less/variables.less', 'less/general.less'],
        dest: 'less/main.less'
      },
    },

    less: {
     development: {
        options: {
          paths: ["less/"]
        },
        files: {
          "css/main.css": "less/main.less"
        },
      }, 
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'style.min.css': ['css/main.css']
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'script/script.js',
        dest: 'script.min.js'
      }
    },

    watch: {
      scripts: {
        files: ['script/*.js'],
        tasks: ['uglify']
      },
      less: {
        files: ['less/*.less'],
        tasks: ['concat', 'less']
      },
      css: {
        files: ['**/*.css'],
        tasks: ['cssmin']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'less', 'cssmin', 'uglify', 'watch']);

};
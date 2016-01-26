module.exports = function(grunt) {

  grunt.initConfig({
    eslint: {
      target: ['Gruntfile.js', 'client/js/core/*.js', 'client/js/components/*.js']
    },
    clean: {
       js:["client/dist/*.js", "!client/dist/*.min.js"]
    },
    browserify:{
	deps: {
            files: {
                'client/dist/deps.js': ['client/js/dependencies/main.js']
            },
            options: {
		browserifyOptions: {
                	"standalone": "deps"
		    }
            }
        },
	optional: {
            files: {
                'client/dist/optional.js': ['client/js/dependencies/optional.js']
            },
            options: {
		browserifyOptions: {
                	"standalone": "optional"
		}
            }
        }
    },
    uglify: {
    options: {
      mangle: {
      },
      compress: {
        global_defs: {
          "DEBUG": false
        },
        dead_code: true
      }
    },
    deps: {
      files: {
        'client/dist/deps.min.js': ['client/dist/deps.js']
      }
    },
    optional: {
      files: {
        'client/dist/optional.min.js': ['client/dist/optional.js']
      }
    }

  }
  });

  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['eslint']);
  grunt.registerTask('deps', ['browserify', 'uglify', 'clean']);

};
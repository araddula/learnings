//Grunt Configuration File
//Setup sources for Karma, JShint, Uglify here
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        
        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                '../js/build/app.min.js': ['../js/app.js','../js/controllers.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify','karma']);//runs when typed "grunt" in terminal
    grunt.registerTask('minify', ['uglify']);//runs when typed "grunt minify" in terminal
};
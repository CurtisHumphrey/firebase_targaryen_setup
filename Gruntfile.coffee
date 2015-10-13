module.exports = (grunt) ->
  grunt.initConfig
    exec:
      git:
        cmd: 'START "" "C:\\Program Files\\TortoiseGit\\bin\\TortoiseGitProc.exe" /command:log /path:..'
      jasmine_rules:
        cmd: 'node jasmine-runner.js'

    watch:
      firebase_rules:
        files: ['rules.json','spec/**/*.js']
        tasks: ['exec:jasmine_rules']

  require('load-grunt-tasks')(grunt)
  
  grunt.registerTask 'git', ['exec:git']
  grunt.registerTask 'test', ['force:exec:jasmine_rules','watch']
  grunt.registerTask 'default', ['test']
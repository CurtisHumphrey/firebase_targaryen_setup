'use strict';

var targaryen = require('targaryen');
targaryen.setFirebaseRules(require('../../rules.json'));


describe('Name of the group Security Rules', function() {  
  beforeEach(function() {
    jasmine.addMatchers(targaryen.jasmine.matchers);

    targaryen.setFirebaseData(require('../data/example.json'));
  });

  describe('Basic Tests Every Rule Set Should Pass', function() {
    it('the root should not be readable by unauthenticated at the very least', function() {
      expect(targaryen.users.unauthenticated).cannotRead('/');
    });
    it('the root should not be writable with null (delete) by any user type', function() {
      expect(targaryen.users.unauthenticated).cannotWrite('/', null);
      expect(targaryen.users.anonymous).cannotWrite('/', null);
      expect(targaryen.users.unauthenticated).cannotWrite('/', null);
      expect(targaryen.users.password).cannotWrite('/', null);
    });
  });
});
'use strict';

var targaryen = require('targaryen');
targaryen.setFirebaseRules(require('../../rules.json'));


describe('Essential Security Rules', function() {  
  beforeEach(function() {
    jasmine.addMatchers(targaryen.jasmine.matchers);

    targaryen.setFirebaseData(require('../data/empty_db.json'));
  });

  describe('Basic Tests Every Rule Set Should Pass:', function() {
    it('the root should not be readable by an unauthenticated user, at the very least', function() {
      expect(targaryen.users.unauthenticated).cannotRead('/');
    });
    it('the root should not be writable with null (delete) by any user type', function() {
      expect(targaryen.users.unauthenticated).cannotWrite('/', null);
      expect(targaryen.users.anonymous).cannotWrite('/', null);
      expect(targaryen.users.password).cannotWrite('/', null);
    });
  });
});
var assert = require("assert"),
    validJavaIdentifier = require('..');

describe('validJavaIdentifier()', function(){
    it('should return false with `try` as argument', function(){
      assert.equal(validJavaIdentifier('try'), false);
    });
    it('should return true with `toto` as argument', function(){
      assert.equal(validJavaIdentifier('toto'), true);
    });
    it('should return false with undefined as argument', function(){
      assert.equal(validJavaIdentifier(), false);
    });
    it('should return false with `1abc` as argument', function(){
      assert.equal(validJavaIdentifier('1abc'), false);
    });
    it('should return false with ` ` as argument', function(){
      assert.equal(validJavaIdentifier(' '), false);
    });
});

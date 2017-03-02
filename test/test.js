var assert = require('assert');

// Let's play with Arrays
describe('Array', function() {

  describe('Returns the first element of an array; fn(array)', function(){
    
    var fn = function(arr){
      var out;
      // NOTE: This test is done for you
      // Solve the rest!
      out = arr[0];
      return out;
    };

    it('returns the first element', function(){
      assert.equal(fn(['a', 'b', 'c']), 'a', 'should return ok');
    });
  });

  describe('What position is the element in the array? fn1(array, value)', function() {

    var fn1 = function(arr, val){
      var out;
      // WHAT GOES HERE????
      return out;
    };

    it('should return -1 when the value is not present', function() {
      assert.equal(fn1([1,2,3], 4), -1, '4 is not in the list');
      assert.equal(fn1([], 0), -1, 'there is nothing inside the array');
      assert.equal(fn1([1,1,1,1,1,1,1], '1'), -1, '1 as string is not in the array of numbers');
      
      var party = ['beer', 'chips', 'friends'];
      assert.equal(fn1(party, 'bitches'), -1, 'no bitches in the party');
    });

    it('should not return -1 when the value is present', function(){
      assert.equal(fn1([1,2,3], 1), 0, '1 is the 1st element');
      assert.equal(fn1([0,1], 1), 1, '1 is the 2nd element');
      assert.equal(fn1([-1, 0, 1], 1), 2, '1 is the 3rd element');
      assert.equal(fn1(['a', 'b', 'c'], 'c'), 2, 'c is in the list');
      assert.equal(fn1(['this', 'love', 'is','realy', 'amazing'], 'amazing'), 4, 'yeah, it is amazing');
      
      var itemsShaking = [ 'pennies', 'booty', 'victims' ];
      assert.equal(fn1(itemsShaking, 'booty'), 1, 'Shake it fast but watch yourself.');
    });
  });

  // -----
  describe('Convert list of elements to a string; fn2(array)', function(){
    
    var fn2 = function(arr, delimiter){
      var out;
      // WHAT GOES HERE???
      return out;
    }

    it('should merge all elements to a string', function(){
      assert.equal(fn2([]), '', 'empty array should be return for a empty array');
      assert.equal(fn2([5]), '5', '5 should be string');
      assert.equal(fn2([1,2,3]), '1,2,3', '1,2,3 GO!');
    });

    it('should merge all elements with a special separator', function(){
      assert.equal(fn2([], '*'), '', 'empty array should be return for a empty array');
      assert.equal(fn2([5], '*'), '5', '5 should be string');
      assert.equal(fn2([1,2,3], '*'), '1*2*3', '1*2*3 is the same as 3! or 3 factorial');

      var lastNames = ['Blow', 'Smith']
      assert.equal(fn2(lastNames, '-'), 'Blow-Smith', 'If Mr Blow and Ms. Smith got married, their last names could be Blow-Smith');
      
    });
    
  });

  //--- Array.length
  describe('Only operate on arrays; fn3(array)', function(){
    
    var fn3 = function(obj){
      var out;
      // WHAT GOES HERE???
      return out;
    }

    it('should return false for anything not an array', function(){
      assert.equal(fn3(), false, 'nothing is nothing');
      assert.equal(fn3(1), false, 'numbers, really');
      assert.equal(fn3('Mom!'), false, `No. Your mom can't help you`);

      var dad = {
        type : 'the man of the house'
      }
      assert.equal(fn3(dad), false, `That's not going to help either`);
    });

    it('should return true when given an array', function(){
      assert.equal(fn3([]), true, `yup, that's an array`);
      assert.equal(fn3([6]), true, `6 in a box`);
      assert.equal(fn3(['boobs']), true, `Nice.`);
      
      var arr = [1,2,3,4]
      assert.equal(fn3(arr), true, `Numbers!`);
    });
  });
  
  describe('Sort things in order; fn4(array)', function(){
    
    var fn4 = function(arr){
      var out;
      // WHAT GOES HERE???
      return out;
    }

    it('should return a sorted list of numbers', function(){
      assert.deepEqual(fn4([]), [], 'an empty array is already sorted')
      assert.deepEqual(fn4([1,2,3,4]), [1,2,3,4], `sorted numbers as input should be same as the output`);
      assert.deepEqual(fn4([4,3,2,1,0]), [0,1,2,3,4], 'should start at 0 and end at 4 in order');
      assert.deepEqual(fn4([4,100,3,2,1,11,12,0,10]), [0,1,2,3,4,10,11,12,100], 'make sure 10 and 12 are sorted in order');
    });

    it('should return a sorted list of strings', function(){
      assert.deepEqual(fn4(['u']), ['u'], `u is already sorted`);
      assert.deepEqual(fn4(['a','b','c']), ['a', 'b', 'c'], 'a,b,c are already sorted');
      assert.deepEqual(fn4(['c','b', 'a']), ['a','b','c'], 'again. a,b,c');
      assert.deepEqual(fn4(['aa','a','your mama', 'aaa']), ['a', 'aa', 'aaa', 'your mama'], `Did your mom sort this for you?`);
    });
  });
  
  describe('Sort in descending order; fn5(array)', function(){
    
    var fn5 = function(arr){
      var out;
      // WHAT GOES HERE???
      return out;
    }

    it('should return a sorted list of numbers in descending order', function(){
      assert.deepEqual(fn5([]), [], 'an empty array is already sorted')
      assert.deepEqual(fn5([4,3,2,1]), [4,3,2,1], `sorted array as input and output`);
      assert.deepEqual(fn5([0,1,2,3,4]), [4,3,2,1,0], 'should start at 0 and end at 4 in order');
      assert.deepEqual(fn5([4,100,3,2,1,11,12,0,10]), [100, 12, 11, 10, 4, 3, 2, 1, 0], 'make sure 12 and 10 are sorted in order');
    });

    it('should return a sorted list of strings', function(){
      assert.deepEqual(fn5(['u']), ['u'], `u is already sorted`);
      assert.deepEqual(fn5(['a','b','c']), ['c', 'b', 'a'], 'c,b,a are already sorted');
      assert.deepEqual(fn5(['c','b', 'a']), ['c','b','a'], 'again. c,b,a');
      assert.deepEqual(fn5(['aa','a','your mama', 'aaa']), ["your mama", "aaa", "aa", "a"], `Great job sorting`);
    });
  });
});

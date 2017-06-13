var assert = require("assert");
var Item = require("../item.js");

describe('Item', function(){

  var item;

  beforeEach(function(){
      item = new Item("mop", 5, true);
  });

  it('has a name', function(){
    assert.strictEqual("mop", item.name);
  });

  it('has a price', function(){
    assert.strictEqual(5, item.price);
  })

  it('is on special 2-4-1', function(){
    assert.strictEqual(true, item.special);
  })

});

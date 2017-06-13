var assert = require("assert");
var Basket = require("../basket.js");
var Item = require("../item.js");

describe('Basket', function(){

  var basket;
  var item;
  var item1;
  var item2;

  beforeEach(function(){
      basket = new Basket();
      item = new Item("broom", 10, true);
      item1 = new Item("mop", 8, false);
      item2 = new Item("shovel", 7, true);
  });

  it('is empty on start', function(){
    assert.strictEqual(0, basket.items());
  });

  it('can add items', function(){
    basket.addItem(item);
    assert.strictEqual(1, basket.items());
  });

  it('can remove items', function(){
    basket.addItem(item);
    basket.removeItem(item);
    assert.strictEqual(0, basket.items());
  });

  it('can remove items more', function(){
    basket.addItem(item);
    basket.addItem(item1);
    basket.addItem(item2);
    basket.removeItem(item2);
    basket.removeItem(item);
    assert.strictEqual(1, basket.items());
  });

  it("can't remove items that don't exist", function(){
    basket.addItem(item);
    basket.removeItem(item);
    basket.removeItem(item);
    assert.strictEqual(0, basket.items());
  });

  it("basket value works", function(){
    basket.addItem(item);
    basket.addItem(item1);

    assert.strictEqual(18, basket.balance());
  });

  it("basket value works", function(){
    basket.addItem(item);
    basket.addItem(item1);
    basket.addItem(item);
    basket.addItem(item1);

    assert.strictEqual(32.4, basket.balance());
  });




});

var Basket = function() {
  this.item_array = [];
  this.discount = 0.10;
  this.threshold = 20;

  this.items = function() {
    return this.item_array.length;
  }
  this.addItem = function(item){
    this.item_array.push(item);
  }
  this.removeItem = function(item){
   var index = this.item_array.indexOf(item);
   if (index > -1){
     this.item_array.splice(index,1);
   }
  }
  this.balance = function(){
    var total = 0;
    for (var i = 0; i < this.item_array.length; i++) {
      total += this.item_array[i].price
    }

    if (total > this.threshold){
      return total * (1-this.discount);
    }
    else {
      return total;
    }
  }
}//Basket

module.exports = Basket;

//JavaScript
//Week 3 Monday Basic Assignment

var cashRegister = {
  // implement me!
  	cash: [],
  	add:  function (thing) {
		var thingType = typeof thing;
			if (thingType !== 'string' && thingType !== 'object' && thingType !== 'boolean') {
			this.cash.push(thing);
			}
		},
	subtract: function (thing) {
		var thingType = typeof thing;
			if (thingType !== 'string' && thingType !== 'object' && thingType !== 'boolean') {
			this.cash.push(thing*-1);
			}
		}
		,
		//Total lists cash as undefined. I'm trying to store my additions to the array. What am I doing wrong?
	total: this.cash.reduce(function(a, b) {
    		return a + b;
    })
  
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log(cashRegister.cash);

console.log("Your total is " + cashRegister.total());


var shoppingCart = {
	basket : [],
	key : 0,

	add: function(pli) {
		this.key++;
		pli.key = this.key;
    	this.basket.push(pli);

    	return pli.key;
	},
	remove: function(itemKey, qty) {
		this.basket.forEach(function(item, index, array) {
			if(item.key === itemKey){
				//found the item, now adjust the qty
				if (qty >= item.count) {
		          array.splice(index, 1);
		        } else {
		          item.count -= qty;
		        }
			}
		})
	},
	list: function() {
		var cart = [];
		this.basket.forEach(function(item) {
			cart.push(item.count + ' X ' + item.description);
		})

		return cart;
	},
	total: function() {
		var totalDue = 0;
		this.basket.forEach(function(item) {
			totalDue += item.price * item.count;
		})

		return totalDue;
	}
};

var item1 = shoppingCart.add({description: "Huggies Little Snugglers Diapers",
                              count: 4,
                              price: 19.77});

var item2 = shoppingCart.add({description: "Tylenol Extra Strength Acetaminophen",
                              count: 2,
                              price: 22.38});

var item3 = shoppingCart.add({description: "Flents Quiet Please Foam Ear Plugs",
                              count: 10,
                              price: 11.50});

var item4 = shoppingCart.add({description: "Monsters Eat Whiny Children",
                              count: 1,
                              price: 11.07});

shoppingCart.remove(item3, 6);
shoppingCart.remove(item4, 1);

console.log(shoppingCart.list());

/* Should print:
[
'4 X Huggies Little Snugglers Diapers',
'2 X Tylenol Extra Strength Acetaminophen',
'4 X Flents Quiet Please Foam Ear Plugs',
]
*/

console.log(shoppingCart.total());

// Should print: 169.84
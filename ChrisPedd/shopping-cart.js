var shoppingCart = {
	cart: [],
	grandTotal: 0,
	add: function (itemName, itemCount) {
		for (i=0; i<products.length; i++) {
		     if (products[i].name == itemName) {
		        this.cart.push(products[i]);      
		     }
		}
		for (i=0; i<this.cart.length; i++) {
		     if (this.cart[i].name == itemName) {
		        this.cart[i].subCount += itemCount;
		        console.log("++Added " + itemCount + " X " + this.cart[i].description.substring(0,20) + "... to the shopping cart++");
		     }
		}
	},
	remove: function (itemName, itemCount) {
		for (i=0; i<this.cart.length; i++) {
		     if (this.cart[i].name == itemName) {
		        this.cart[i].subCount -= itemCount;
		        if (this.cart[i].subCount < 0 ) throw new Error("nope.jpg");
		        console.log("--Removed " + itemCount + " X " + this.cart[i].description.substring(0,20) + "... from the shopping cart--");
		     }
		   }
	},
	list: function () {
		console.log("\n--- Shopping Cart Contents:");
		this.cart.forEach(function (thing) {
			if (thing.subCount >0 ) {
				console.log (thing.subCount + " X " + thing.description);
			}
		});
	},
	total: function () {
		var subTotal = 0;
		this.cart.forEach(function (thing) {
			//debugging line to test for proper item checks 
			//console.log(thing.subCount + "|" + thing.price);
			subTotal += thing.price * thing.subCount;
		});
		this.grandTotal += subTotal;
		console.log("\n--- Grand Total:\n" + this.grandTotal);
	},
};

products = [
		item1 = {
		name: "item1",
		description: "Huggies Much Doge Diapers",
		price: 19.77,
		subCount: 0,
		},
	    item2 = {
	    name: "item2",
		description: "Tylenol Extra Strength Methamphetamines",
		price: 22.38,
		subCount: 0,
		},
		item3 = {
		name: "item3",
		description: "Flents Easy Listening Jazzy Foam Ear Plugs",
	    price: 11.50,
	    subCount: 0,
		},
		item4 = {
		name: "item4",
		description: "Monsters Eat Whiny Children for Breakfast",
	    price: 11.07,
	    subCount: 0,
		},

];


console.log("\n*** WELCOME TO B.V. MART ***\n")
// had to change arguments to strings to make it work properly within my array, would love to know why
shoppingCart.add("item1", 4);
shoppingCart.add("item2", 2);
shoppingCart.add("item3", 10);
shoppingCart.add("item4", 1);

shoppingCart.remove("item3", 6);
shoppingCart.remove("item4", 1);

shoppingCart.list();
shoppingCart.total();
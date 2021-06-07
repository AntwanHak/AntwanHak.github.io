// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [{
        name: "Broccoli",
        lactose: false,
        nutFree: false,
        organic: false,
        price: 1.99
		image: '/images/broccoli.jpg'
    },
    {
        name: "Bread",
		lactose: true,
		nutFree: true,
		organic: false,
		price: 1.49,
		image: '/images/bread.jpg'
    },
    {
        name: "Organic Apple",
        lactose: false,
        nutFree: false,
        organic: true,
        price: 1.35
		image: '/images/organicapple.jpg'
    },
    {
        name: "Organic Pasta",
        lactose: true,
        nutFree: false,
        organic: true,
        price: 1.99
		image: '/images/organicpasta.jpg'
    },
    {
        name: "Organic Whole Chicken",
        lactose: false,
        nutFree: false,
        organic: true,
        price: 7.42
		image: '/images/organicwholechicken.jpg'
    },
    {
        name: "Milk",
        lactose: true,
        nutFree: false,
        organic: false,
        price: 4.69
		image: '/images/milk.jpg'
    },
    {
        name: "Organic Yogurt",
        lactose: true,
        nutFree: false,
        organic: true,
        price: 3.99
		image: '/images/organicyogurt.jpg'
    },
    {
        name: "Organic Cereal",
        lactose: false,
        nutFree: true,
        organic: true,
        price: 4.99
		image: '/images/organiccereal.jpg'
    },
    {
        name: "Organic Salmon",
		lactose: true,
		nutFree: true,
		organic: true,
		price: 10.00,
		image: '/images/salmon.jpg'
    }
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, lactose, nut, organic) {
	let products = [];

	prods.sort(function(a, b){
			return a.price - b.price;
	})

	for (let i=0; i<prods.length; i+=1) {
		if (lactose && !prods[i].lactose) continue;
		if (nut && !prods[i].nutFree) continue;
		if (organic && !prods[i].organic) continue;
		products.push(prods[i]);

	}
	return products;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<chosenProducts.length; i+=1) {
		totalPrice+=chosenProducts[i].price;
	}
	return totalPrice;
}
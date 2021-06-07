
// This function is called when any of the tab is clicked
// It is adapted from w3schools.com

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

// generate a checkbox list from a list of products

function ProductChoices() {
    var s2 = document.getElementById('displayProduct');
		var lactose = document.getElementById("lactose").checked;
		var nut = document.getElementById("nut").checked;
		var organic = document.getElementById("organic").checked;

	
    s2.innerHTML = "";


	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListOfProducts(products, lactose, nut, organic);


	for (i = 0; i < optionArray.length; i++) {

		var div = document.createElement("div");
		div.className = "product";

		var img = document.createElement("img");
		img.src = ('images/' + optionArray[i].name + '.jpg').toLowerCase();
		div.appendChild(img);

		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label');
		nameLabel = document.createElement("b");
		nameLabel.appendChild(document.createTextNode(productName));
		label.appendChild(nameLabel);
		div.appendChild(label);

		var price = document.createElement('label');
		priceLabel = document.createElement("b");
		priceLabel.appendChild(document.createTextNode("$" + productPrice));
		price.appendChild(priceLabel);
		div.appendChild(price);

		var button = document.createElement('button');
		button.className = "addtocartbutton";
		button.innerHTML = "Add to cart";
		button.addEventListener("click", addToCart.bind(null, optionArray[i]), false)
		div.appendChild(button);

		s2.appendChild(div);

	}
}

var cartList = [];

function addToCart(item){
	if(cartList.includes(item)) return;

	if(item != null){
		cartList.push(item);
	}


	var c = document.getElementById('displayCart');
	c.innerHTML = "";


	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < cartList.length; i++) {
		var button = document.createElement('button');
		button.className = "removefromcartbutton";
		button.innerHTML = "X";
		button.addEventListener("click", removeFromCart.bind(null, cartList[i]), false)
		para.appendChild(button);

		para.appendChild(document.createTextNode(cartList[i].name + " - $" + cartList[i].price));
		para.appendChild(document.createElement("br"));
	}

	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(cartList)));
}

function removeFromCart(item){
	removeItemFromList(cartList, item);

	addToCart(null);
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price


function selectedItems(){

	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}

	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));

}

function removeItemFromList(list, item) {
  var i = list.indexOf(item);
  if (i > -1) {
    list.splice(i, 1);
  }
  return list;
}
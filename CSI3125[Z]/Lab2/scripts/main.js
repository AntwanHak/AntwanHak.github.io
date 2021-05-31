var current = "";

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [{
        name: "Broccoli",
        isLactose: false,
        isNut: false,
        isOrganic: false,
        price: 1.99
    },
    {
        name: "Bread",
        isLactose: true,
        isNut: true,
        isOrganic: false,
        price: 2.35
    },
    {
        name: "Organic Apple",
        isLactose: false,
        isNut: false,
        isOrganic: true,
        price: 1.35
    },
    {
        name: "GF Organic Pasta",
        isLactose: true,
        isNut: false,
        isOrganic: true,
        price: 1.99
    },
    {
        name: "Organic Whole Chicken",
        isLactose: false,
        isNut: false,
        isOrganic: true,
        price: 7.42
    },
    {
        name: "Kitkat Minis",
        isLactose: false,
        isNut: false,
        isOrganic: false,
        price: 2.99
    },
    {
        name: "Milk",
        isLactose: true,
        isNut: false,
        isOrganic: false,
        price: 4.69
    },
    {
        name: "Walnut",
        isLactose: false,
        isNut: true,
        isOrganic: false,
        price: 0.49
    },
    {
        name: "Organic Yogurt",
        isLactose: true,
        isNut: false,
        isOrganic: true,
        price: 3.99
    },
    {
        name: "GF Organic Cereal",
        isLactose: false,
        isNut: true,
        isOrganic: true,
        price: 4.99
    },
    {
        name: "Organic Salmon",
        isLactose: false,
        isNut: false,
        isOrganic: true,
        price: 10.00
    }
];

var currentCart = [];


// This function is called when any of the tab is clicked
// It is adapted from w3schools.com

function clickTab(event, tabName) 
{
    removeSelection();
    hideAll();

    event.target.setAttribute("class", "active");

    var page = document.getElementById(tabName);
    page.removeAttribute("hidden");

    switch(tabName)
    {
        case 'products':
            productsPage();
            break;
        case 'cart':
            cartPage();
            break;
    }
}

function removeSelection()
{
    var topnav = document.getElementById("tab");

    for (var i = 0; i < topnav.children.length; i++) {
        topnav.children[i].removeAttribute("class");
    }
}

function hideAll()
{
    var pageWrapper = document.getElementById("pageWrapper");

    for (var i = 0; i < pageWrapper.children.length; i++) 
    {
        pageWrapper.children[i].setAttribute("hidden", "");
    }
}

function productsPage()
{
    var category = document.getElementById("category");
    var selected = category.options[category.selectedIndex].text;

    if(current == selected)
    {
        return;
    }

    current = selected;
    var selectedProducts = [];
    var renderProducts = document.getElementById("renderProducts");

    if(selected == '')
    {
        renderProducts.innerHTML = "";
    }
    else
    {
        for(var i = 0; i < products.length; i++)
        {
            var product = products[i];
            switch(selected)
            {
                case 'None':
                    selectedProducts.push(product);
                    break;
                case 'Lactose Intolerant':
                    if(product.isLactose == false)
                    {
                        selectedProducts.push(product);
                    }
                    break;
                case 'Nut allergy':
                    if(product.isNut == false)
                    {
                        selectedProducts.push(product);
                    }
                    break;
                case 'Organic':
                    if(product.isOrganic == true)
                    {
                        selectedProducts.push(product);
                    }
                    break;
            }
        }

        renderProducts.innerHTML = "";

        selectedProducts.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))

        for(var i = 0; i < selectedProducts.length; i++)
        {
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "product";
            checkbox.id = selectedProducts[i].name;
            checkbox.value = selectedProducts[i].name;
            renderProducts.appendChild(checkbox);
            
            // create a label for the checkbox, and also add in HTML DOM
            var label = document.createElement('label')
            label.htmlFor = selectedProducts[i].name;
            label.appendChild(document.createTextNode(selectedProducts[i].name + " (Price = $" + selectedProducts[i].price + ")"));
            renderProducts.appendChild(label);
            
            // create a breakline node and add in HTML DOM
            renderProducts.appendChild(document.createElement("br"));
        }
    }
}

function cartPage()
{
    var selectedItems = document.getElementById("selectedItems");
    var totalPrice = document.getElementById("totalPrice");
    var total = 0;

    selectedItems.innerHTML = "";
    totalPrice.innerHTML = "";

    if(currentCart.length == 0)
    {
        totalPrice.innerHTML = "0";
    }
    else
    {
        for(var i = 0; i < currentCart.length; i++)
        {
            total += currentCart[i].price;

            var li = document.createElement('li');
            li.appendChild(document.createTextNode(currentCart[i].name));
            selectedItems.appendChild(li);
        }

        totalPrice.innerHTML = total;
    }
}

function updateCart()
{
    var inputs = document.querySelectorAll("#renderProducts input");
    currentCart = [];

    for(var i = 0; i < inputs.length; i++)
    {
        if(inputs[i].checked)
        {
            var product = products.find(o => o.name == inputs[i].value);
            currentCart.push(product);
        }
    }

    console.log(currentCart);
}
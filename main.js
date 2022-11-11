let carts = document.querySelectorAll('.buy-btn');

let products = [
    {
        brand: "Vans",
        tag: "SK8-Hi",
        price: 75,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'Checkerboard Classic Slip-On',
        price: 100,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'Authentic',
        price: 25,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'Old Skool',
        price: 10,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'Vans X Noon Goons Aut. 44 DX',
        price: 92.3,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'Team Wellness Sk8-Hi',
        price: 100,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'Authentic Brown',
        price: 25,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'CB Classic Slip-On (Brown/White)',
        price: 10,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'Textured Classic Slip-On',
        price: 92.3,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'After Dark ComfyCush Old Skool',
        price: 100,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'Old Skool Overt CC',
        price: 25,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'CB Classic Slip-On (Orange)',
        price: 10,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'Vintage Pop Old Skool',
        price: 92.3,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'Textured Sk8-Hi',
        price: 100,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'Vintage Pop Sk8-Hi',
        price: 25,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'Old Skool Overt CC',
        price: 10,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'Pop Color Old Skool Overt CC',
        price: 92.3,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'Old Skool (Brown)',
        price: 100,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'Anaheim Factory Authentic 44 DX',
        price: 25,
        qtyInCart: 0
    },
    {
        brand: 'Vans',
        tag: 'Classic Slip-On (Triple White)',
        price: 10,
        qtyInCart: 0
    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click',() => {
        cartQuantity (products[i]);
        totalCostForProduct (products[i]);
    })
}

// for incrementing of cart items count
function cartQuantity (product) {
    //console.log(product);
    let prodQuantity = localStorage.getItem('cartQuantity');
    prodQuantity = parseInt(prodQuantity);

    if (prodQuantity) {
        localStorage.setItem('cartQuantity', prodQuantity + 1);
        document.querySelector('.cart span').textContent = prodQuantity + 1;
    } else {
        localStorage.setItem('cartQuantity', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

// storing product info in local storage
function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    //console.log(cartItems);

    if(cartItems != null){

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].qtyInCart += 1;
    } else {
        product.qtyInCart = 1;
        cartItems = {
            [product.tag] : product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

//para di mag zero kahit i refresh
function cartCountNotReset () {
    let prodQuantity = localStorage.getItem("cartQuantity");
    if(prodQuantity) {
        document.querySelector('.cart span').textContent = prodQuantity;
    }
}

// for product costing
function totalCostForProduct(product) {
    //console.log("The price is " + product.price);
    let costTotal = localStorage.getItem('totalCost');

    if (costTotal != null) {
        costTotal = parseInt(costTotal);
        localStorage.setItem("totalCost", costTotal + product.price);
    } else {
        localStorage.setItem("totalCost", product.price)
    }
}

function cartDisplay () {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let prodContainer = document.querySelector(".main-content-product");
    console.log(cartItems);
    if (cartItems && prodContainer) {
        prodContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            prodContainer.innerHTML += `
            <div class="product"
                <iconify-icon icon="ci:off-close"></iconify-icon>
                <img src="./img/shoes/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            `
        })
    }
}

// this code execute on the initial load
cartCountNotReset();
cartDisplay();
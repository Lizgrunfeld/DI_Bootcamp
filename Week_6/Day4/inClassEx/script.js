const products = [
    {
        id: 0,
        name: "Deluxe Bicycle",
        url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
        price: 499.98
    },
    {
        id: 1,
        name: "Super Deluxe bagpack",
        url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
        price: 134.99
    },
    {
        id: 2,
        name: "Super Duper Scooter",
        url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
        price: 1090.95
    },
    {
        id: 3,
        name: "Smartphone",
        url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
        price: 399.99
    }
];

// Using a self invoking function, and using the DOM - add the products to the page and make them clickable.

function addProducts(products){
    products.forEach(element => {
        const div = document.createElement("div");
        const id = document.createElement('h1');
        const idText = document.createTextNode(element.name);
        id.appendChild(idText);
        const image = document.createElement("img");
        image.src = element.url
        const price = document.createElement('h3');
        const priceNumber = document.createTextNode(element.price);
        price.appendChild(priceNumber);
        const buttonBuy = document.createElement('button');
        buttonBuy.setAttribute('class','btn');
        const buttonText = document.createTextNode("Buy me!");
        buttonBuy.appendChild(buttonText);
        buttonBuy.dataset.name = element.name;
        buttonBuy.dataset.price = element.price;
        const prod = document.querySelector("#product");
        div.appendChild(id);
        div.appendChild(image);
        div.appendChild(price);
        div.appendChild(buttonBuy);
        prod.appendChild(div);
 
    })
}
addProducts(products)



Array.from(document.getElementsByClassName("btn")).forEach(function(element){

    element.addEventListener("click",(e) => {
        const cartLocal = JSON.parse(localStorage.getItem("cartLocal")) || [];
        console.log(cartLocal)

        const newItem = {
            name: e.target.dataset.name,
            price: e.target.dataset.price,
        };
        console.log(newItem)
        cartLocal.push(newItem);
        localStorage.setItem("cartLocal", JSON.stringify(cartLocal));
    })
})



// 5. When the user is done with his shopping, he will click on the "Pay button" (which is actually an anchor) and it will redirect him to another HTML page. 
// This HTML page is linked to another Javascript file. Using the DOM display all the items that the user bought 
// and the total price he needs to pay as well as a "Submit payment" Button

// 6. When the button is clicked -> add a successful message on the page, and clear all the items from the local storage.


// const buttonEvent = document.getElementById('btn');
// buttonEvent.addEventListener("click", function(products){
//     alert("wow i work")
// })

// const cartDiv = document.getElementById("cart");
// console.log(cartDiv)

// const buttonEvent = document.getElementById('btn');
// buttonEvent.addEventListener("click", myFunction)
// function myFunction(products){
//     const cartDiv = document.getElementById("cart");
//     const list = document.createElement("h1");
//     const productNameCart = document.createTextNode(products.name, products.price);
//     list.appendChild(productNameCart);
//     cartDiv.appendChild(list);
//     //when clicked product id with name and price added to cart.html page
// }


// function productSelected(){
//     const selectedProducts = [], keys = Object.keys(localStorage), i = keys.length;
//     while (i--) {selectedProducts.push(localStorage.getItem(keys[i]));}
//     document.getElementById("cart").textContent = selectedProducts;
// }



// const productToCart = document.getElementsByName("button").addEventListener("click", bringToCart);
// console.log(productToCart)



// const productsArray = [] || JSON.parse(localStorage.getItem("products"));
// function addToCart(event){
//     productsArray.push({name: event.target.parentElement.children[0], price:target.parentElement.children[1]})
//     console.log(productsArray)
//     localStorage.setItem("products", JSON.stringify(products))
// }
// addToCart()
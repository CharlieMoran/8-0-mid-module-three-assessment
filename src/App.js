import "./App.css";
import React from "react";
import productData from "./data/productData";

class App extends React.Component {
constructor (){
    super()
    this.state = {
        price: "",
        products: [],
        tax:"",
        totalPrice: "",
        firstName: "",
        lastName: "",
        email: "",
        ccNum: "",
        zipCode: "",
    }
} 

clicky = (el) => {
    let i = el.target.id;
    this.setState({
    price: Number(this.state.price + el.target.value).toFixed(2),
    tax: Number(this.state.price * .05),
    totalPrice: (Number(this.state.price + (this.state.price * .05))),
    products: this.state.products + (`${productData[i].name}: $${productData[i].price.toFixed(2)}`),
    });
    return (<div id="cart">
        <h3>Cart</h3>
        <ul id="cart-stuff">
        <li>{this.products}</li>
        </ul>
        </div>)
};



formatPrice = (price) => `$${price.toFixed(2)}`;

checkOut = () => {
let fN = document.getElementById("first");
let lN = document.getElementById("last");
let eM = document.getElementById("email");
let cC = document.getElementById("cc");
let zipC = document.getElementById("zip");

this.state = {
    firstName: fN,
    lastName: lN,
    email: eM,
    ccNum: cC,
    zipCode: zipC,
}

if (fN === "" || typeof(fN) === "undefined" || typeof(fN) === null){
    alert("Input is not valid")
}
if (lN === "" || typeof(lN) === "undefined" || typeof(lN) === null){
    alert("Input is not valid")
}
if (eM.length === 0 || typeof(eM) === "undefined" || typeof(eM) === null){
    alert("Enter your email you banana!")
}
if (cC === "" || Number(cC)=== NaN || typeof(cC) === null || typeof(cC) === "undefined"){
    alert("Credit card number is not valid")
}
else if (cC.length > 16 || cC.length < 16){
    alert("Credit Card number is not valid")
}
if (zipC === "" || Number(zipC) === NaN || typeof(zipC) === "undefined" || typeof(zipC) === null){
    alert("Zip code is not valid")
} else if (zipC.length >= 5){
    alert("Zip code is not valid")
} else {
    alert(`Your purchase of $${this.state.totalPrice} was made successfully! Purchase complete`)
}
}


render () {
    return( <div>
        <h1>My Garage Sale</h1>
        <br />
        <div className="products" id="products">
            <br />
            <h3>{productData[0].name}</h3>
        <label>
            Price: ${productData[0].price.toFixed(2)}
        </label>
        <br />
        <br />
        <button onClick={this.clicky} value={productData[0].price.toFixed(2)} id="0" type="submit">
            Add To Cart
        </button>
        <br />
        <img src={productData[0].img} />
        <br />
        <p>
        {productData[0].description}
        </p>

        <br />
        <h3>{productData[1].name}</h3>
        <label>
            Price: ${productData[1].price.toFixed(2)}
        </label>
        <br />
        <br />
        <button onClick={this.clicky} value={productData[1].price.toFixed(2)} id="1">
            Add To Cart
        </button>
        <br />
        <img src={productData[1].img} />
        <br />
        <p>
        {productData[1].description}
        </p>

        <br />
        <h3>{productData[2].name}</h3>
        <label>
            Price: ${productData[2].price.toFixed(2)}
        </label>
        <br />
        <br />
        <button onClick={this.clicky} value={productData[2].price.toFixed(2)} id="2">
            Add To Cart
        </button>
        <br />
        <img src={productData[2].img} />
        <br />
        <p>
        {productData[2].description}
        </p>

        <br />
        <h3>{productData[3].name}</h3>
        <label>
            Price: ${productData[3].price.toFixed(2)}
        </label>
        <br />
        <br />
        <button onClick={this.clicky} value={productData[3].price.toFixed(2)} id="3">
            Add To Cart
        </button>
        <br />
        <img src={productData[3].img} />
        <br />
        <p>
        {productData[3].description}
        </p>

        <br />
        <h3>{productData[4].name}</h3>
        <label>
            Price: ${productData[4].price.toFixed(2)}
        </label>
        <br />
        <button onClick={this.clicky} value={productData[4].price.toFixed(2)} id="4">
            Add To Cart
        </button>
        <br />
        <img src={productData[4].img} />
        <br />
        <p>
        {productData[4].description}
        </p>

        <br />
        <h3>{productData[5].name}</h3>
        <label>
            Price: ${productData[5].price.toFixed(2)}
        </label>
        <br />
        <br />
        <button onClick={this.clicky} value={productData[5].price.toFixed(2)} id="5">
            Add To Cart
        </button>
        <br />
        <img src={productData[5].img} />
        <br />
        <p>
        {productData[5].description}
        </p>
        </div>

        <div className="cart" id="cart">
            <h3>
            Cart
            </h3>
            <br />
        <ul id="cart-stuff">
            <li>{this.state.products}</li>
        </ul>
        <section>
        <h3>Subtotal: ${this.state.price}</h3>
        <h3>Tax: ${((this.state.price)* .05).toFixed(2)}</h3>
        <h3>Total: ${(Math.abs(this.state.price + this.state.tax)).toFixed(2)}</h3>
        </section>
        </div>

        <form id="checkout">
            <h3>Checkout</h3>
        <label>
            First Name<br />
            <input id="first"></input>
            <br />
        </label>
        <label>
            Last Name<br />
            <input id="last"></input>
            <br />
        </label>
        <label>
            Email<br />
            <input  id="email"></input>
            <br />
        </label>
        <label>
            Credit Card<br />
            <input id="cc"></input>
            <br />
        </label>
        <label>
            Zip Code<br />
            <input id="zip"></input>
            <br />
        </label>
        <button onClick={this.checkOut} type="submit">Buy Now</button>
        </form>
        
        </div>)
}

  
};

export default App;

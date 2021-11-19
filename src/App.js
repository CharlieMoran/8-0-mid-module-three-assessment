import "./App.css";
import React from "react";
import productData from "./data/productData";

class App extends React.Component {
constructor (){
    super()
    this.state = {
        price: [0],
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
    this.setState({
    price: [Number(this.state.price[0] + el.target.value).toFixed(2)],
    tax: this.price * .05,
    totalPrice: (Number(this.price + (this.state.price * .05))),
    });
};


formatPrice = (price) => `$${price.toFixed(2)}`;

checkOut = () => {
let fN = document.getElementById("first");
let lN = document.getElementById("last");
let eM = document.getElementById("email");
let cC = document.getElementById("cc");
let zipC = document.getElementById("zip");

if (fN === undefined){
    alert("Enter your first name you banana!")
}
if (lN === undefined){
    alert("Enter your last name you banana!")
}
if (eM.length === 0){
    alert("Enter your email you banana!")
}
if (cC === undefined || cC === NaN){
    alert("Enter your credit card number you banana!")
}
else if (cC.length > 16 || cC.length < 16){
    alert("Credit Card Number must be 16 digits you banana!")
}
if (zipC === undefined || zipC === NaN){
    alert("Enter your zip code you banana!")
} else if (zipC.length > 5){
    alert("Zipcode must be 5 digits you banana!")
} else {
    alert(`Your purchase of $${this.state.totalPrice} was made successfully!`)
}
}


render () {
    return( <div>
        <p>My Garage Sale</p>
        <br />
        <div id="products">
        <label>
            {productData[0].name}
            <br />
            Price: ${productData[0].price.toFixed(2)}
        </label>
        <br />
        <button onClick={this.clicky} value="19.99" id="baseball">
            Add to Cart
        </button>
        <br />
        <img src={productData[0].img} />
        <br />
        <p>
        {productData[0].description}
        </p>
        <label>
            {productData[1].name}
            <br />
            Price: ${productData[1].price.toFixed(2)}
        </label>
        <br />
        <button onClick={this.clicky} value="20.0" id="vcr">
            Add to Cart
        </button>
        <br />
        <img src={productData[1].img} />
        <br />
        <p>
        {productData[1].description}
        </p>
        <label>
            {productData[2].name}
            <br />
            Price: ${productData[2].price.toFixed(2)}
        </label>
        <br />
        <button onClick={this.clicky} value="55.55" id="bicycle">
            Add to Cart
        </button>
        <br />
        <img src={productData[2].img} />
        <br />
        <p>
        {productData[2].description}
        </p>
        </div>
        <label>
            {productData[3].name}
            <br />
            Price: ${productData[3].price.toFixed(2)}
        </label>
        <br />
        <button onClick={this.clicky} value="2.99" id="socks">
            Add to Cart
        </button>
        <br />
        <img src={productData[3].img} />
        <br />
        <p>
        {productData[3].description}
        </p>
        <label>
            {productData[4].name}
            <br />
            Price: ${productData[4].price.toFixed(2)}
        </label>
        <br />
        <button onClick={this.clicky} value="7.5" id="newspaper">
            Add to Cart
        </button>
        <br />
        <img src={productData[4].img} />
        <br />
        <p>
        {productData[4].description}
        </p>
        <label>
            {productData[5].name}
            <br />
            Price: ${productData[5].price.toFixed(2)}
        </label>
        <br />
        <button onClick={this.clicky} value="47.0" id="armchair">
            Add to Cart
        </button>
        <br />
        <img src={productData[5].img} />
        <br />
        <p>
        {productData[5].description}
        </p>
        <div id="cart">
            <label>
            Cart
            </label>
        <div id="cart-stuff"></div>
        <br />
        <label>SubTotal: ${this.state.price}</label>
        <br />
        <label>Tax: ${this.state.tax}</label>
        <br />
        <label>Total: ${this.state.totalPrice}</label>
        <br />


        </div>

        <div id="checkout">
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
        <button onClick={this.checkOut}>Buy Now</button>
        </div>
        
        </div>)
}

  
};

export default App;

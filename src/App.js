import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
import AddItem from "./components/Additem";

function App() {
  const products = [
    {
      price: 9999,
      name: "Apple 11 max pro",
      quantity: 0,
    },
    {
      price: 7999,
      name: "Gallaxy Fold",
      quantity: 0,
    },
    {
      price: 8999,
      name: "Realmi 10i",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, settotalAmount] = useState(0);

  // increment function for quantity
  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    let newTotalAmont = totalAmount;
    newTotalAmont += newProductList[index].price;
    settotalAmount(newTotalAmont);
    setProductList(newProductList);
  };

  // decrement function for quantity
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmont = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmont -= newProductList[index].price;
    } else {
      newProductList[index].quantity = 0;
    }
    setProductList(newProductList);
    settotalAmount(newTotalAmont);
  };

  const QuantityReset = ()=>{
    let newProductList = [...productList];
    newProductList.map((products)=>{
    products.quantity=0
  });
  setProductList(newProductList);
  settotalAmount(0);
};

// Remove item function
const removeItem=(index)=>{
  let newProductList = [...productList];
  let  newtotalAmout = totalAmount;
  newtotalAmout -= newProductList[index].quantity * newProductList[index].price
  console.log(newProductList);
   newProductList.splice(index, 1);
   setProductList(newProductList);
   settotalAmount(newtotalAmout);
};


const additem = (name,price)=>{
  let newProductList = [...productList]
  newProductList.push({
    price:price,
    name:name,
    quantity:0
  })
  setProductList(newProductList);
}

  return (
    <div>
      <Navbar />
      <main className="container mt-5">
      <AddItem additem={additem}/>

        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem = {removeItem}
        />
      </main>
          <Footer totalAmount={totalAmount} QuantityReset={QuantityReset}/>
    </div>
  );
}

export default App;

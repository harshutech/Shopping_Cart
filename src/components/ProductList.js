import React from "react";
import Product from "./Product.js";

function ProductList(props) {
  return(
  props.productList.length > 0 ?
  props.productList.map((product, i) => {
    return <Product
        product={product}
        key={i}
        incrementQuantity={props.incrementQuantity}
        index={i}
        decrementQuantity={props.decrementQuantity}
        removeItem = {props.removeItem}
      />
  })
  : <h1>Oops its Empty... 😥</h1>
  )
}

export default ProductList;

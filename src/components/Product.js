import React from "react";
function Product(props) {
  return (
    <div className="row">
      <div className="col-5">

        {/* this h2 tag holds and display the name and actual price of product  */}
        <h2>
          {props.product.name}
          <span className="badge bg-secondary">₹{props.product.price}</span>
        </h2>
      </div>

      {/* Quantity decrement button */}
      <div className="col-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            props.decrementQuantity(props.index);
          }}>-</button>

          {/* Quantity display */}
        <button type="button" className="btn btn-secondary">
          {props.product.quantity}
        </button>
        

      {/* Quantity increment button */}
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            props.incrementQuantity(props.index);
          }}>+</button>
      </div>

          {/* total price of each product display */}
      <div className="col-2">
        ₹{props.product.quantity * props.product.price}
      </div>

      <button className="col-2 btn btn-danger" onClick={()=>{
        props.removeItem(props.index)
      }}>Remove</button>
    </div>
  );
}

export default Product;

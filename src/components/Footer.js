import React from "react";

function Footer(props) {
  return (
    <div className="row fixed-bottom">

        {/* Reset button for rest all the products */}
      <button className="btn btn-danger col-2" onClick={()=>{props.QuantityReset()}}>Reset</button>

      {/* Total amount of all product display */}
      <div className="col-8 bg-dark text-white text-center">
        Total = ₹ {props.totalAmount} /-
      </div>

      {/* Pay now button without any payment integration */}
      <button className="btn btn-primary col-2">Pay Now</button>
    </div>
  );
}

export default Footer;

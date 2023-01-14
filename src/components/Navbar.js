import React from "react";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Shoping Cart
        </a>

        <button type="button" class="btn btn-primary position-relative">
  Your cart
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3+
    
    <span className="visually-hidden">unread messages</span>
  </span>

</button>

      </div>
    </nav>
  );
}

export default Navbar;

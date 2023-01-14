import React from "react";
import './Additem.css'

    class AddItem extends React.Component{

        constructor(props){
            super(props);
                this.state={
                    ProductName:"",
                    ProductPrice:0,
                }
            }
        

    render(){
    return (
      <div className="AddItem">
        <form className="row mb-5" onSubmit={(e) =>{ 
        e.preventDefault();
            this.props.additem(this.state.ProductName,Number(this.state.ProductPrice));}}>
                
          <div className="mb-3 col-4">
            <label htmlFor="inputName"
             className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              aria-describedby="name"
              name="ProductName"
              placeholder="Product Name here"
              required
              onChange={(e)=>{this.setState({ProductName:e.currentTarget.value})}}
              value={this.state.ProductName}
            />
       
          </div>
          <div className="mb-3 col-4">
            <label htmlFor="inputPrice" className="form-label">
              price
            </label>
            <input
              type="number"
              min="10"
              className="form-control"
              id="ProductPrice"
              required
              name="Productprice"
              onChange={(e)=>{this.setState({ProductPrice: Number(e.currentTarget.value)})}}
              value={this.state.ProductPrice}
            />
          </div>
          <button type="submit" className="btn btn-primary col-4 ">
            Add
          </button>
        </form>
      </div>
    );
    }
    }


export default AddItem;



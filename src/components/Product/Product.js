import React from "react";
import './Product.css'

const Product = ({ p }) => {
  
  const { gender, image, name, price } = p;
  return (
    <div className="card bg-white  shadow-sm p-10 lg:p-1 ">
      <figure className="p-0">
        <img className="lg:h-64 h-96 lg:w-full w-96" src={image} alt="Shoes" />
      </figure>
      <div className="pl-1 pb-3 mt-3">
        <h2 className="card-title text-2xl font-bold text-black">{name}</h2>
        <p className="text-sm font-thin my-2"> {gender} </p>
        <h2 className="text-lg font-semibold"> {price} </h2>
      </div>
      <div className="rating">
        <input type="radio" name="rating-1" className="mask mask-star checked" />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          checked
        />
        <input type="radio" name="rating-1" className="mask mask-star checked" />
        <input type="radio" name="rating-1" className="mask mask-star checked" />
        <input type="radio" name="rating-1" className="mask mask-star checked" />
      </div>
      <button className="cart-btn mt-6 mb-3 py-4 font-bold ">ADD TO CART</button>
    </div>
  );
};

export default Product;

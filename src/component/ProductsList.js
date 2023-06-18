import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import "./ProductsList.css";
import Product from "./Product";
function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setproducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  };
  // useEffect(()=>{  fetch(api_url)
  //     .then((res) => res.json())
  //     .then((data) => setproducts(data));
  // };//
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setcategories(data));
  };
  const getProductsCategories = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container ">
        <button
          className="btn btn-secondary m-4"
          onClick={() => {
            getProducts();
          }}
        >
          All
        </button>
        {categories.map((cat) => {
          return (
            <button
              className="btn btn-secondary m-4 "
              key={cat}
              onClick={() => {
                getProductsCategories(cat);
              }}
            >
              {cat}
            </button>
          );
        })}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true}></Product>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ProductsList;

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="custom-card shadow-sm">
              <img
                src={product.image}
                className="custom-card-img-top"
                alt={product.title}
              />
              <div className="custom-card-body">
                <h5 className="custom-card-title">
                  {product.title}
                </h5>
                <p className="custom-card-text">
                  {product.description}
                </p>
                <p className="custom-card-price">
                  <strong>Price: </strong>${product.price}
                </p>
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => alert(`Added ${product.title} to cart!`)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;

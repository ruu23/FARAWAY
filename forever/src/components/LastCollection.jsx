import { useEffect, useState } from "react";

function LastCollection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/src/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);
        const LastProducts = data.slice(-10);
        setProducts(LastProducts);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">LATEST COLLECTIONS</h2>
      <p className="mb-6 text-gray-700">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div className="bg-white shadow-md rounded-lg overflow-hidden" key={product.id}>
            <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-500">{product.price}$</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastCollection;

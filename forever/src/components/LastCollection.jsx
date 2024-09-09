import { useEffect } from 'react';
import { useState } from 'react';
import '../style/LastCollection.css'
function LastCollection() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('/src/data/products.json')
    .then((res) => res.json())
    .then((data) => {
      const LastProducts = data.slice(-10);
      setProducts(LastProducts);
    })
  }, [])
  return (
      <div className='main'>
      <h2 ><span>LATEST</span> COLLECTIONS ─────</h2>
      <p >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
      </p>
      <div className='products'>
        {products.map((product) => (
          <div key={product.id} >
            <img src={product.image} alt={product.title} />
            <div className="p-4">
              <h3>{product.title}</h3>
              <p>{product.price}$</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default LastCollection

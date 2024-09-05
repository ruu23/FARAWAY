import { useEffect, useState } from 'react'

function Collection() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('/src/data/products.json')
      .then((res) => res.json())
      .then(products => setProducts(products))
    },[])
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
        <img src={product.image} alt={product.title}/>
        <p>{product.title}</p>
        <p>{product.price}$</p>
      </div>
      ))}
    </div>
  )
}

export default Collection

import { useEffect, useState } from 'react'
import '../style/Collection.css'
function Collection() {

  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [type, setType] = useState([])
  const [sort, setSort] = useState(['Relavent'])

  useEffect(() => {
    fetch('/src/data/products.json')
      .then((res) => res.json())
      .then(products => setProducts(products))
    },[])

    
  return (
    <div className='collection'>

      <div className='filter'>
        <h1>FILTERS</h1>

        <div className='category'>
          <h2>CATEGORIES</h2>
          <p><input type='checkbox' value='Man' />Men</p><br/>
          <p><input type='checkbox' value='Woman' />Women</p><br/>
          <p><input type='checkbox' value='Kids' />Kids</p>
        </div>

        <div className='type'>
          <h2>TYPE</h2>
          <p><input type='checkbox'/>Topwear</p><br/>
          <p><input type='checkbox'/>Bottomwear</p><br/>
          <p><input type='checkbox'/>Winterwear</p>
        </div>

      </div>
      <div className='clothes'>
      <div className='head'>
      <h1><span>ALL</span> COLLECTIONS ─────</h1>
      <div className='sort'>
        <select>
          <option>Sort by: Relavent</option>
          <option>Sort by: Low To High</option>
          <option>Sort by: High To Low</option>
        </select>
      </div>
      </div>  
      
      <div className='clothe'>
      {products.map((product) => (
        <div key={product.id}>
        <img src={product.image} alt={product.title}/>
        <p>{product.title}</p>
        <p>{product.price}$</p>
      </div>
      
      ))}
      </div>
      </div>
      
    </div>
  )
}

export default Collection

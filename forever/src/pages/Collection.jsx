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

    const handelCategory = (e) => {
      const {checked, value} = e.target
      if(checked) {
        setCategory([...category, value])
      }else {
        setCategory(category.filter((x) => x !== value))
      }
      const filteredProducts = products.filter((product) => {
        const categoryMatch = category.length === 0 || category.includes(product.category)
        const typeMatch = type.length === 0 || type.includes(product.type)
        return categoryMatch && typeMatch
      })
    }
  return (
    <div className='collection'>

      <div className='filter'>
        <h1>FILTERS</h1>

        <div className='category'>
          <h2>CATEGORIES</h2>
          <p><input type='checkbox' value='Man' onChange={handelCategory}/>Men</p><br/>
          <p><input type='checkbox' value='Woman' onChange={handelCategory}/>Women</p><br/>
          <p><input type='checkbox' value='Kids' onChange={handelCategory}/>Kids</p>
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

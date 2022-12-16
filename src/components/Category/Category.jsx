import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Category.module.css'

const Category = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(json => setProducts(json));
    
  }, [])
  // console.log(products)

  return (
    <div className={styles.main_div}>
    {products.map((product) => 
    <div className={styles.blocks} onClick={()=> console.log(product)}>
      <h2 className={styles.text}>Link<span>➦</span></h2>
      <NavLink className={styles.text} to={`/products/category/${product}`}>{product}</NavLink>
      {/* Link with category name */}
    </div> 
    )}
    </div>
  )
}

export default Category
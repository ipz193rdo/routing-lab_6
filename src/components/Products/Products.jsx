import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import styles from './Products.module.css'

const Products = () => {
    const {id} = useParams();

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch(`https://dummyjson.com/products/category/${id}`)
        .then(res => res.json())
        .then(json => setProducts(json.products));
        
    }, [])
    // console.log(products)

  return (
    <><h1>Products: {id}</h1><div className={styles.main_div}>
    {products.map((product) => <div className={styles.main_box}>
    <img className={styles.img} src={product.thumbnail}/>
    <h2>{product.title}</h2><br/>
    <p>{product.description}</p><br/>
    <h1>Price: {product.price}<span>$</span></h1><br/>
    <NavLink to={`/products/${product.id}`}>More about {product.title}...</NavLink>
    </div>
    )}
    </div>
    </>
  )
}

export default Products
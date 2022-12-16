import React, { useEffect, useState } from 'react'
import styles from './Search.module.css'
 

const Search = () => {
    const [search, setSearch] = useState('Apple')
    const [products, setProducts] = useState([])
    

    useEffect(() => {
        fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then(res => res.json())
        .then(json => setProducts(json.products));
    }, [search])
    console.log(products);
  
  return (
    <div className={styles.div}>
        <h3>Search:</h3><input className={styles.search} type="text" onChange={(e) => setSearch(e.target.value)}/>
        {products.map((product) => <div >
        <img  src={product.thumbnail}/>
        <h2>{product.title}</h2><br/>
        <p>{product.description}</p><br/>
        <h1>Price: {product.price}<span>$</span></h1><br/>
        </div>
        )}
        </div>
  )
}

export default Search
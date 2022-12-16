import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './AboutProduct.module.css'


const AboutProduct = () => {
    const {id} = useParams();

    const [product, setProduct] = useState([])

    useEffect(() => {

        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(json => setProduct(json));
        
    }, [])
    console.log(product)

  return (
    <div className={styles.block}>
        AboutProduct: {id}
    <h1 className={styles.title}>{product.title}</h1>
    <img src={product.thumbnail}/>
    <p className={styles.p}>{product.description}</p>
    </div>
  )
}

export default AboutProduct
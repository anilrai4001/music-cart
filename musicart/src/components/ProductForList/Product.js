import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Product.module.css'


function Product({ product }) {
    return (
        <div className={styles.product}>
            <div className={styles.imageContainer}>
                <img src={product.images[0]} alt='product' className={styles.productImage} />
            </div>
            <div className={styles.productDescription}>
                <div className={styles.productTitle}>{product.name}</div>
                <p >Price - ₹ {product.price}</p>
                <p>{product.color} | {product.type} headphone</p>
                <p>{product.fullName}</p>
                <button className={styles.details}>
                    <Link to={`/product/${product._id}`} onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none', color: 'white' }}>
                        Details
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Product
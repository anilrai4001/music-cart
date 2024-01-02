import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Product.module.css'

function Product({product}) {
    const navigate = useNavigate();
    const handleNavigate=()=>{
        window.scrollTo(0, 0);
        navigate(`/product/${product._id}`)
    }
    return (
        <div className={styles.product} onClick={handleNavigate}>
            <div className={styles.imageContainer}>
                <img src={product.images[0]} alt='product' className={styles.productImage} />
            </div>
            <div className={styles.productDescription}>
                <p>{product.name}</p>
                <p>Price - ₹ {product.price}</p>
                <p>{product.color} | {product.type} headphone</p>

            </div>
        </div>
    )
}

export default Product
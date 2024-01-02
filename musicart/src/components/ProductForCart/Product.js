import React, { useState } from 'react'
import axios from 'axios'
import styles from './Product.module.css'

function Product({ product, grandTotal, setGrandTotal }) {
    const [quantity, setQuantity] = useState(product.quantity);
    const [total, setTotal] = useState(product.productDetails.price * quantity);

    const handleQuantity = async (e) => {
        const value = e.target.value;
        setQuantity(value);
        let temp = value * product.productDetails.price;
        let temp2 = grandTotal + temp - total;
        setTotal(temp);
        setGrandTotal(temp2);

        const backendURL = process.env.REACT_APP_BACKEND_URL;
        const userData = JSON.parse(localStorage.getItem('userData'));
        const response = await axios.put(backendURL + '/cart', { token: userData.jwt, productId: product.productDetails._id, quantity:value });
        console.log(response.data);
    }
    return (
        <div className={styles.product}>

            <img src={product.productDetails.images[0]} alt='product' className={styles.productImage} />
            <div >
                <p>{product.productDetails.name}</p>
                <p>Clour : {product.productDetails.color}</p>
                <p>{product.productDetails.available}</p>

            </div>

            <div className={styles.column}>

                <p>Price</p>
                <p>{product.productDetails.price}</p>

            </div>
            <div className={styles.column}>
                <p>Quantity</p>
                <select value={quantity} onChange={handleQuantity} >
                    <option value={1} >1</option>
                    <option value={2} >2</option>
                    <option value={3} >3</option>
                    <option value={4} >4</option>
                    <option value={5} >5</option>
                    <option value={6} >6</option>
                    <option value={7} >7</option>
                    <option value={8} >8</option>
                    <option value={9} >9</option>
                    <option value={10} >10</option>
                    <option value={11} >11</option>
                    <option value={12} >12</option>
                    <option value={14} >14</option>
                    <option value={15} >15</option>
                    <option value={16} >16</option>
                    <option value={17} >17</option>
                    <option value={18} >18</option>
                    <option value={19} >19</option>
                    <option value={20} >20</option>

                </select>
            </div>
            <div className={styles.column} >
                <p>Total</p>
                <p >₹{total}</p>
            </div>

        </div>
    )
}

export default Product
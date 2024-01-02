import React, { useEffect, useState } from 'react'
import styles from './Cart.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Logo from '../../components/Logo/Logo'
import Product from '../../components/ProductForCart/Product'

import cartLogo from '../../assets/cartLogo.png'


function Cart() {
  const navigate = useNavigate();

  const [productsArray,setProductsArray] = useState([]);

  const [grandTotal,setGrandTotal] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const backendURL = process.env.REACT_APP_BACKEND_URL;
        const userData = JSON.parse(localStorage.getItem('userData'));

        if (!userData || !userData.jwt) {
          console.error('JWT token is missing or invalid');
          return;
        }
  
        const response = await axios.get(`${backendURL}/cart`,{
          headers: {
            "Content-Type": "application/json",
            "Authorization": userData.jwt
          }
      });
      setProductsArray(response.data);
      let newTotal = response.data.reduce((prev, data) => prev + data.productDetails.price * data.quantity, 0);
      setGrandTotal(newTotal);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  

  return (
    <div className={styles.cart}>
      <Header />
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
          <div className={styles.path}>Home/ View Cart</div>
        </div>

        <button className={styles.back}>
          <Link to='/' className={styles.link}>Back to products</Link>
        </button>

        <div className={styles.title}>
          <img src={cartLogo} alt='cart logo' />
          <div className={styles.titleText}>My Cart</div>
        </div>

        <div className={styles.productsAndPrices}>
          <div className={styles.products}>
            {
              productsArray.map((product)=> <Product product={product} grandTotal={grandTotal} setGrandTotal={setGrandTotal}  />
              )
            }

            



            <div className={styles.total}>
              <p>{productsArray.length} Item</p>
              <p>{grandTotal}</p>
            </div>
          </div>

          <div className={styles.price}>
            <div className={styles.breakup}>
              <div>Price Details</div>
              <div>

                <div>Total MRP</div>
                <div>₹{grandTotal}</div>
              </div>
              <div>

                <div>Discount on MRP</div>
                <div>₹0</div>
              </div>

              <div>
                <div>Convenience Fee</div>
                <div>₹45</div>
              </div>


            </div>

            <div className={styles.totalAmount} >
              <div>Total Amount</div>
              <div>₹{grandTotal+45}</div>
            </div>

          </div>


        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.order} onClick={()=>{
            window.scrollTo(0,0);
            navigate('/checkout');
          }}>Place Order</button>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Cart
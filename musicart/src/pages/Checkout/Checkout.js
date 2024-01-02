import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styles from './Checkout.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Logo from '../../components/Logo/Logo'

// import product from '../../assets/product.png'



function Checkout() {
  const currentURL = window.location.href;
  const id = currentURL.split('/').pop();

  const [productData, setProductData] = useState([]);

  const [grandTotal, setGrandTotal] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {

    const fetchData = async () => {
      try {
        if (id !== 'checkout') {
          const backendURL = process.env.REACT_APP_BACKEND_URL;
          const response = await axios.get(backendURL + `/product/` + id);
          console.log([response.data]);
          setProductData([response.data]);
          setTotalCost(response.data.price);
        }
        else {
          const fetchData = async () => {
            try {
              const backendURL = process.env.REACT_APP_BACKEND_URL;
              const userData = JSON.parse(localStorage.getItem('userData'));

              if (!userData || !userData.jwt) {
                console.error('JWT token is missing or invalid');
                return;
              }

              const response = await axios.get(`${backendURL}/cart`, {
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": userData.jwt
                }
              });
              const data = response.data.map((dataObject)=> dataObject.productDetails);
              setProductData(data);
              let newTotal = response.data.reduce((prev, data) => prev + data.productDetails.price * data.quantity, 0);
              setGrandTotal(newTotal);
              console.log(response.data);

            }


            catch (error) {
              console.error('Error fetching data:', error);
            }



          };

          fetchData();
        }
      }


      catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id, productData]);

  return (
    <div className={styles.checkout}>
      <Header />
      <div className={styles.container}>

        <div className={styles.logo}>
          <Logo />
          <div className={styles.path}>Home/ Checkout</div>
        </div>

        <button className={styles.back}>
          <Link to='/cart' className={styles.link}>Back to cart</Link>
        </button>

        <div className={styles.title}>Checkout</div>

        <div className={styles.details}>
          <div className={styles.leftContainer}>
            <div className={styles.address}>
              <div className={styles.section}>1. Delivery address</div>
              <div>
                <p>Akash Patel</p>
                <p>104</p>
                <p>kk hh nagar, Lucknow</p>
                <p>Uttar Pradesh 226025</p>
              </div>
            </div>
            <div className={styles.paymentOption}>
              <div className={styles.section}>2. Payment method</div>
              <div>
                <p>Pay on delivery (Cash/Card)</p>
              </div>
            </div>
            <div className={styles.items}>
              <div className={styles.section}>3. Review items and delivery</div>
              <div>

              {

                productData.map((product) =>
                  <div className={styles.product}>
                    <img src={product.images[0]} alt='product' className={styles.productImage} />
                    <div className={styles.productName}>{product.name}</div>
                    <p>Clour : {product.color}</p>
                    <p>In Stock</p>
                    <p className={styles.delivery}>Estimated delivery :<br />
                      Monday — FREE Standard Delivery
                    </p>
                  </div>
                )

              }

              </div>

            </div>
          </div>

          <div className={styles.rightContainer}>
            <div className={styles.summary}>
              <button className={styles.placeOrderTwo}>
                <Link to='/success' className={styles.successTwo}>Place your Order</Link>
              </button>
              <div>By placing your order, you agree to Musicart privacy
                notice and conditions of use.
              </div>
              <div className={styles.orderSummary}>Order Summary</div>
              <div>
                <div>
                  <spna>Items :</spna>
                  <span>₹ {grandTotal || totalCost}</span>
                </div>
                <div>
                  <span>Delivery :</span>
                  <span>₹ 45.00</span>
                </div>
              </div>

              <div className={styles.orderTotalTwo}>
                <div>Order Total : </div>
                <div>₹ {(grandTotal || totalCost) +45}</div>
              </div>
            </div>
          </div>

        </div>

        <div className={styles.orderTotal}>
          <button className={styles.placeOrder}>
            <Link to='/success' className={styles.success}>Place your Order</Link>
          </button>
          <div>
            <div>Order Total : ₹ {(grandTotal || totalCost) +45}</div>
            <div>By placing your order, you agree to Musicart privacy notice and conditions of use.</div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Checkout
import React, { useState, useEffect } from 'react'
import styles from './Description.module.css'
import axios from 'axios'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Logo from '../../components/Logo/Logo'

import cart from '../../assets/cart.png'
import star from '../../assets/star.png'
import { Link } from 'react-router-dom'

function Description() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [productData, setProductData] = useState({
    name: '',
    fullName: '',
    brand: '',
    price: '',
    type: '',
    color: '',
    about: ['', '', '', '', ''],
    images: ['', '', '', ''],
    available: ''
  });

  const currentURL = window.location.href;
  const id = currentURL.split('/').pop();



  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'));
    console.log(data);
    if (data && data.jwt)
      setIsLoggedIn(true);
    else
      setIsLoggedIn(false);

  }, [ isLoggedIn, setIsLoggedIn])

  useEffect(() => {

    const fetchData = async () => {
      try {
        const backendURL = process.env.REACT_APP_BACKEND_URL;
        const response = await axios.get(backendURL + `/product/` + id);
        console.log(response.data);
        setProductData(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();



  }, [id]);

  const handleCart = async ()=>{
    const backendURL = process.env.REACT_APP_BACKEND_URL;
    const userData = JSON.parse(localStorage.getItem('userData'));
    const response = await axios.post(backendURL + '/cart', {token: userData.jwt, productId: productData._id});
    console.log(response.data);
    alert('Item aded to cart successfully')
  }


  return (
    <div className={styles.description}>
      <Header setIsLoggedInTwo={setIsLoggedIn} />
      <div className={styles.container}>

        <div className={styles.logoAndCart}>
          <Logo />
          <div className={styles.path}>Home/ {productData.name}</div>
          {
            isLoggedIn ?
              <div className={styles.cartContainer}>
                <Link to='/cart'>
                  <img src={cart} alt='cart' className={styles.cart} />

                </Link>
              </div>
              :
              null
          }
        </div>

        <button className={styles.back}>
          <Link to='/' className={styles.link}>Back to products</Link>
        </button>

        <div className={styles.product}>
          <div className={styles.fullName}>
            {productData.fullName}
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.productImages}>
              <div className={styles.upContainer}>
                <img src={productData.images[0]} alt='product' style={{ width: '100%' }} />

              </div>
              <div className={styles.downContainer}>

                <img src={productData.images[1]} alt='product' />
                <img src={productData.images[2]} alt='product' />
                <img src={productData.images[3]} alt='product' />
              </div>
            </div>


            <div className={styles.productDescription}>
              <div className={styles.productTitle}>{productData.name}</div>
              <div className={styles.productRating}>
                <img src={star} alt='rating' />
                <img src={star} alt='rating' />
                <img src={star} alt='rating' />
                <img src={star} alt='rating' />
                <img src={star} alt='rating' />
                <span>(50 Customer reviews)</span>
              </div>
              <div className={styles.productPrice}>Price - ₹ {productData.price}</div>
              <div className={styles.productColorAndType}>{productData.color} | {productData.type} headphone</div>
              <div className={styles.aboutProduct}>
                <div>About this item</div>
                {productData.about.map((point) => <li>{point}</li>)}



              </div>

              <div className={styles.available}>Available - <span>{productData.available}</span></div>
              <div className={styles.brand}>Brand - <span>{productData.brand}</span></div>

              {
                isLoggedIn ?
                  <>
                    <button className={styles.addToCart} onClick={handleCart}>Add to cart</button>
                    <button className={styles.buyNow}>
                      <Link to={`/checkout/${id}`} className={styles.link} onClick={()=>window.scrollTo(0, 0)}>
                        Buy Now
                      </Link>
                    </button>
                  </>
                  :
                  <>
                    <button className={styles.login}>
                      <Link to={'/login'} className={styles.link} onClick={()=>window.scrollTo(0, 0)}>
                        Login
                      </Link>
                      
                    </button>
                    <button className={styles.signup}>
                    <Link to={'/signup'}  className={styles.link} onClick={()=>window.scrollTo(0, 0)}>
                        Signup
                      </Link>
                    </button>
                  </>
              }




            </div>




          </div>

        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Description
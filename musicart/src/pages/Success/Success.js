import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Success.module.css'
import Logo from '../../components/Logo/Logo'
import Footer from '../../components/Footer/Footer'
import confetti from '../../assets/confetti.png'

function Success() {
  return (
    <div className={styles.success}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.messageContainer}>
          <img src={confetti} alt='confetti' className={styles.confetti}/>
          <div className={styles.message}>Order is placed successfully!</div>
          <div className={styles.messageTwo}>You  will be receiving a confirmation email with order details</div>
          
            <Link to='/' className={styles.link}>Go back to Home page</Link>
          
        </div>
      </div>
      <div className={styles.footer}>

        <Footer />
      </div>
    </div>
  )
}

export default Success
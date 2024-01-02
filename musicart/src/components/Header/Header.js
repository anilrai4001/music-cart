import React, { useState,useEffect } from 'react'
import phone from '../../assets/phone.png'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header({setIsLoggedInTwo}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'));
    
    if(data && data.jwt){
      setIsLoggedIn(true);
      

    }
    else{
      setIsLoggedIn(false);
      
    }


  }, [setIsLoggedIn])

  const handleLogout=()=>{
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
    setIsLoggedInTwo(false)
  }

  return (
    <div className={styles.header}>
      <div className={styles.phone}>
        <img src={phone} alt='phone' /> &nbsp; 912121131313
      </div>
      <div>
        Get 50% off on selected items | Shop Now
      </div>
      <div className={styles.loginLogout}>
        {
          isLoggedIn ?
            <Link className={styles.link} onClick={handleLogout}>Logout</Link>
            :
            <>
              <Link to='/login' className={styles.link}>Login</Link>
              <div>|</div>
              <Link to='/signup' className={styles.link}>Signup</Link>
            </>

        }

      </div>
    </div>

  )
}

export default Header
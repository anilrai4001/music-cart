import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Footer from '../../components/Footer/Footer'
import styles from './Signup.module.css'
import Logo from '../../components/Logo/Logo'

function Signup() {

  const navigate = useNavigate();


  const [formData,setFormData] = useState({
    name:'',
    mobile:'',
    email:'',
    password:''
  })

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(formData.name && formData.email && formData.mobile && formData.password ){
      try {
        const backendURL = process.env.REACT_APP_BACKEND_URL;
        const response = await axios.post(backendURL+'/register', formData);
        console.log('Registration successful: ', response.data);
        
        localStorage.setItem('userData',JSON.stringify({name:response.data.name,jwt:response.data.jwt}))

        
        navigate('/');
      } 
      catch (error) {
        console.log('Registration Failed: ', error)
      }
    }
    else{
      alert('All fields are mandatory');
    }

  }

  return (
    <div className={styles.signup} >
      <div className={styles.logoContainer}>
        <Logo/>
      </div>
        <div className={styles.form}>
            <h2 className={styles.title}>Create Account</h2>

            <label className={styles.label} htmlFor='name'>Your name</label>
            <input className={styles.input} type='text' id='name' name='name' onChange={handleChange}/>

            <label className={styles.label} htmlFor='mobile'>Mobile number</label>
            <input className={styles.input} type='number' id='mobile' name='mobile' onChange={handleChange}/>

            <label className={styles.label} htmlFor='email'>Email Id</label>
            <input className={styles.input} type='email' id='email' name='email' onChange={handleChange}/>

            <label className={styles.label} htmlFor='password'>Password</label>
            <input className={styles.input} type='password' id='password' name='password' onChange={handleChange}/>

            <p className={styles.consent}>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Musicart. Message and data rates may apply.</p>

            <button className={styles.continue} onClick={handleSubmit}>Continue</button>
            <p className={styles.privacy}>By continuing, you agree to Musicart privacy notice and conditions of use.</p>

        </div>

        <div className={styles.signin}>
          Already have an account?
          &nbsp;
          <Link to='/login' onClick={() => window.scrollTo(0, 0)} className={styles.link}>Sign in</Link>
          
        </div>
        <Footer />
    </div>
  )
}

export default Signup
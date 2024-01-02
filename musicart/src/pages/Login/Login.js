import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import styles from './Login.module.css'
import Footer from '../../components/Footer/Footer'
import Logo from '../../components/Logo/Logo'


function Login() {
  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    email:'',
    password:'',
  })

  const handleFormData = (e)=>{
    const key = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [key]:value
    })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(formData.email && formData.password){
      try {
        const backendURL = process.env.REACT_APP_BACKEND_URL;
        const response = await axios.post(backendURL+'/login', formData);
        console.log('login successful: ', response.data);
        

        localStorage.setItem('userData',JSON.stringify({name:response.data.name,jwt:response.data.jwt}))
        
        navigate('/');
      } 
      catch (error) {
        console.log('login Failed: ', error)
      }
    }
    else{
      console.log('All fields are mandatory');
    }

  }

  return (
    <div className={styles.login} >
      <div className={styles.logoContainer}>
        <Logo />
      </div>

      <div className={styles.form}>
        <h2 className={styles.title}>Sign in</h2>

        <label className={styles.label} htmlFor='email' >Enter your email</label>
        <input className={styles.input} type='email' id='email' name='email' onChange={handleFormData} />

        <label className={styles.label} htmlFor='password'>Password</label>
        <input className={styles.input} type='password' id='password' name='password' onChange={handleFormData} />

        <button className={styles.continue} onClick={handleSubmit}>Continue</button>
        <p className={styles.privacy}>By continuing, you agree to Musicart privacy notice and conditions of use.</p>

      </div>

      <div className={styles.horizontal_rule}>
          <div className={styles.rule}></div>
          <div className={styles.rule_text}>New to Musicart?</div>
          <div className={styles.rule}></div>
      </div>

      <div className={styles.signup}>
        <Link to='/signup' onClick={() => window.scrollTo(0, 0)} className={styles.link}>Create your Musicart account</Link>
      </div>
      <Footer />
    </div>
  )
}

export default Login
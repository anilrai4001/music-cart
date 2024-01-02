import React, { useState, useEffect } from 'react'
import styles from './Home.module.css'
import axios from 'axios'

import Header from '../../components/Header/Header'
import Logo from '../../components/Logo/Logo'
import Footer from '../../components/Footer/Footer'
import ProductForGrid from '../../components/ProductForGrid/Product'
import ProductForList from '../../components/ProductForList/Product'

import banner from '../../assets/banner.png'
import search from '../../assets/search.png'
import gridView from '../../assets/gridView.png'
import listView from '../../assets/listView.png'



function Home() {
  const [grid, setGrid] = useState(true);
  const [list, setList] = useState(false);
  const [productArray, setProductArray] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    brand: '',
    color: '',
    price: '',
    sort: ''
  })

  useEffect(() => {
    const fetchData = async () => {
      // let queryParameters = skills.map((ele)=> `skills[]=${ele}`).join('&');
      // if(title){
      //   queryParameters+=`&title[]=${title}`
      // }
      let queryParameters = '';
      
      for (let key in filters) {
          if (filters[key]) {
          queryParameters += key + '=' + filters[key] + '&'
        }
      }
      queryParameters = queryParameters.substring(0, queryParameters.length - 1);
      console.log(queryParameters);

      const backendURL = process.env.REACT_APP_BACKEND_URL;
      let response = await axios.get(backendURL + '/product?' + queryParameters);

      // let response = await axios.get(backendURL+'/job?'+queryParameters);
      let products = response.data;
      console.log(products);
      let productsArray = products.map((product) => {
        if (grid) {
          return <ProductForGrid product={product} />
        }
        else {
          return <ProductForList product={product} />
        }
      })
      setProductArray(productsArray);
    }
    fetchData();

  }, [grid, list, filters])

  const handleFilters = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    })
  }


  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Logo />
          <div className={styles.path}>
            Home
          </div>
        </div>


        <div className={styles.banner}>
          <div className={styles.offer}>
            <div className={styles.offerText}>Grab upto 50% off on<br /> Selected headphones </div>
            <div className={styles.buyNow}>Buy Now</div>
          </div>
          <img src={banner} alt='banner' className={styles.bannerImage} />
        </div>


        <div className={styles.searchbar} >
          <img src={search} alt='search icon' className={styles.searchIcon} />
          <input type='text' placeholder='Search Product' name='search' className={styles.input} onChange={handleFilters} />
        </div>


        <div className={styles.filters}>
          <div>

            <img src={gridView} alt='grid view' className={styles.gridViewImage} onClick={() => { setGrid(true); setList(false); }} />
            <img src={listView} alt='list view' className={styles.listViewImage} onClick={() => { setGrid(false); setList(true); }} />
          </div>

          <div>
            <select name='type' className={styles.select} onChange={handleFilters}>
              <option value='' selected disabled hidden >Headphone type</option>
              <option value='featured' >Featured</option>
              <option value='in-ear' >In-ear headphoned</option>
              <option value='on-ear' >On-ear headphone</option>
              <option value='over-ear' >Over-ear headphone</option>
            </select>
            <select name='brand' className={styles.select} onChange={handleFilters}>
              <option value='' selected disabled hidden >Company</option>
              <option value='featured' >Featured</option>
              <option value='samsung' >Samsung</option>
              <option value='jbl'>JBL</option>
              <option value='sony'>Sony</option>
              <option value='boat'>Boat</option>
              <option value='bose'>Bose</option>
              <option value='apple'>Apple</option>
              <option value='marshall'>Marshall</option>
              <option value='ptron'>Ptron</option>
            </select>
            <select name='color' className={styles.select} onChange={handleFilters}>
              <option value='' selected disabled hidden  >Color</option>
              <option value='featured' >Featured</option>
              <option value='white' >White</option>
              <option value='black' >Black</option>
              <option value='blue' >Blue</option>
              

            </select>
            <select name='price' className={styles.select} onChange={handleFilters}>
              <option value='' selected disabled hidden >Price</option>
              <option value='20000-50000' >Featured</option>
              <option value='0-1000' >₹0 - ₹1,000</option>
              <option value='1000-10000' >₹1,000 - ₹10,000</option>
              <option value='10000-20000' >₹10,000 - ₹20,000</option>
            </select>
          </div>



          <div className={styles.sort}>
            Sort by :
            <select name='sort' onChange={handleFilters}>
              <option value='featured' selected >Featured</option>
              <option value='price-ascending' >Price : Lowest</option>
              <option value='price-descending' >Price : Highest</option>
              <option value='name-ascending' >Name : (A-Z)</option>
              <option value='name-descending' >Name : (Z-A)</option>
            </select>
          </div>


        </div>

        <div className={styles.products}>
          {
            grid ?
              <div className={styles.gridView}>

                {productArray}


              </div>
              : null
          }
          {
            list ?
              <div className={styles.listView}>
                {productArray}


              </div>
              :
              null
          }



        </div>


      </div>
      <Footer />
    </div >
  )
}

export default Home
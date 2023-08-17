// 'use client'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Product from '@/components/misc/product'
import prev from '@/components/pages/OurProd.module.css'
import styles from './Page.module.css'
import Link from 'next/link'
import Container from './container'
// import { useEffect } from 'react'

const getCList = async () => {
    const res = await fetch("http://127.0.0.1:8000/container/?id=1");
    // console.log(res.json());
    return res.json();
}
const getProduct = async (id) => {
  const res = await fetch("http://127.0.0.1:8000/product/"+ id);
  return res.json();
}

export default async function list() {
    
  const products = await getCList();
  console.log({products})
  const keys = Object.keys(products.data);
  let allItems = {};
  let containerItems = [];
  let quantity = [];

  const promises = keys.map(async (key) => {
    let prod = await getProduct(key);
    allItems[key] = prod;
    quantity.push(products.data[key]);
  });
  
  await Promise.all(promises); // Wait for all promises to resolve
  
  console.log({quantity})
  // keys.forEach(async (key) => {
  //   // const id = gproducts.data[key];
  //   let prod = await getProduct(key);
  //   allItems[key] = prod;
  //   console.log({allItems})
    
  // });
  // // cartItems = gproducts;
  // console.log({allItems});

  
  // useEffect(() => {

  // }, []);

  

  for (const key in allItems) {

    containerItems.push(allItems[key]);
  }
  // const cartItemsWithQuantity = cartItems.map((item, index) => ({
  //   ...item,
  //   quantity: quantity[index]
  // }));
  console.log({containerItems});


  const removeFromContainer = (index) => {
    const updatedContainer = [...containerItems];
    updatedContainer.splice(index, 1);

    // setCartItems(updatedCart);
  };

    return (
      <div>
            <Navbar/>
            <div className={styles.banner}>
                <div className={styles.head}>
                    <div className="flex justify-center items-center">
                        <img className={styles.p2pLogo} src="p2pLogo.png" alt="Logo" />
                        Container
                    </div>
                </div>
            </div>
            <div className="pt-2">
              <Container cartItems={containerItems} removeFromCart={removeFromContainer} quantity = {quantity}/>
            </div>
            <Footer/>
      </div>
    )
  }
  
// 'use client'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Product from '@/components/misc/product'
import prev from '@/components/pages/OurProd.module.css'
import styles from './Page.module.css'
import Link from 'next/link'
import Cart from './cart'
// import { useEffect } from 'react'

const getList = async () => {
    const res = await fetch("http://127.0.0.1:8000/cart/?userid=T234");
    return res.json();
}
const getProduct = async (id) => {
  const res = await fetch("http://127.0.0.1:8000/product/"+ id);
  return res.json();
}

export default async function list() {
    
  const gproducts = await getList();
  console.log({gproducts})
  const keys = Object.keys(gproducts.data);
  let allItems = {};
  let cartItems = [];
  let quantity = [];

  const promises = keys.map(async (key) => {
    let prod = await getProduct(key);
    allItems[key] = prod;
    quantity.push(gproducts.data[key]);
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

    cartItems.push(allItems[key]);
  }
  // const cartItemsWithQuantity = cartItems.map((item, index) => ({
  //   ...item,
  //   quantity: quantity[index]
  // }));
  // console.log({cartItems});


  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);

    // setCartItems(updatedCart);
  };

    return (
      <div>
            <Navbar/>
            <div className={styles.banner}>
                <div className={styles.head}>
                    <div className="flex justify-center items-center">
                        <img className={styles.p2pLogo} src="p2pLogo.png" alt="Logo" />
                        Cart
                    </div>
                </div>
            </div>
            <div className="pt-2">
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} quantity = {quantity}/>
            </div>
            <Footer/>
      </div>
    )
  }
  
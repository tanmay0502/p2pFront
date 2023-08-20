// 'use client'
import { useRouter } from 'next/navigation';
// import React, { useState } from 'react';
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Product from '@/components/misc/product'
import prev from '@/components/pages/OurProd.module.css'
import styles from './Page.module.css'
import Link from 'next/link'
import Cart from './cart'
import Image from 'next/image'
// import { useEffect } from 'react'

async function getList(){
    const res = await fetch("http://127.0.0.1:8000/cart/?userid=T123",{cache: "no-cache"});
    return res.json();
}
const getProduct = async (id) => {
  const res = await fetch("http://127.0.0.1:8000/product/"+ id,{cache: "no-cache"});
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
  
  // console.log({quantity})
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
  const getId = () =>{
    const timestamp = new Date().getTime();
    const randomId = `${timestamp}${Math.floor(Math.random() * 1000)}`;
    // alert(randomId)
    return randomId
  }
  const handleSubmit = () =>{
    // const router = useRouter();
    // console.log("submitted yyyyyyyyyyyyyyyyyyyyyyyyayyyyyyyyy")
    return;
  }
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);

    // setCartItems(updatedCart);
  };

  let success = cartItems[0].id

  const addContainer = async (FormData) => {
    "use server";
    const timestamp = new Date().getTime();
    const randomId = `${timestamp}${Math.floor(Math.random() * 1000)}`;
    // const router = useRouter();
    // const name = FormData.get("name")
    let cItems = {
    }
    console.log({cartItems})
    console.log(quantity)
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      const itemQuantity = quantity[i];
      cItems[item.id] = itemQuantity;
    }

    // alert(randomId);
    // const randomId= getId();
    console.log({randomId})
    const rev = {
        id: randomId,
        product_list: cItems,
    }
  
    const response = await fetch('http://127.0.0.1:8000/container/', {
      method: "POST",
      body: JSON.stringify(rev),
      headers:{
        "Content-Type": "application/json",
      }

    })
    const data = await response.json();
    console.log({data})
    // cartItems[0].id = 1;
    // router.push("/container"+id)
  }


    return (
      <div>
            <Navbar/>
            <div className={styles.banner}>
                <div className={styles.head}>
                    <div className="flex justify-center items-center">
                        <Image className={styles.p2pLogo} src="/p2pLogo.png" alt="Logo" width={100} height={100}/>
                        Cart
                    </div>
                </div>
            </div>
            <div className="pt-2">
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} quantity = {quantity}/>
              </div>
              <div className='w-full flex justify-center mb-2'> 
             <Link href={"/checkout/"} className="mt-10 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex justify-center w-20" >Buy</Link>
             </div>
             <div className='w-full flex justify-center mb-10'> 
              
              <form action = {addContainer} onSubmit={handleSubmit()}>
              <button type='submit' className={"flex justify-center mx-4"+"mt-2 bg-transparent hover:bg-blue-400 text-blue-400  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"}>   Add to Container </button> 
              
              </form>
              {/* {success} */}
              </div>
            <Footer/>
      </div>
    )
  }
  
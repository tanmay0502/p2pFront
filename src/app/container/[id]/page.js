// 'use client'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Product from '@/components/misc/product'
import prev from '@/components/pages/OurProd.module.css'
import styles from './Page.module.css'
import Link from 'next/link'
import Container from './container'
import Image from 'next/image'
// import { useEffect } from 'react'

const getCList = async (params) => {
    const res = await fetch("http://127.0.0.1:8000/container/?id="+params.id,{cache: "no-cache"});
    // console.log(res.json());
    return res.json();
}
const getProduct = async (id) => {
  const res = await fetch("http://127.0.0.1:8000/product/"+ id,{cache: "no-cache"});
  return res.json();
}

export default async function list({params}) {
    
  const products = await getCList(params);

  const addCart = async (FormData) => {
    "use server";
    
    console.log(products.data)
    for (let i in products.data) {
        // const item = cartItems[i];
        // const itemQuantity = quantity[i];
        // cItems[item.id] = itemQuantity;
        // console.log(i)
          const rev = {
            userID:"T123",
            product:i,
            quantity:products.data[i]
        }
        const response = await fetch('http://127.0.0.1:8000/insert_cart/', {
          method: "POST",
          body: JSON.stringify(rev),
          headers:{
            "Content-Type": "application/json",
          }

        })
        const data = await response.json();
        console.log({data})
    }


    // cartItems[0].id = 1;
    // router.push("/container"+id)
  }

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

    containerItems.push(allItems[key]);
  }
  // const cartItemsWithQuantity = cartItems.map((item, index) => ({
  //   ...item,
  //   quantity: quantity[index]
  // }));
  // console.log({containerItems});


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
                        <Image className={styles.p2pLogo} src="/p2pLogo.png" alt="Logo" width={100} height={100} />
                        Container
                    </div>
                </div>
            </div>

            <div className="pt-2">
              <Container cartItems={containerItems} removeFromCart={removeFromContainer} quantity = {quantity} id={params.id}/>
            </div>

            <div className='w-full flex justify-center mb-10'>

              <form action = {addCart} >
              <button type='submit' className={"flex justify-center mx-4"+"mt-2 bg-transparent hover:bg-blue-400 text-blue-400  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"}>   Add to Cart </button> 
              
              </form>
              {/* {success} */}
              </div>


            <Footer/>
      </div>
    )
  }
  
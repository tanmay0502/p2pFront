// "use client"
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Product from '@/components/misc/product'
import prev from '@/components/pages/OurProd.module.css'
import styles from './Page.module.css'
// import React, { useState, useEffect } from "react";
import Link from 'next/link'
// import useSWR from 'swr';
import old from '../../product-list/Page.module.css'
// import 
import Image from 'next/image'
// import prev from '@/components/pages/OurProd.module.css'
const addProduct = async (FormData) => {
  "use server";
  const name = FormData.get("name")
  const description = FormData.get("description")
  const seller = FormData.get("seller")
  const image = FormData.get("image")
  const price = FormData.get("price")
  const discount = FormData.get("discount")
  const customer_count = FormData.get("customer_count")
  const stock = FormData.get("stock")
  const category = FormData.get("category")

  const blobLike = image.blobLike.target;

  // const fileReader = new FileReader();
  
  // fileReader.onload = function(event) {
  //   const imageData = event.target.result; // This will contain the image data
  //   // You can use `imageData` as needed, for example, to display the image.
  // };
  
  // Read the Blob content as data URL
  // fileReader.readAsDataURL(blobLike);


  const rev = {
      name,description, seller, image,price,discount, customer_count, stock, category
  }
  console.log(blobLike)
  // await fetch('http://127.0.0.1:8000/products_list/', {
  //   method: "POST",
  //   body: JSON.stringify(rev),
  //   headers:{
  //     "Content-Type": "application/json",
  //   }
  // })
  

}


export default async function seller() {


    return (
      <div>
            <Navbar/>
              <div className={old.banner}>
                  <div className={old.head}>
                      <div className="flex justify-center items-center">
                          {/* <img className={old.p2pLosgo} src="p2pLogo.png" alt="Logo" /> */}
                          <Image clsassName={old.p2pLogo} src="/p2pLogo.png" alt="Logo" width={100} height={100} />
                          Add Product
                      </div>
                  </div>
              </div>
              <div className="p-20">
              
            </div>
            <div className={styles.formContainer}>
                <form action={addProduct} className={styles.productForm}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className={styles.inputField} />

                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" className={styles.inputField}></input>

                <label htmlFor="seller">Seller Name:</label>
                <input type="text" id="seller" name="seller" className={styles.inputField} />

                <label htmlFor="image">Image:</label>
                <input type="file" id="image" name="image" accept="image/*" className={styles.inputField} />

                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" step="0.01" className={styles.inputField} />

                <label htmlFor="discount">Discount:</label>
                <input type="number" id="discount" name="discount" className={styles.inputField} />

                <label htmlFor="customerCount">Customer Count:</label>
                <input type="number" id="customerCount" name="customer_count" className={styles.inputField} />

                <label htmlFor="stock">Stock:</label>
                <input type="number" id="stock" name="stock" className={styles.inputField} />

                <label htmlFor="category">Category:</label>
                <input type="text" id="stock" name="stock" className={styles.inputField} />

                <button type="submit" className="mt-2 bg-transparent hover:bg-blue-400 text-blue-400  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">Add Product</button>
              </form>
            </div>

            <Footer/>
      </div>
    )
  }
  
// 'use client'

import { redirect } from 'next/navigation'
// import React, { useState } from 'react';
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Product from '@/components/misc/product'
import prev from '@/components/pages/OurProd.module.css'
import styles from '../Page.module.css'
import Link from 'next/link'
import Image from 'next/image'
// import { useEffect } from 'react'
import { revalidatePath } from 'next/cache';


export default async function list({params}) {




    return (
      <div>
    <Navbar/>
    <div className={styles.banner}>
      <div className={styles.head}>
        <div className="flex justify-center items-center">
          <Image className={styles.p2pLogo} src="/p2pLogo.png" alt="Logo" width={100} height={100}/>
          Container 
        </div>
      </div>
    </div>
    <div className={styles.successMessage}>
      <p className={styles.successText}>Container created successfully.</p>
      <p className={styles.containerId}>Container ID:<span className='font-semibold'> {params.id}</span> </p>
      <p className={styles.accessText}>Anyone across peer-to-peer can access the container using this ID</p>
      <Link href={"/container/" + params.id}  ><button type="submit" className="mb-10 bg-transparent hover:bg-blue-400 text-blue-400  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">Go to container</button></Link>
    </div>
    <Footer/>
  </div>
    )
  }
  
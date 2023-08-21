// 'use client'
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation'
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
import Btn from './button';
import { revalidatePath } from 'next/cache';

export default async function list() {




    return (
      <div>
            <Navbar/>

            <Footer/>
      </div>
    )
  }
  
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Product from '@/components/misc/product'
import prev from '@/components/pages/OurProd.module.css'
import styles from './Page.module.css'
import Link from 'next/link'

// const getList = async () => {
//     const res = await fetch("http://127.0.0.1:8000/products_list/?page=1");
//     return res.json();
// }

export default async function list() {
    // const gproducts = await getList();
    return (
      <div>
            <Navbar/>
            

            <Footer/>
      </div>
    )
  }
  
// "use client"
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Product from '@/components/misc/product'
import prev from '@/components/pages/OurProd.module.css'
import styles from './Page.module.css'
import old from '../cart/Page.module.css'
import Link from 'next/link'
import { redirect } from 'next/dist/server/api-utils'
// import { useNa } from 'next/router'
// import 
// const getList = async () => {
//     const res = await fetch("http://127.0.0.1:8000/products_list/?page=1");
//     return res.json();
// }

export default async function list() {
    // const gproducts = await getList();
    // const router = useRouter;
    function submit(){
      router.push('/')
      // router.reload()
    }
    return (
      <div>
            <Navbar/>
              Order Placed Successfully
              <Link href={"/"} className="mt-2 bg-transparent hover:bg-blue-400 text-blue-400  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full" >Shop More</Link>
            <Footer/>
      </div>
    )
  }
  
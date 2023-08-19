import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Product from '@/components/misc/product'
import prev from '@/components/pages/OurProd.module.css'
import styles from './Page.module.css'
import Link from 'next/link'
import old from '../../product-list/Page.module.css'

// import prev from '@/components/pages/OurProd.module.css'

const getList = async () => {
  const res = await fetch("http://127.0.0.1:8000/products_list/?page=1",{cache: "no-cache"});
  return res.json();
}


export default async function seller() {
    const gproducts = await getList();

    return (
      <div>
            <Navbar/>
              <div className={old.banner}>
                  <div className={old.head}>
                      <div className="flex justify-center items-center">
                          {/* <img className={old.p2pLogo} src="p2pLogo.png" alt="Logo" /> */}
                          Add Product
                      </div>
                  </div>
              </div>
              <div className="p-20">
              
            </div>


            <Footer/>
      </div>
    )
  }
  
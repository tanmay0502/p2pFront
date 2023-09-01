import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Product from '@/components/misc/product'
import prev from '@/components/pages/OurProd.module.css'
import styles from './Page.module.css'
import Link from 'next/link'
import old from '../product-list/Page.module.css'
import Image from 'next/image'

// import prev from '@/components/pages/OurProd.module.css'

const getList = async () => {
  const res = await fetch(process.env.URI + "/products_list/?page=1",{cache: "no-cache"});
  return res.json();
}


export default async function seller() {
    const gproducts = await getList();
    console.log({gproducts})
    return (
      <div>
            <Navbar/>
              <div className={old.banner}>
                  <div className={old.head}>
                      <div className="flex justify-center items-center">
  
                          <Image clsassName={styles.p2pLogo} src="/p2pLogo.png" alt="Logo" width={100} height={100} />
                          Your Products
                      </div>
                  </div>
              </div>
              <div className="p-20">
              <div className='flex justify-center w-full mb-10'>
              <Link href={"/seller/add"} className="bg-transparent hover:bg-blue-400 text-blue-400  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full" > + New Product </Link>
                
              </div>
                <div className={prev.productList}>
                            

                            {gproducts.results.map((product, index) => (
                                <>
                                <Link href={"/product/" + product.id} >
                                    <div className="flex justify-center items-center">
                                    <Product
                                    key={index}
                                    name={product.name}
                                    image={product.image}
                                    price={product.price}
                                    discount={product.discount}
                                    />
                                    </div>
                                    </Link></>
                            ))}
                </div>
            </div>


            <Footer/>
      </div>
    )
  }
  
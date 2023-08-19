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
            <div className={old.banner}>
                <div className={old.head}>
                    <div className="flex justify-center items-center">
                        <img className={old.p2pLogo} src="p2pLogo.png" alt="Logo" />
                        Checkout
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
            <div className={styles.checkoutContainer}>
                <div className='flex justify-center items-center pb-10'><p className={styles.billing}>Billing</p></div>
                <form className={styles.form} action = "">
                <div className='pb-1'><label className={styles.label} htmlFor="address">Please Enter the details:</label></div>
                  <div>
                    
                    <input
                    // className="pt-2"
                      type="text"
                      id="address"
                      className={styles.input}
                      placeholder='Address'
                      required
                    />
                  </div>
                  <div>
                    
                    <input
                      type="text"
                      id="address"
                      className={styles.input}
                      placeholder='Pincode'
                      required
                    />
                  </div>
                  <div>
                    {/* <label className={styles.label} htmlFor="phoneNumber">Phone Number:</label> */}
                    <input
                      type="tel"
                      id="phoneNumber"
                      placeholder='Phone Number'
                      className={styles.input}
                      required
                    />
                  </div>
                <Link href={"/success"}  ><button type="submit" className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-full">Place Order</button></Link>

                  {/* <div className='pt-10'><button type="submit" className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-full">Place Order</button></div> */}
                </form>
              </div> 
              </div>
            <Footer/>
      </div>
    )
  }
  
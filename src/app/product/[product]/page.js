// "use client"
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Product from '@/components/misc/product'
import prev from '@/components/pages/OurProd.module.css'
import styles from './Page.module.css'
import Image from 'next/image'
import Link from 'next/link'

const getProduct = async (params) => {
    const res = await fetch("http://127.0.0.1:8000/product/"+ params.product);
    return res.json();
}


export default async function Single({params}) {
    const gproducts = await getProduct(params);
    
    var currProduct =  gproducts;
    // console.log(currProduct)
    let name = currProduct.name;
    let description = currProduct.description;
    let imageName = currProduct.image;
    let price = currProduct.price;
    let discount = currProduct.discount;
    // const [name, description, imageName, price, discount] = [currProduct.name, currProduct.description, currProduct.imageName, currProduct.price, currProduct.discount];
    const discountedPrice = price - (price * (discount / 100));
    return (
       
      <div>
            <Navbar/>
                <div>
                    <div className={styles.productDetail}>
                        <div className={styles.productInfo}>
                        <div className={styles.imageContainer}>
                            <div className={styles.imageFrame}>
                            {/* <Image className={styles.image} src= {imageName} layout="fill" objectFit="contain" alt="Product" /> */}
                            <img className={styles.image} src={imageName} alt={name} />
                            </div>
                        </div>
                        <div className={styles.details}>
                            <p className={styles.name}> {name}</p>
                            <p>Discounted Price: ₹{discountedPrice.toFixed(2)}<s>{" ₹"+price}</s></p>
                            {/* <p className={styles.originalPrice}>Original Price: ${price}</p> */}
                            <div className={styles.actions}>
                                <Link href={"/checkout/"} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full" >Buy</Link>
                                <Link href={"/chart/"} className="bg-transparent hover:bg-blue-400 text-blue-400  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">+ Cart</Link>
                                <Link href={"/container/"} className="bg-transparent hover:bg-blue-400 text-blue-400 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">+ Container</Link>
                            </div>
                        </div>
                        </div>
                        <hr className={styles.horizontalLine} />
                        <div>
                        
                        <div className={styles.description}>
                            <div className="w-full flex justify-center"><p className={styles.descriptionHead}>Product Description</p></div>
                            {description}</div>
                        <p>Related Products</p>
                        </div>
                    </div>
                </div>
            <Footer/>
      </div>
    )
  }
  
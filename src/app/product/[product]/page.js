import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Product from '@/components/misc/product'
import prev from '@/components/pages/OurProd.module.css'
import styles from './Page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Single({params}) {
    var currProduct =  ["Lato Bag", 
                        "Lorem Ipsume is a bag with nso .dsjds;fl d jdksf usdfh . sdfj sdf jksdfl fsdjp liorn mskim. osjsdfl Lfdjsfl Lorem Ipsume is a bag with nso .dsjds;fl d jdksf usdfh . sdfj sdf jksdfl fsdjp liorn mskim. osjsdfl LfdjsflLorem Ipsume is a bag with nso .dsjds;fl d jdksf usdfh . sdfj sdf jksdfl fsdjp liorn mskim. osjsdfl LfdjsflLorem Ipsume is a bag with nso .dsjds;fl d jdksf usdfh . sdfj sdf jksdfl fsdjp liorn mskim. osjsdfl LfdjsflLorem Ipsume is a bag with nso .dsjds;fl d jdksf usdfh . sdfj sdf jksdfl fsdjp liorn mskim. osjsdfl LfdjsflLorem Ipsume is a bag with nso .dsjds;fl d jdksf usdfh . sdfj sdf jksdfl fsdjp liorn mskim. osjsdfl Lfdjsfl.",
                        "blueBag",
                        "2000",
                        "10"];

    const [name, description, imageName, price, discount] = currProduct;
    const discountedPrice = price - (price * (discount / 100));
    return (
       
      <div>
            <Navbar/>
                <div>
                    <div className={styles.productDetail}>
                        <div className={styles.productInfo}>
                        <div className={styles.imageContainer}>
                            <div className={styles.imageFrame}>
                            <Image className={styles.image} src="/bagPro.png" layout="fill" objectFit="contain" alt="Product" />
                            </div>
                        </div>
                        <div className={styles.details}>
                            <p className={styles.name}> {params.product}</p>
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
  
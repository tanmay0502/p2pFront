import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Product from '@/components/misc/product'
import prev from '@/components/pages/OurProd.module.css'
import styles from './Page.module.css'
import Image from 'next/image'

export default function Single() {
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
                        <p className={styles.name}> {name}</p>
                        <p>Discounted Price: ${discountedPrice.toFixed(2)}</p>
                        <p className={styles.originalPrice}>Original Price: ${price}</p>
                        <div className={styles.actions}>
                        <button>Buy</button>
                        <button>+ Cart</button>
                        <button>+ Container</button>
                        </div>
                    </div>
                    </div>
                    <hr className={styles.horizontalLine} />
                    <p className={styles.description}>
                        <div className="w-full flex justify-center"><p className={styles.descriptionHead}>Product Description</p></div>
                        {description}</p>
                    <p>Related Products</p>
                </div>
                </div>
            <Footer/>
      </div>
    )
  }
  
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Product from '@/components/misc/product'
import prev from '@/components/pages/OurProd.module.css'
import styles from './Page.module.css'

export default function list() {
    var products = [
        ["Lato Bag", "blueBag", "2000","10"],["Bag Asus", "bag3", "2000","10"],["Lato Bag", "bag4", "2000","10"],["Lato Bag", "bag5", "2000","10"],
        ["Lato Bag", "bag9", "2000","10"],["Lato Bag", "bag5", "2000","10"],["Lato Bag", "bag7", "2000","10"],["Lato Bag", "bag6", "2000","10"],
    ]
    return (
      <div>
            <Navbar/>

            <div className={styles.banner}>
                <div className={styles.head}>
                    <div className="flex justify-center items-center">
                        <img className={styles.p2pLogo} src="p2pLogo.png" alt="Logo" />
                        Uniforms
                    </div>
                </div>
            </div>


            {/* Map Products */}
            <div className="p-20">
                <div className={prev.productList}>
                            {products.map((product, index) => (
                                <>
                                    <div className="flex justify-center items-center">
                                    <Product
                                    key={index}
                                    name={product[0]}
                                    image={product[1]}
                                    price={product[2]}
                                    discount={product[3]}
                                    />
                                    </div>
                                </>
                            ))}
                </div>
            </div>
            <Footer/>
      </div>
    )
  }
  
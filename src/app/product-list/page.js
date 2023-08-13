import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Product from '@/components/misc/product'
import prev from '@/components/pages/OurProd.module.css'

export default function list() {
    var products = [
        ["Lato Bag", "blueBag", "2000","10"],["Bag Asus", "bag3", "2000","10"],["Lato Bag", "bag4", "2000","10"],["Lato Bag", "bag5", "2000","10"],
        ["Lato Bag", "bag9", "2000","10"],["Lato Bag", "bag5", "2000","10"],["Lato Bag", "bag7", "2000","10"],["Lato Bag", "bag6", "2000","10"],
    ]
    return (
      <div>
            <Navbar/>

            {/* Map Products */}
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

            <Footer/>
      </div>
    )
  }
  
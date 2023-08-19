import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Product from '@/components/misc/product'
import prev from '@/components/pages/OurProd.module.css'
import styles from './Page.module.css'
import Link from 'next/link'
import Btn from '../btn'
import Image from 'next/image'

const getList = async (params) => {
    const res = await fetch("http://127.0.0.1:8000/products_list/?page="+ params.productList,{cache: "no-cache"});
    return res.json();
}

export default async function list({params}) {
    const gproducts = await getList(params);
    {console.log({params})}
    // var products = [[gproducts.results[0].name]]
    // var products = [];
    // for (let i = 0; i < gproducts.length; i++) {
    //   const product = gproducts.results[i];
    //   console.log(i);
    //   const productInfo = [product.name, product.image, product.price, product.discount];
    //   products.push(productInfo);
    // }

    // {const products = gproducts.map(product => {}
    //   return [product.name, product.image, product.price, product.discount];
    // });}
    // var products = [
    //     ["Lato Bag", "blueBag", "2000","10"],["Bag Asus", "bag3", "2000","10"],["Lato Bag", "bag4", "2000","10"],["Lato Bag", "bag5", "2000","10"],
    //     ["Lato Bag", "bag9", "2000","10"],["Lato Bag", "bag5", "2000","10"],["Lato Bag", "bag7", "2000","10"],["Lato Bag", "bag6", "2000","10"],
    //     ["Lato Bag", "blueBag", "2000","10"],["Bag Asus", "bag3", "2000","10"],["Lato Bag", "bag4", "2000","10"],["Lato Bag", "bag5", "2000","10"],
    //     ["Lato Bag", "bag9", "2000","10"],["Lato Bag", "bag5", "2000","10"],["Lato Bag", "bag7", "2000","10"],["Lato Bag", "bag6", "2000","10"],
    //     ["Lato Bag", "blueBag", "2000","10"],["Bag Asus", "bag3", "2000","10"],["Lato Bag", "bag4", "2000","10"],["Lato Bag", "bag5", "2000","10"],
    //     ["Lato Bag", "bag9", "2000","10"],["Lato Bag", "bag5", "2000","10"],["Lato Bag", "bag7", "2000","10"],["Lato Bag", "bag6", "2000","10"],
    // ]
    return (
      <div>
            <Navbar/>
            
            <div className={styles.banner}>
                <div className={styles.head}>
                    <div className="flex justify-center items-center">
                        <Image clsassName={styles.p2pLogo} src="/p2pLogo.png" alt="Logo" width={100} height={100} />
                        Products
                    </div>
                </div>
            </div>


            {/* Map Products */}
            <div className="p-20">
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
                <Btn currentPage={params.productList}/>
            </div>
            <Footer/>
      </div>
    )
  }
  
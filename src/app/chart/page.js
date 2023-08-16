import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Product from '@/components/misc/product'
import prev from '@/components/pages/OurProd.module.css'
import styles from './Page.module.css'
import Link from 'next/link'
import Cart from './cart'

const getList = async () => {
    const res = await fetch("http://127.0.0.1:8000/cart/userid");
    return res.json();
}

export default async function list() {
    
  // const gproducts = await getList();

  // cartItems = gproducts;

  let cartItems = [["sdh","s2","2","3"],["sdh","s2","2","3"]]
  // const [cartItems, setCartItems] = useState([
  //   // Initial cart items here...
  // ]);

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);

    // setCartItems(updatedCart);
  };

    return (
      <div>
            <Navbar/>
            <div className={styles.banner}>
                <div className={styles.head}>
                    <div className="flex justify-center items-center">
                        <img className={styles.p2pLogo} src="p2pLogo.png" alt="Logo" />
                        Cart
                    </div>
                </div>
            </div>
            <div className="pt-2">
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            </div>
            <Footer/>
      </div>
    )
  }
  
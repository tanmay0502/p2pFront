import styles from './Container.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Container = ({ cartItems, removeFromCart, quantity, id }) => {
  const getTotalItems = () => {
    let sum = 0;
    for (var i in quantity) {
      sum = sum + quantity[i];
    }
    return sum;
  };

  const getTotalAmount = () => cartItems.reduce((total, item, index) => total + item.price * quantity[index], 0);

  return (
    <div className='py-10'>
      <div className={styles.cart}>
        <div className={styles.cartHeader}>
          <p className={styles.headline}>Container</p>
          <p className={styles.id}>ID: {id}</p>
          <span className={styles.totalItems}>Total Items: {getTotalItems()}</span>
        </div>

        <div className={styles.cartItems}>
          {cartItems.map((item, index) => (
            <div key={index}>
              <div className={styles.cartItem}>
                <Image src={"/bag2.png"} alt={item.name} width={100} height={100} />
                <div className={styles.cartItemInfo}>
                  <p classname={styles.nameHead}>{item.name}</p>
                  <p classname={styles.other}>Price: ₹{item.price}</p>
                  <p classname={styles.other}>Quantity: {quantity[index]}</p>
                  <p classname={styles.other}>Subtotal: ₹{(item.price * quantity[index])}</p>
                </div>
              </div>
              <hr className={styles.hr} />
            </div>
          ))}
        </div>

        <div className={styles.cartFooter}>
          <div className={styles.totalAmount}>
            Total: <span className={styles.amount}>₹{getTotalAmount()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;

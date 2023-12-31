import React from 'react';
import styles from './Product.module.css';
import Image from 'next/image';
const ProductComponent = ({ name, image, price, discount }) => {
  const discountedPrice = price - (price * (discount / 100));

  return (
    <div className={styles.product}>
      <div className={styles['product-image']}>
        <img src={image} alt={name} />
      {console.log({image})}
        {/* <Image src={"/"+image} alt={name} width={100} height={100} /> */}
        <div className={styles['discount-badge']}>-{discount}%</div>
      </div>
      <div className= {styles.back}>
        <div className="flex flex-col items-center p-1">
            <p className={styles.nameTag}>{name}</p>
            <div className="flex items-end">
                <p className={styles['discounted-price']} >₹{discountedPrice}</p>
                <p className={styles.prices}><s>₹{price}</s></p>
            </div>

        </div>
        
      </div>

    </div>
  );
};

export default ProductComponent;

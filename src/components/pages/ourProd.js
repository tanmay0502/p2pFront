import React from 'react';
import styles from './OurProd.module.css';
import prev from './Range.module.css'
import Product from '../misc/product';
import Link from 'next/link';

const range = () => {
    var products = [
        ["Lato Bag", "blueBag", "2000","10"],["Bag Asus", "bag3", "2000","10"],["Lato Bag", "bag4", "2000","10"],["Lato Bag", "bag5", "2000","10"],
        ["Lato Bag", "bag9", "2000","10"],["Lato Bag", "bag5", "2000","10"],["Lato Bag", "bag7", "2000","10"],["Lato Bag", "bag6", "2000","10"],
    ]

    return (
            <div>        
                <div>
                    <p className={prev.head} >Today{"'"}s Deals</p>
                        <div className={styles.productList}>
                        {products.map((product, index) => (
                            <>
                            <Link href="/product" >
                                <div  
                                className="flex justify-center items-center"
                                // onClick={function() {window.open('/product-list');}}  
                                >
                                    
                                    <Product
                                    key={index}
                                    name={product[0]}
                                    image={product[1]}
                                    price={product[2]}
                                    discount={product[3]}
                                    />
                                    
                                </div>
                                </Link>
                            </>
                            
                        ))}
                        </div>

                </div>
                <div>
                    <p className={prev.head} >Share Container</p>
                    <div>
                        <img className={styles.img} src="Paint.png" alt="Logo" />
                    </div>
                </div>
                
            </div>
    );
};

export default range;
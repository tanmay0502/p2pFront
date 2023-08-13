import React from 'react';
import styles from './OurProd.module.css';
import prev from './Range.module.css'
import Product from '../misc/product';

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
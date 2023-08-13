import React from 'react';
import styles from './Range.module.css';
import prev from '../footer/Footer.module.css'

const range = () => {
    return (
            // <div className={styles.range}>
            //     <p>Browse The Range</p>
            //     <p>We cover every essential element for schools</p>
            // </div>
            <div class={styles.parent}>
            <div class={styles.div1}> 
                <div>                 
                <p className={styles.head} >Browse The Range</p>
                <p className={prev.head}>We cover every essential element for schools</p>
                </div>
            </div>
            <div class={styles.div2}>
                <div>
                    <img className={styles.img} src="uniforms.png" alt="Logo" />
                    <p className={styles.label}>Uniforms</p>
                </div>   
            </div>
            <div class={styles.div3}> 
                <div>
                    <img className={styles.img} src="bookRange.png" alt="Logo" />
                    <p className={styles.label}>Books</p>
                </div> 


            </div>
            <div class={styles.div4}>
                <div>
                    <img className={styles.img} src="stationary.png" alt="Logo" />
                    <p className={styles.label}>Stationary</p>
                </div>     
            </div>
            </div>
    );
};

export default range;

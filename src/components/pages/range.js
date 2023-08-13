import Link from 'next/link';
import styles from './Range.module.css';
import prev from '../footer/Footer.module.css'


const range = () => {
    return (
            // <div className={styles.range}>
            //     <p>Browse The Range</p>
            //     <p>We cover every essential element for schools</p>
            // </div>
            <div className={styles.parent}>
            <div className={styles.div1}> 
                <div>                 
                <p className={styles.head} >Browse The Range</p>
                <p className={prev.head}>We cover every essential element for schools</p>
                </div>
            </div>
            <div className={styles.div2}>
                <div> 
                    <Link href="/product-list" >
                    <img className={styles.img} src="uniforms.png" alt="Logo" />
                    <p className={styles.label}>Uniforms</p>
                    </Link>
                </div>   
            </div>
            <div className={styles.div3}> 
                <div>
                    <Link href="/product-list" >
                    <img className={styles.img} src="bookRange.png" alt="Logo" />
                    <p className={styles.label}>Books</p>
                    </Link>
                </div> 


            </div>
            <div className={styles.div4}>
                <div>
                    <Link href="/product-list" >
                    <img className={styles.img} src="stationary.png" alt="Logo" />
                    <p className={styles.label}>Stationary</p>
                    </Link>
                </div>     
            </div>
            </div>
    );
};

export default range;

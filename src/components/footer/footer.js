import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <div class={styles.parent}>

            <div class={styles.div1}> 
                <p class={styles.top}>Peer2Peer</p>
                <p  className={styles.head} >IIT Bhilai, Kutelabhata,Durg,Chhattisgarh 4002015</p>

            </div>
            <div class={styles.div2}>
                <div className = "flex flex-col">
                <p className={styles.head} >Links</p>
                <Link href="/"  className={styles.link}>Home</Link>
                <Link href="/" className={styles.link}>Shop</Link>
                <Link href="/" className={styles.link}>About</Link>
                <Link href="/" className={styles.link}>Contact</Link>
                </div>
            </div>
            <div class={styles.div3}> 
                <div className = "flex flex-col">
                    <p className={styles.head}>Help</p>
                    <Link href="/" className={styles.link}>Payment Options</Link>
                    <Link href="/" className={styles.link}>Privacy Policies</Link>
                </div>
            </div>
            <div class={styles.div4}>
                <div className = "flex flex-col">
                    <p className={styles.head}>Newsletter</p>
                    <div>
                        <input className={styles.input} type="text" placeholder="Enter your email address"/>
                        <Link href="/" className={styles.link}>Subscribe</Link>
                    </div>

                </div>    
            </div>
            <div class={styles.div5}> 
                <p className={styles.last}>2023 School Days. All rights reverved</p>
            </div>

        </div>
    );
};

export default Footer;
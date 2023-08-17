import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
            <div className="p-4">
                <div className={styles.parent}>
                <div className={styles.div1}>
                    <div className={styles.logo}>
                        <div className="flex"> 
                            <img className={styles.p2pLogo} src="p2pLogo.png" alt="Logo" />
                            <div className="font-bold text-2xl" >Peer2Peer</div>
                        </div>
                    </div>    
                </div>
                <Link href={"/"} ><button className={styles.div2} > Home </button> </Link> 
                <Link href={"/product-list"} ><button className={styles.div3} > Shop </button></Link> 
                <Link href={"/"} ><button className={styles.div4}> About </button></Link> 
                <Link href={"/"} ><button className={styles.div5}> Contact </button></Link> 
                <div className={styles.div6}> </div>
                <Link href={"/"} ><div className={styles.div7}>  <img className={styles.navImg} src="search.svg" alt="Logo" /> </div></Link>
                <Link href={"/cart"} ><div className={styles.div8}>  <img className={styles.navImg} src="chart.svg" alt="Logo" /> </div></Link>
                <Link href={"/container"} ><div className={styles.div9}> <img className={styles.navImg} src="profile.svg" alt="Logo" /> </div></Link>
                </div>
            </div>
    );
};

export default Navbar;

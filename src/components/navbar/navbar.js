import React from 'react';
import styles from './Navbar.module.css';

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
                <button className={styles.div2} className="flex justify-center content-center"> Home </button>
                <button className={styles.div3} className="flex justify-center"> Shop </button>
                <button className={styles.div4} className="flex justify-center"> About </button>
                <button className={styles.div5} className="flex justify-center"> Contact </button>
                <div className={styles.div6}> </div>
                <div className={styles.div7} className="flex justify-end">  <img className={styles.navImg} src="search.svg" alt="Logo" /> </div>
                <div className={styles.div8} className="flex justify-center">  <img className={styles.navImg} src="chart.svg" alt="Logo" /> </div>
                <div className={styles.div9} className="flex justify-start"> <img className={styles.navImg} src="profile.svg" alt="Logo" /> </div>
                </div>
            </div>
    );
};

export default Navbar;

import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
            <div className="p-4">
                <div class={styles.parent}>
                <div class={styles.div1}>
                    <div className={styles.logo}>
                        <div className="flex"> 
                            <img className={styles.p2pLogo} src="p2pLogo.png" alt="Logo" />
                            <div className="font-bold text-2xl" >Peer2Peer</div>
                        </div>
                    </div>    
                </div>
                <div class={styles.div2} className="flex justify-center content-center"> Home </div>
                <div class={styles.div3} className="flex justify-center"> Shop </div>
                <div class={styles.div4} className="flex justify-center"> About </div>
                <div class={styles.div5} className="flex justify-center"> Contact </div>
                <div class={styles.div6}> </div>
                <div class={styles.div7} className="flex justify-end">  <img className={styles.navImg} src="search.svg" alt="Logo" /> </div>
                <div class={styles.div8} className="flex justify-center">  <img className={styles.navImg} src="chart.svg" alt="Logo" /> </div>
                <div class={styles.div9} className="flex justify-start"> <img className={styles.navImg} src="profile.svg" alt="Logo" /> </div>
                </div>
            </div>
    );
};

export default Navbar;

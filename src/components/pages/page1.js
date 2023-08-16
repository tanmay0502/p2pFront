import React from 'react';
import styles from './Page1.module.css';
import Link from 'next/link';

const page1 = () => {
    return (
            <div className={styles.page1}>
                <div className={styles.page1Container}>
                    <div className={styles.p}>Special:</div>
                    <div className={styles.headline}>Discover Our Container Mode</div>
                    <div className={styles.p2}> Pack up everything at one place and share with the multiples.</div>
                    <Link href="/container" className={styles.btn}>Check Now</Link>
                </div>

            </div>
    );
};

export default page1;

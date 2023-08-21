"use client"
import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      top: '20%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
    },
  };
  
  Modal.setAppElement('#search');

const Navbar = () => {



      
      let subtitle;
      const [modalIsOpen, setIsOpen] = React.useState(false);
    
      function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    
    return (
            <div className="">
                <div className={styles.parent}>
                <div className={styles.div1}>
                    <div className={styles.logo}>
                        <div className="flex"> 
                            {/* <Image className={styles.p2pLogo} src="/p2pLogo.png" width={200} height={200} alt="Logo" /> */}
                            <div className="font-bold text-2xl" >Peer2Peer</div>
                        </div>
                    </div>    
                </div>
                <Link href={"/"} className='lg'><button className={styles.div2} > Home </button> </Link> 
                <Link href={"/product-list"} ><button className={styles.div3} > Shop </button></Link> 
                <Link href={"/"} ><button className={styles.div4}> About </button></Link> 
                <Link href={"/"} ><button className={styles.div5}> Contact </button></Link> 
                <div className={styles.div6}> </div>
                <div className={styles.div7} id = "search">
                <input
                    onClick={openModal}
                    type="text"
                    // value={userInput}
                    // onChange={handleInputChange}
                    placeholder="Search Products"
                    className={styles.inputField}
                    
                />
                <button className="">
                 <Image className={styles.navImg} src="/search.svg" width={100} height={100} alt="Logo" />
                </button>
                </div>
                {/* <Link href={"/"} ><div className={styles.div7}>  <Image className={styles.navImg} src="/search.svg" width={100} height={100} alt="Logo" /> </div></Link> */}
                
                <Link href={"/cart"} ><div className={styles.div8}>  <Image className={styles.navImg} src="/chart.svg" width={100} height={100} alt="Logo" /> </div></Link>
                <Link href={"/container"} ><div className={styles.div9}> <Image className={styles.navImg} src="/profile.svg" width={100} height={100} alt="Logo" /> </div></Link>
                <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Search Modal"
      >
        <button onClick={closeModal} className={styles.closeButton}>
          <CloseIcon/>
        </button>
        <div className={styles.modalContent}>
          <div className={styles.inputFieldContainer}>
            <input
              type="text"
              placeholder="Search Products"
              className={styles.inputField}
            />
            <button className="">
              <Image
                className={styles.navImg}
                src="/search.svg"
                width={100}
                height={100}
                alt="Search"
              />
            </button>
          </div>
          <h2 className={styles.relatedProductsHeader}>Matched Products</h2>
          <div className={styles.relatedProducts}>
            
          </div>
        </div>
      </Modal>

                </div>
            </div>
    );
};

export default Navbar;

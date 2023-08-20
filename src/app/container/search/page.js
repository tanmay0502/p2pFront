"use client"
import styles from "../Page.module.css"
import searchStyles from './Search.module.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const PageRouter = () => {
  const router = useRouter();
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleRoute = () => {
      router.push('/container/'+userInput); 
  };

  return (
    <div>  
        <Navbar/>
            <div className={styles.banner}>
                <div className={styles.head}>
                    <div className="flex justify-center items-center">
                        <Image className={styles.p2pLogo} src="/p2pLogo.png" alt="Logo" width={100} height={100} />
                        Container
                    </div>
                </div>
            </div>

            <div className={searchStyles.container}>
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Enter Container ID"
                    className={searchStyles.inputField}
                />
                <button onClick={handleRoute} className="mt-2 bg-transparent hover:bg-blue-400 text-blue-400  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
                    Search Container
                </button>
                </div>

      <Footer/>
    </div>
  );
};

export default PageRouter;

// import { revalidatePath } from "next/cache"

// export default function Home() {

//     return (
//       <div>
//         <form action = {gotoContainer}>
//             Enter ID:
//         <input type="text" name="contId"></input>
//         <button type="submit"> Go to Container</button>
//         </form>
//       </div>
//     )
//   }
  
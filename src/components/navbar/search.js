"use server"

import { redirect } from "next/navigation"

export const searchProduct = async (FormData) => {
    // const review = FormData.get("review");
    // console.log(FormData);
    const res = await fetch('http://127.0.0.1:8000/search/?query='+FormData,{cache: "no-cache"});
    let x = res.json();
    // console.log(x);
    return x;
    
  }
"use server"

import { redirect } from "next/navigation"

export const addReview = async (FormData, prod) => {
    // const review = FormData.get("review");
    // const rate = FormData.get("name");

    console.log(FormData);
    // const rev = {
    //     review:2,
    //     userID:"T522"
    // }

    await fetch('http://127.0.0.1:8000/ratings/'+ prod + '/T123/'+FormData+"/", {
      method: "PUT",
      body: JSON.stringify(),
      headers:{
        "Content-Type": "application/json",
      }
    })
    // redirect('/')
    // console.log(data)
    // revalidateTag("review")
    // redirect("/")

    // relo("/")
  }
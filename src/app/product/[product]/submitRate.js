"use server"
export const addReview = async (FormData) => {
    const review = FormData.get("review");
    
    if(!review) return;
    console.log({review});
    const rev = {
        review:review,
        userID:"T522"
    }

    await fetch('http://127.0.0.1:8000/reviews/9/', {
      method: "POST",
      body: JSON.stringify(rev),
      headers:{
        "Content-Type": "application/json",
      }
    })
    revalidateTag("review")
    // redirect("/")

    // relo("/")
  }
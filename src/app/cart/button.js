"use client"

export default function Btn(){
    // const formData = new FormData;
    
    return(
        <>
            <form action = {addContainer}>
              <button type='submit' className={"flex justify-center mx-4"+"mt-2 bg-transparent hover:bg-blue-400 text-blue-400  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"}>   Add to Container </button> 
              
              </form>
            {/* <form >
              <button onClick={() => addContainer(formData)} type='submit' className={"flex justify-center mx-4"+"mt-2 bg-transparent hover:bg-blue-400 text-blue-400  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"}>   Add to Container </button> 
            </form> */}
        </>

    )
}
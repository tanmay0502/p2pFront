// "use client"
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Product from '@/components/misc/product'
import prev from '@/components/pages/OurProd.module.css'
import styles from './Page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { redirect } from 'next/dist/server/api-utils'
import prev3 from '@/components/pages/OurProd.module.css'
import { revalidateTag } from 'next/cache'
import ProdRate from './rating'
import old from '../../cart/Page.module.css'
// const reviewForm = () => {
//     "use server"
  
//   //   const handleSubmit = (e) => {
//   //     e.preventDefault();
//   //     // You can add your logic here to handle the form submission, e.g., sending the review to a server.
//   //     console.log('Submitted review:', review);
//   //   };
  
//     return (
//       <div className="review-form-container">
//         <h2>Write a Review</h2>
//         <form>
//           <textarea
//             className="review-input"
//             placeholder="Write your review here..."
//           //   value={review}
//             // onChange={(e) => setReview(e.target.value)}
//             required
//           />
//           <button type="submit" className="submit-button">
//             Submit
//           </button>
//         </form>
//       </div>
//     )
//   }
  
// 

const getRate = async (params) => {
    const res = await fetch(("http://127.0.0.1:8000/ratings/9/T123/6/"),{cache: "no-cache"});
    return res.json();
}
const getProduct = async (params) => {
    const res = await fetch(("http://127.0.0.1:8000/product/"+ params.product),{cache: "no-cache"});
    
    return res.json();
}
const getReviews = async (params) => {
    const res = await fetch(("http://127.0.0.1:8000/reviews/"+ params.product) ,{cache: "no-cache"});
    return res.json();
}
const getRating = async (params) => {
    const res = await fetch("http://127.0.0.1:8000/average_rating/"+ params.product ,{cache: "no-cache"});
    return res.json();
}
const RatingStars = (rating) => {
    const filledStars = Math.floor(rating);
    const remainingStars = 5 - filledStars;
    const hasHalfStar = (rating % 1 !== 0);
    const filledStarArray = Array.from({ length: filledStars });
    const remainingStarArray = Array.from({ length: hasHalfStar });
  
    return (
      <div className={styles.ratingStars}>
        {filledStarArray.map((_, index) => (
          <span key={index} className={styles.starFilled}></span>
        ))}
        {hasHalfStar? <span className={styles.starHalf}></span>
        :remainingStarArray.map((_, index) => (
          <span key={`empty-${index}`} className={styles.starEmpty}></span>
        ))}
      </div>
    );
  };
  
var products = [
    ["Lato Bag", "/blueBag.png", "4000","18"],["Bag Asus", "/bag3.png", "2000","15"],["Lato Bag", "/bag4.png", "2200","10"]
]


const labels = {
    // 0.5: 'Useless',
    1: 'Useless+',
    // 1.5: 'Poor',
    2: 'Poor+',
    // 2.5: 'Ok',
    3: 'Ok+',
    // 3.5: 'Good',
    4: 'Good+',
    // 4.5: 'Excellent',
    5: 'Excellent+',
  };
  const addReview = async (FormData) => {
    "use server";
    const review = FormData.get("review");
    
    if(!review) return;
    const rev = {
        review:review,
        userID:"T522"
    }

    await fetch('http://127.0.0.1:8000/reviews/'+params.product, {
      method: "POST",
      body: JSON.stringify(rev),
      headers:{
        "Content-Type": "application/json",
      }
    })
    revalidateTag("review")
  }

export default async function Single({params}) {
    const rate = await getRate(); 
    
    const gproducts = await getProduct(params);
    const reviews2 = await getReviews(params);
    const rating2 = await getRating(params);
    const value = 0;
    var stock = gproducts.stock;
    var rating = rating2 ? rating2.ratings : 0;
    var users = rating2 ? rating2.users_count: 0;
    var reviews = reviews2 ? reviews2.reviews: 0;
    var currProduct = gproducts || {};
    let name = currProduct.name || "";
    let description = currProduct.description || "";
    let imageName = currProduct.image || "";
    let price = currProduct.price || 0;
    let discount = currProduct.discount || 0;
    const discountedPrice = price - (price * (discount / 100));

    return (
       
      <div>
            <Navbar/>
            <div className={old.banner}>
                <div className={old.head}>
                    <div className="flex justify-center items-center">
                    <Image clsassName={old.p2pLogo} src="/p2pLogo.png" alt="Logo" width={100} height={100} />
                        Product Details
                    </div>
                </div>
            </div>
                <div className='pt-10'>
                    <div className={styles.productDetail}>
                    <div className={styles.containerM}>
                        <div className={styles.productInfo}>
                         
                        <div className={styles.imageContainer}>
                            <div className={styles.imageFrame}>
                            {/* <Image className={styles.image} src= {imageName} layout="fill" objectFit="contain" alt="Product" /> */}
                            {/* <Image className={styles.image} src = {"/"+imageName} alt={name} width={100} height={100} /> */}
                            <img className={styles.image} src = {imageName} alt={name} />

                            </div>
                        </div>
                        <div className={styles.details}>
                            <p className={styles.name}> {name}</p>
                            <div className='flex'>
                            
                                <Box
                                    sx={{
                                        // width: 200,
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                    >
                                    <Rating
                                        name="text-feedback"
                                        value={rating}
                                        readOnly
                                        precision={0.2}
                                        emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
                                    />
                                    
                                    {/* <Box sx={{ ml: 2 }}>{labels[rating]}</Box> */}
                                    </Box>
                                    <p className='pt-1 pr-2 text-sm font-poppins text-gray-600'>({users} users) </p>
                            </div>
                            <p className={styles.nameSm}>₹{discountedPrice.toFixed(2)} <span className='text-xl text-red-400'><s>{" ₹"+price}</s></span></p>
                            {/* <p className={styles.originalPrice}>Original Price: ${price}</p> */}
                            <div className={styles.actions}>
                                <Link href={"/checkout/"} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full" >Buy</Link>
                                <Link href={"/chart/"} className="bg-transparent hover:bg-blue-400 text-blue-400  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">+ Cart</Link>
                                {/* <Link href={"/container/"} className="bg-transparent hover:bg-blue-400 text-blue-400 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">+ Container</Link> */}
                            </div>
                            <p className='pt-2 pr-2 text-md font-poppins text-gray-600'>Only <span className='text-xl text-red-400'>{stock}</span> left in stock </p>
                                    SOLD BY
                                    Kinta off
                        </div>
                        </div>
                        </div>
                        {/* <hr className={styles.horizontalLine} /> */}
                        <div>
                        <div className={styles.container}>
                            <div className={styles.description}>
                                <div className="w-full flex justify-center">
                                    <p className={styles.descriptionHead}>Description</p>
                                </div>
                                    <p className='w-100 flex justify-center'>{description}</p>
                            </div>
                        </div>
                        <div className={styles.container}>
                        <div className={styles.description}>
                            <div className="w-full flex justify-center"><p className={styles.descriptionHead}>Reviews</p></div>
                            {/* <ReviewForm /> */}
                                {/* <Form /> */}
                                <div>

                               
                                <div className={styles.reviewFC}>
                                    <p className={styles.h2}>Write a Review</p>
                                <div className='flex pt-1 pb-2'>
                                    {rate && rate.rating == 0 ? 
                                    <>
                                    <p className='pt-1 text-lg pr-2'>Rate product: </p>
                                    <ProdRate />
                                    </>
                                    :
                                    <>
                                    
                                    <Rating
                                        name="text-feedback"
                                        value={rate.rating}
                                        readOnly
                                        // precision={0.2}
                                        emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
                                    />
                                    <p className='text-sm pt-1 pr-2'>(You already Rated) </p>
                                    </>                            
                                }
                                    {/* <form action=""> 
                                        <Box
                                        sx={{
                                            width: 200,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                        >
                                        <Rating
                                            name="rate"
                                            value={value}
                                            // readOnly
                                            precision={0.2}
                                            emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
                                        />
                                        </Box> 
                                    </form> */}
                                    </div>


                                    <form action={addReview}>
                                        <textarea
                                        name="review"
                                        className={styles.reviewI}
                                        placeholder="Write your review here..."
                                        //   value={review}
                                        // onChange={(e) => setReview(e.target.value)}
                                        required
                                        />
                                        <button type="submit" className='bg-transparent hover:bg-blue-400 text-blue-400  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full'>
                                        Submit
                                        </button>
                                    </form>
                                </div>
                                </div>
                            <div className='flex justify-center'>           
                            <div className={styles.rev}>
                            <p className='text-xl pt-1 pr-2 font-semibold' >What buyers think:</p>
                            {/* {console.log(rating)} */}
                            {
                                reviews &&
                                Object.entries(reviews)
                                    .reverse() 
                                    .map(([userId, reviewText], index) => (
                                        <div key={userId} className={styles.reviewContainer}>
                                            <div className={styles.reviewText}>
                                                <span className={styles.userName}> {`${userId}`}</span>: {reviewText}
                                            </div>
                                        </div>
                                    ))
                            }
                                
                                <div className="">
                                    {/* <p className={styles.miniHead}>Reviews:</p> */}

                                </div>
                            </div></div>
                        <div className={styles.description}>
                            <div className={styles.container}>
                                
                            </div>
                            </div>
                        </div>
                        </div> 
                        
                    </div>
                    </div>
                </div>
                <div className='px-20'>
                <div className="w-full flex justify-center"><p className={styles.descriptionHead}>Related Products</p></div>

                    <div className={prev3.productList}>
                                        {products.map((product, index) => (
                                            <>
                                            <Link href="/product" >
                                                <div  
                                                className="flex justify-center items-center"
                                                // onClick={function() {window.open('/product-list');}}  
                                                >
                                                    <Product
                                                    key={index}
                                                    name={product[0]}
                                                    image={product[1]}
                                                    price={product[2]}
                                                    discount={product[3]}
                                                    />

                                                </div>
                                                </Link>
                                            </>
                                            
                                        ))}
                                    </div>
                                
                </div>
            <Footer/>
      </div>
      
    )
  }
  
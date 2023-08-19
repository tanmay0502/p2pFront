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
    
    {console.log(hasHalfStar)}
    const filledStarArray = Array.from({ length: filledStars });
    const remainingStarArray = Array.from({ length: hasHalfStar });
    // const filledStarArray = Array.from({ length: filledStars });
    // const remainingStarArray = Array.from({ length: remainingStars });
  
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
  
// const RatingStars = ({ rating }) => {
//     const filledStars = Math.floor(rating);
//     const remainingStars = 5 - filledStars;
//     const hasHalfStar = rating % 1 !== 0;
  
//     return (
//       <div className={styles.ratingStars}>
//         {[...Array(5)].map((_, index) => (
//           <span
//             key={index}
//             className={
//               index < filledStars
//                 ? styles.starFilled
//                 : index === filledStars && hasHalfStar
//                 ? styles.starHalf
//                 : styles.starEmpty
//             }
//           ></span>
//         ))}
//       </div>
//     );
//   };
  

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  const addReview = async (FormData) => {
    "use server";
    // e.preven
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
    
    // redirect("/")

    // relo("/")
  }

export default async function Single({params}) {
    const gproducts = await getProduct(params);
    const reviews2 = await getReviews(params);
    const rating2 = await getRating(params);
    const value = 0;
    var rating = rating2.ratings;
    // console.log({rating})
    var users = rating2.users_count;
    // if(review2)
    var reviews = reviews2.reviews;
    var currProduct =  gproducts;
    // console.log({reviews})
    let name = currProduct.name;
    let description = currProduct.description;
    let imageName =  currProduct.image;
    console.log({imageName})
    let price = currProduct.price;
    let discount = currProduct.discount;
    // const [name, description, imageName, price, discount] = [currProduct.name, currProduct.description, currProduct.imageName, currProduct.price, currProduct.discount];
    const discountedPrice = price - (price * (discount / 100));

    return (
       
      <div>
            <Navbar/>
                <div>
                    <div className={styles.productDetail}>
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
                            <p>Discounted Price: ₹{discountedPrice.toFixed(2)}<s>{" ₹"+price}</s></p>
                            {/* <p className={styles.originalPrice}>Original Price: ${price}</p> */}
                            <div className={styles.actions}>
                                <Link href={"/checkout/"} className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full" >Buy</Link>
                                <Link href={"/chart/"} className="bg-transparent hover:bg-blue-400 text-blue-400  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">+ Cart</Link>
                                <Link href={"/container/"} className="bg-transparent hover:bg-blue-400 text-blue-400 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">+ Container</Link>
                            </div>
                        </div>
                        </div>
                        {/* <hr className={styles.horizontalLine} /> */}
                        <div>
                        <div className={styles.container}>
                        <div className={styles.description}>
                            <div className="w-full flex justify-center"><p className={styles.descriptionHead}>Product Description</p></div>
                            {description}</div></div>
                            <div className={styles.container}>
                        <div className={styles.description}>
                            <div className="w-full flex justify-center"><p className={styles.descriptionHead}>Ratings and Reviews</p></div>
                            {/* <ReviewForm /> */}
                                {/* <Form /> */}
                                <div>

                               
                                <div className={styles.reviewFC}>
                                    <p className={styles.h2}>Write a Review</p>
                                    <div className='flex pt-1 pb-2'>

                                    <p className='pt-1 text-lg pr-2'>Rate product: </p>
                                    <form action=""> 
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
                                        {/* {value !== null && (
                                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                        )} */}
                                        </Box> 
                                    </form>
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


                            <div className='flex'>
                            <p className='pt-1 pr-2 text-lg'>Average Ratings by {users} users: </p>
                                <Box
                                    sx={{
                                        width: 200,
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
                                    <Box sx={{ ml: 2 }}>{labels[rating]}</Box>
                                    </Box>
                            </div>
                            {/* {console.log(rating)} */}
                            {reviews && Object.entries(reviews).map(([userId, reviewText],index) => (
                                <div key={userId} className={styles.reviewContainer}>
                                <div className={styles.reviewText}><span className={styles.userName}>{index + 1}. {`${userId}`}</span>: {reviewText}</div>
                                </div>
                            ))}
                                
                                <div className="">
                                    {/* <p className={styles.miniHead}>Reviews:</p> */}

                                </div>
                            </div></div>
                        <div className={styles.description}>
                            <div className={styles.container}>
                                <div className="w-full flex justify-center"><p className={styles.descriptionHead}>Related Products</p></div>

                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            <Footer/>
      </div>
    )
  }
  
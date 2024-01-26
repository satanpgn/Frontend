
// import React, {useEffect} from 'react'
// import Navbar from '../components/Navbar'
// import { testApi } from '../apis/Api'

// const Homepage = () => {

//   useEffect(() => {
//     testApi().then((res) => {
//       console.log(res)
//     })
//   },[])

//   return (
//   <div>
//   <div
//     className="banner"
//     style={{
//       backgroundImage:
//         'url("https://wfgtitle.com/wp-content/uploads/2023/11/9-SAFE-Tipsheet-Nov2023-Thanksgiving-shopping-season_SocialMedia-scaled.jpg")',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       height: '550px',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}
//   >
//     //   <h1 style={{ color: '#00ff00' }}>New Trends</h1>
//     </div>
    
//   );
//         <h1>Welcome to homepage!</h1>
//         <div className="product-details-section">
//   <div className="container">
//     <h2 className="text-center mb-4">Featured Products</h2>
    
//     <div className="row">
//       {/* Product 1 */}
//       <div className="col-md-4">
//         <div className="product-card">
//           <img src="data:image/jpeg;base64,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" alt="Product 1" className="img-fluid" />
//           <h3>Sweaters</h3>
//           <p> For Winters those woolen clothes are qualitative.</p>
//           <p>Price: $49.99</p>
//           <button className="btn btn-primary">Add to Cart</button>
//           <button className="btn btn-primary">Buy Now</button>

//         </div>
//       </div>

//       {/* Product 2 */}
//       <div className="col-md-4">
//         <div className="product-card">
//           <img src="https://cdn.thewirecutter.com/wp-content/media/2021/05/mensjeans-2048px-4026-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024" alt="Product 2" className="img-fluid" />
//           <h3>Jeans</h3>
//           <p>Pants are imported from different Countries</p>
//           <p>Price: $39.99</p>
//           <button className="btn btn-primary">Add to Cart</button>
//           <button className="btn btn-primary">Buy Now</button>

//         </div>
//       </div>

//       {/* Product 3 */}
//       <div className="col-md-4">
//         <div className="product-card">
//           <img src="https://teddybaldassarre.com/cdn/shop/articles/Best-Mens-Watches-FI.jpg?v=1655749638" alt="Product 3" className="img-fluid" />
//           <h3>Watch</h3>
//           <p>Watch are water resistant with warranty</p>
//           <p>Price: $29.99</p>
//           <button className="btn btn-primary">Add to Cart</button>
//           <button className="btn btn-primary">Buy Now</button>

//         </div>
//       </div>

//       {/* Product 4 */}
//       <div className="col-md-4">
//         <div className="product-card">
//           <img src="https://www.macworld.com/wp-content/uploads/2024/01/All-the-iphones-2023-to-2024-1.jpg?quality=50&strip=all" alt="Product 4" className="img-fluid" />
//           <h3>iPhones</h3>
//           <p>The latest arrivals from Apple</p>
//           <p>Price: $19.99</p>
//           <button className="btn btn-primary">Add to Cart</button>
//           <button className="btn btn-primary">Buy Now</button>

//         </div>
//       </div>

//       {/* Product 5 */}
//       <div className="col-md-4">
//         <div className="product-card">
//           <img src="https://i.rtings.com/assets/pages/6S2WXjTl/best-laptop-medium.jpg" alt="Product 5" className="img-fluid" />
//           <h3>Laptops</h3>
//           <p>All Brands laptops are available with discounts</p>
//           <p>Price: $59.99</p>
//           <button className="btn btn-primary">Add to Cart</button>
//           <button className="btn btn-primary">Buy Now</button>

//         </div>
//       </div>

//          {/* Product 4 */}
//          <div className="col-md-4">
//          <div className="product-card">
//            <img src="https://variety.com/wp-content/uploads/2021/07/FA21_ISSA_RAE_CUSTOM_LIFESTYLE_NICKY_IMG_0303.jpg" alt="Product 4" className="img-fluid" />
//            <h3>Converse </h3>
//            <p>Chuck Taylor shoes are available with all different Sizes</p>
//            <p>Price: $19.99</p>
//            <button className="btn btn-primary">Add to Cart</button>
//            <button className="btn btn-primary">Buy Now</button>

//          </div>
//        </div>
//     </div>
//   </div>
// </div>
// };

//  {/* Subscribe section */}
//  <div className="subscribe-section">
//  <div className="container">
//    <h2 className="text-center mb-4">Subscribe to Our Newsletter</h2>
//    <p className="text-center">Stay updated with the latest trends and exclusive offers. Subscribe now!</p>

//    <div className="row justify-content-center">
//      <div className="col-md-6">
//        <form>
//          <div className="input-group mb-3">
//            <input type="email" className="form-control" placeholder="Your Email" aria-label="Your Email" aria-describedby="subscribe-btn" />
//            <button className="btn btn-primary" type="button" id="subscribe-btn">Subscribe</button>
//          </div>
//        </form>
//      </div>
//    </div>
//  </div>
// </div>

// {/* About section */}
// <div className="about-section">
// <div className="container">
//   <h2 className="text-center mb-4">About Us</h2>
//   <p>
//     Welcome to Online Shopping, your go-to destination for the latest trends in fashion and gadgets. 
//     We are passionate about providing you with a seamless online shopping experience and bringing you
//     the best products from various categories.
//   </p>
//   <ul>
//     <li><strong>About Us</strong></li>
//     <li><strong>We're Hiring</strong></li>
//     <li><strong>Support</strong></li>
//     <li><strong>Find Store</strong></li>
//     <li><strong>Shipment</strong></li>
//     <li><strong>Payment</strong></li>
//     <li><strong>Gift Card</strong></li>
//     <li><strong>Return</strong></li>
//     <li><strong>Help</strong></li>
//   </ul>
// </div>
// </div>

// {/* Store section */}
// <div className="store-section">
// <div className="container">
//   <h2 className="text-center mb-4">Our Store</h2>
//   <p>
//     Visit our physical store and explore a wide range of products. Our friendly staff is
//     ready to assist you with any inquiries and make your shopping experience memorable.
//   </p>
//   <ul>
//     <li><strong>Store Location:</strong> 123 Main Street, New Road, Kathmandu</li>
//     <li><strong>Business Hours:</strong> Monday - Friday: 9 AM - 8 PM, Saturday: 10 AM - 6 PM, Sunday: Closed</li>
//     <li><strong>Contact Us:</strong> Phone: +9779803017003 , Email: lyfinfinitum@gmail.com</li>
//   </ul>
// </div>
// </div>

// {/* Payment Methods section */}
// <div className="payment-methods-section">
// <div className="container">
//   <h2 className="text-center mb-4">We Accept</h2>
//   <p>Experience convenient and secure transactions with the following payment methods:</p>
//   <ul>
//     <li><strong>Online Banking</strong></li>
//     <li><strong>Credit Card</strong></li>
//     <li><strong>eSewa</strong></li>
//     {/* Add more payment methods as needed */}
//   </ul>
// </div>
// </div>


//  {/* Social Media section */}
//     <div className="social-media-section">
//       <div className="container">
//         <h2 className="text-center mb-4">Follow Us on Social Media</h2>
//         <div className="social-icons">
//           <a href="mailto:your.email@gmail.com" target="_blank" rel="noopener noreferrer">
//             <FaEnvelope className="icon" />
//           </a>
//           <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
//             <FaFacebook className="icon" />
//           </a>
//           <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
//             <FaInstagram className="icon" />
//           </a>
//           <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
//             <FaTwitter className="icon" />
//           </a>
//           {/* Add more social media icons as needed */}
//         </div>
//       </div>
//     </div>

//        {/* Developed by section */}
//        <div className="developed-by-section">
//        <div className="container">
//          <h2 className="text-center mb-4">Developed by Tech & Trends</h2>
//          <p>
//            Tech & Trends is committed to delivering innovative solutions and cutting-edge technology.
//            Our team of experts works tirelessly to bring you the best online shopping experience.
//          </p>
//        </div>
//      </div>
//   )
// </>

// )
// };
//     </div>
    


//   )

// }

// export default Homepage
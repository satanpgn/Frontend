// // import React, {useEffect} from 'react'
// // import Navbar from '../components/Navbar'
// // import { testApi } from '../apis/Api'

// // const Homepage = () => {

// //   useEffect(() => {
// //     testApi().then((res) => {
// //       console.log(res)
// //     })
// //   },[])

// //   return (
// //     <div>
// //         <h1>Welcome to homepage!</h1>
// //     </div>
// //   )
// // }

// // export default Homepage


// // import React, { useEffect } from 'react';
// // import Navbar from '../components/Navbar';
// // import { testApi } from '../apis/Api';

// // const Homepage = () => {

// //   useEffect(() => {
// //     testApi().then((res) => {
// //       console.log(res);
// //     });
// //   }, []);

// //   return (
// //     <div>
// //       <Navbar />
// //       <h1>Welcome to homepage!</h1>
// //       <h2>Online Shopping</h2>
// //     </div>
// //   );
// // };

// // export default Homepage;

// import React, { useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import { testApi } from '../apis/Api';
// // import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// // import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


// const Homepage = () => {

//   // // get data of user form local storage
//   // const user = JSON.parse(localStorage.getItem('user'))
//   // // logout function
//   // const navigate = useNavigate()
//   // const handleLogout = (e) => {
//   //   e.preventDefault()
//   //   localStorage.clear()
//   //   navigate('/homepage')
//   // }

//   useEffect(() => {
//     testApi().then((res) => {
//       console.log(res);
//     });
//   }, []);


//   // return (

//     return (
//     <div>
//       // <Navbar>
//       <h1>Welcome to homepage!</h1>
//       <h2>Online Shopping</h2>
//       <div className="banner-section">
//         <img src="images/banner.jpg" alt="Banner Image 1" />
//         <img src="path/to/banner-image2.jpg" alt="Banner Image 2" />
//         {/* Add more images as needed */}
//       </div>
// // </Navbar>
//     </div>
//   );
// // };
// //     <>
    

// //       <nav className="navbar navbar-expand-lg bg-body-tertiary">
// //         <div className="container-fluid">
// //         <div className="text-center mb-4">
// //         {/* Add more avatars as needed */}
// //       </div>
// //           <a className="navbar-brand text-danger fw-bold" href="#">Online Shopping
// //           <img src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-online-shopping-mart-design-png-image_5344271.jpg" alt="Avatar 1" style={{ maxWidth: '90px', marginRight: '50px' }} />
// //           </a>
// //           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// //             <span className="navbar-toggler-icon"></span>
// //           </button>
// //           <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// //               <li className="nav-item">
// //                 <a className="nav-link active" aria-current="page" href="#">Home</a>
// //               </li>
// //               <li className="nav-item">
// //                 <a className="nav-link" href="#">Products</a>
// //               </li>
// //               <li className="nav-item">
// //                 <a className="nav-link" href="#">Gadgets</a>
// //               </li>
// //               <li className="nav-item dropdown">
// //                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
// //                   Category
// //                 </a>
// //                 <ul className="dropdown-menu">
// //                   <li><a className="dropdown-item" href="#">Fashion</a></li>
// //                   <li><a className="dropdown-item" href="#">Gadgets</a></li>
// //                   <li><hr className="dropdown-divider" /></li>
// //                   <li><a className="dropdown-item" href="#">Explore others</a></li>
// //                   <li><a className="dropdown-item" href="#">Accessories</a></li>

// //                 </ul>
// //               </li>
// //             </ul>
// //             <form className="d-flex" role="search">
// //             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
// //               {
// //                 user ? <>
// //                   <div class="dropdown">
// //                     <button class="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
// //                       Welcome, {user.firstName}!
// //                     </button>
// //                     <ul class="dropdown-menu">
// //                       <li><Link class="dropdown-item" to="/profile">Profile</Link></li>
// //                       <li><Link class="dropdown-item" to="/changepp">Change password</Link></li>
// //                       <li><button onClick={handleLogout} class="dropdown-item" to="/logout">Logout</button></li>
// //                     </ul>
// //                   </div>

// //                 </>
// //                   : <>
// //                     <Link className="btn btn-outline-primary me-2" to={'/login'}>Login</Link>
// //                     <Link className="btn btn-outline-success" to={'/register'}>Register</Link>
// //                   </>
// //               }
// //             </form>
// //           </div>
// //         </div>
// //       </nav>
// //     </>
    
// //   )
// // };
// }

// export default Homepage


import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import { testApi } from '../apis/Api'


const Homepage = () => {

  useEffect(() => {
    testApi().then((res) => {
      console.log(res)
    })

    .catch((error) => {
      console.error("Error fetching data:", error.message);

      })
  },[])

  return (
    <div>
    <Navbar />

     {/* Banner Image */}
     <img
     src="https://i.pinimg.com/originals/ed/cd/32/edcd32b829a5c6e614a6d6383c562742.jpg"
     alt="Banner"
     style={{ maxWidth: 'center', height: '300%' }}

     
   />  
    <h1>Welcome to Latest Arrivals!</h1>
     {/* Product Section */}
     <div className="product-section">
     <div className="product-item">
       <img src="https://cdn.thewirecutter.com/wp-content/media/2021/05/mensjeans-2048px-4026-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024" alt="Product 1" style={{ width: '100%' }} />
       <p>Ripped Skinny Jeans</p>
       <p>Description of the product goes here.</p>
       <p>$24.99</p>
       <div className="product-buttons">
         <button className="buy-now-button">Buy Now</button>
         <button className="add-to-cart-button">Add to Cart</button>
       </div>
     </div>

     {/* Add more product items as needed */}
   </div>

   <div className="product-section">
   <div className="product-item">
     <img src="https://www.shutterstock.com/image-photo/new-collection-different-color-spring-260nw-1708662301.jpg" alt="Product 1" style={{ width: '100%' }} />
     <p>Leather Jackets</p>
     <p>This is Pure material</p>
     <p>$24.99</p>
     <div className="product-buttons">
       <button className="buy-now-button">Buy Now</button>
       <button className="add-to-cart-button">Add to Cart</button>
     </div>
   </div>

   {/* Add more product items as needed */}
 </div>

 <div className="product-section">
 <div className="product-item">
   <img src="https://cdn.shopify.com/s/files/1/0711/5132/1403/files/lookbook-topbanner-yokesweaters-mobile.jpg" alt="Product 1" style={{ width: '100%' }} />
   <p>Woolean Sweaters</p>
   <p>Comfortable for everyOne</p>
   <p>$24.99</p>
   <div className="product-buttons">
     <button className="buy-now-button">Buy Now</button>
     <button className="add-to-cart-button">Add to Cart</button>
   </div>
 </div>

 {/* Add more product items as needed */}
</div>

<div className="product-section">
<div className="product-item">
  <img src="https://miro.medium.com/v2/resize:fit:1400/1*xThX2JP_7h4hjGKXb-476A.jpeg" alt="Product 1" style={{ width: '100%' }} />
  <p>Ripped Skinny Jeans</p>
  <p>Description of the product goes here.</p>
  <p>$24.99</p>
  <div className="product-buttons">
    <button className="buy-now-button">Buy Now</button>
    <button className="add-to-cart-button">Add to Cart</button>
  </div>
</div>

{/* Add more product items as needed */}
</div>
<div className="product-section">
<div className="product-item">
  <img src="https://www.gotokyo.org/en/new-and-now/new-and-trending/230724/images/en_main.jpg" alt="Product 1" style={{ width: '100%' }} />
  <p>Authentic Shoes</p>
  <p>Sports and Party Shoes.</p>
  <p>$24.99</p>
  <div className="product-buttons">
    <button className="buy-now-button">Buy Now</button>
    <button className="add-to-cart-button">Add to Cart</button>
  </div>
</div>

{/* Add more product items as needed */}
</div>
<div className="product-section">
<div className="product-item">
  <img src="https://prodlifestyleasia-uploads.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2019/08/28174541/luxury-question.jpg" alt="Product 1" style={{ width: '100%' }} />
  <p>Watch </p>
  <p>Many valid Companies are Available</p>
  <p>$24.99</p>
  <div className="product-buttons">
    <button className="buy-now-button">Buy Now</button>
    <button className="add-to-cart-button">Add to Cart</button>
  </div>
</div>


 {/* Contact Section */}
 <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }} id="contact">
 <h3 className="w3-center">CONTACT</h3>
 <p className="w3-center w3-large">Let's get in touch. Send us a message:</p>
 <div style={{ marginTop: '48px' }}>
   <p><i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Kathmandu, Nepal</p>
   <p><i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +9779803017003</p>
   <p><i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"></i> Email: lyfinfinitum@Gmail.com</p>
   <br />
   <form action="/action_page.php" target="_blank">
     <p><input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" /></p>
     <p><input className="w3-input w3-border" type="text" placeholder="Email" required name="Email" /></p>
     <p><input className="w3-input w3-border" type="text" placeholder="Subject" required name="Subject" /></p>
     <p><input className="w3-input w3-border" type="text" placeholder="Message" required name="Message" /></p>
     <p>
       <button className="w3-button w3-black" type="submit">
         <i className="fa fa-paper-plane"></i> SEND MESSAGE
       </button>
     </p>
   </form>

 {/* About Section */}
 <div className="w3-col s4">
 <h4>About</h4>
 <p><a href="#">About us</a></p>
 <p><a href="#">We're hiring</a></p>
 <p><a href="#">Support</a></p>
 <p><a href="#">Find store</a></p>
 <p><a href="#">Shipment</a></p>
 <p><a href="#">Payment</a></p>
 <p><a href="#">Gift card</a></p>
 <p><a href="#">Return</a></p>
 <p><a href="#">Help</a></p>
</div>

  {/* Newsletter Modal */}
  <div id="newsletter" className="w3-modal">
  <div className="w3-modal-content w3-animate-zoom" style={{ padding: '32px' }}>
    <div className="w3-container w3-white w3-center">
      <i
        onClick={() => document.getElementById('newsletter').style.display = 'none'}
        className="fa fa-remove w3-right w3-button w3-transparent w3-xxlarge"
      ></i>
      <h2 className="w3-wide">NEWSLETTER</h2>
      <p>Join our mailing list to receive updates on new arrivals and special offers.</p>
      <p><input className="w3-input w3-border" type="text" placeholder="Enter e-mail" /></p>
      <button
        type="button"
        className="w3-button w3-padding-large w3-red w3-margin-bottom"
        onClick={() => document.getElementById('newsletter').style.display = 'none'}
      >
        Subscribe
      </button>
    </div>
  </div>
</div>

</div>
<p>Location Of Your Shop</p>

{/* Image of location/map */}
<img src="https://www.google.com/maps/vt/data=WM309SDXQzZ67BM_SdaINfi4sS-FVsI8p4RymuYFzcvc2hZLhvZkBaO4eWpqu5EYGDb3sxwJfM9VHyraxjvJMdRecTa-qb_poBzcUmh5CcnBt2ysAHI73gjekSLNLm4hOfO0u0d5MrcXu-TSS-myyL5duD7sq0icxErNW3Jg-PelAnSiMsrzDT_gcJFurF3rjZi4L56lqVc7neUtqsl-ymSExV_P6MXs2OB9yC51bMteH-id_4GdlZtQIfxDbn6JdJ9YUQ" className="w3-image w3-greyscale" style={{ width: '70%', marginTop: '48px' }} />
</div>


      {/* Social Media Section */}
      <div className="social-media-section">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook-official w3-hover-opacity"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram w3-hover-opacity"></i>
        </a>
        <a href="https://www.Gmail.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-Gmail w3-hover-opacity"></i>
      </a>
      <a href="https://www.YouTube.com" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-YouTube w3-hover-opacity"></i>
    </a>
      </div>

</div>
  </div>
  )
}

export default Homepage;







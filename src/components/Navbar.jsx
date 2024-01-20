// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const Navbar = () => {

//   // get data of user form local storage
//   const user = JSON.parse(localStorage.getItem('user'))

//   // logout function
//   const navigate = useNavigate()
//   const handleLogout = (e) => {
//     e.preventDefault()
//     localStorage.clear()
//     navigate('/login')
//   }

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand text-danger fw-bold" href="#">Frontend</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Products</a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Catagory
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li><a className="dropdown-item" href="#">Fashion</a></li>
//                   <li><a className="dropdown-item" href="#">Gadgets</a></li>
//                   <li><hr className="dropdown-divider" /></li>
//                   <li><a className="dropdown-item" href="#">Explore others</a></li>
//                 </ul>
//               </li>

//             </ul>
//             <form className="d-flex" role="search">
//               {
//                 user ? <>
//                   <div class="dropdown">
//                     <button class="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                       Welcome, {user.firstName}!
//                     </button>
//                     <ul class="dropdown-menu">
//                       <li><Link class="dropdown-item" to="/profile">Profile</Link></li>
//                       <li><Link class="dropdown-item" to="/changepp">Change password</Link></li>
//                       <li><button onClick={handleLogout} class="dropdown-item" to="/logout">Logout</button></li>
//                     </ul>
//                   </div>

//                 </>
//                   : <>
//                     <Link className="btn btn-outline-primary me-2" to={'/login'}>Login</Link>
//                     <Link className="btn btn-outline-success" to={'/register'}>Register</Link>
//                   </>
//               }
//             </form>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navbar


import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Navbar = () => {

  // get data of user form local storage
  const user = JSON.parse(localStorage.getItem('user'))
  // logout function
  const navigate = useNavigate()
  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.clear()
    navigate('/login')
  }

  return (
    <>
    

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <div className="text-center mb-4">
        {/* Add more avatars as needed */}
      </div>
          <a className="navbar-brand text-danger fw-bold" href="#">Online Shopping
          <img src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-online-shopping-mart-design-png-image_5344271.jpg" alt="Avatar 1" style={{ maxWidth: '90px', marginRight: '50px' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Gadgets</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Fashion</a></li>
                  <li><a className="dropdown-item" href="#">Gadgets</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Explore others</a></li>
                  <li><a className="dropdown-item" href="#">Accessories</a></li>

                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              {
                user ? <>
                  <div class="dropdown">
                    <button class="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Welcome, {user.firstName}!
                    </button>
                    <ul class="dropdown-menu">
                      <li><Link class="dropdown-item" to="/profile">Profile</Link></li>
                      <li><Link class="dropdown-item" to="/changepp">Change password</Link></li>
                      <li><button onClick={handleLogout} class="dropdown-item" to="/logout">Logout</button></li>
                    </ul>
                  </div>

                </>
                  : <>
                    <Link className="btn btn-outline-primary me-2" to={'/login'}>Login</Link>
                    <Link className="btn btn-outline-success" to={'/register'}>Register</Link>
                  </>
              }
            </form>
          </div>
        </div>
      </nav>
    </>
    
  )
};

export default Navbar

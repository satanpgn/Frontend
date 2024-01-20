// import React, { useState } from 'react'
// import { loginUserApi } from '../apis/Api'
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//     const[email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const navigate = useNavigate()

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(email, password)

//         const data = {
//             email : email,
//             password : password
//         }

//         // making API Call
//         // const response  = loginUserApi(data)
//         // console.log(response.data)
//         // if(response.data.success == false){
//         //     toast.error(response.data.message)
//         // } else if (response.data.success == true){
//         //     toast.success(response.data.message)
//         // } else {
//         //     toast.error("Server Error")
//         // }

//         loginUserApi(data).then((res) => {
//             if(res.data.success == false){
//                 toast.error(res.data.message)
//             } else {
//                 toast.success(res.data.message)
//                 // set token and user data in local storage
//                 localStorage.setItem('token',res.data.token)
//         navigate('/admin/dashboard')

//                 // set user data 
//                 const jsonDecode = JSON.stringify(res.data.userData)
//                 localStorage.setItem('user',jsonDecode)

//             }
//         }).catch(err => {
//             toast.error("Server Error")
//             console.log(err.message)
//         })




//     }

    

//     return (
//         <div className='m-3'>
//             <h1>Sign in to your Account!</h1>
//             <form className='w-25'>
//                 <label>Email Address</label>
//                 <input onChange={(e) => setEmail(e.target.value)} className='form-control mb-2' type="email" placeholder='Enter your email' />

//                 <label>Password</label>
//                 <input onChange={(e) => setPassword(e.target.value)} className='form-control mb-2' type="password" placeholder='Enter your password' />

//                 <button onClick={handleSubmit} className='btn btn-primary w-100'>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Login




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUserApi } from "../apis/Api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Navigator
  const navigate = useNavigate();

  // Function for button
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input data
    const isValid = validate();
    if (!isValid) {
      return;
    }

    const data = {
      email: email,
      password: password,
    };

    // Making API call
    loginUserApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          navigate("/dashboard");
          // Set token and user data in local storage
          localStorage.setItem("token", res.data.token);

          // Set user data
          const jsonDecode = JSON.stringify(res.data.userData);
          localStorage.setItem("user", jsonDecode);
        }
      })
      .catch((err) => {
        toast.error("Server Error");
        console.log(err.message);
      });
  };

  // Validate input value
  const validate = () => {
    let isValid = true;

    // Reset error messages
    setEmailError("");
    setPasswordError("");

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    }

    return isValid;
  };

  return (
    <div className="box">
      <body
        style={{
          fontFamily: "Arial, sans-serif",
          margin: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mainAlignment: "center",
          height: "100vh",
          backgroundImage: "url('https://watermark.lovepik.com/photo/40008/0007.jpg_wh1200.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="login-container" style={{ border: '4px solid #ccc', borderRadius: '20px', padding: '30px' }}> 
        {/* Avatars Section */}
        <div className="text-center mb-4">
        <img src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-online-shopping-mart-design-png-image_5344271.jpg" alt="" style={{ maxWidth: '100px', marginRight: '1Ee6COzUvI7pVqLFV9mLHSx6I5xVu3RgkKIN6tv8AX2sf8p8jFpbsVY4ZPTb9jDn7Rii0AaWu1D748ovbStRQbRT9XqV98eZk9M746QMadGJOGb0px' }} />
        {/* Add more avatars as needed */}
      </div>
          <h1 style={{ color: 'green' }}>Login Page</h1>
         
          <form className="w-100">
            <div className="form-group">
            
              <label>Email Address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="form-control"
                placeholder="your@gmail.com"
              />
              {emailError && <p className="text-danger">{emailError}</p>}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
              {passwordError && <p className="text-danger">{passwordError}</p>}
            </div>

            <button onClick={handleSubmit}
             className="btn btn-success m-2"
            >
              Login
            </button>
            <br></br>
            <div>
  
            <span>Don't have an account? </span>
           <a href="/register" className="btn btn-secondary">
           Sign Up
           </a>
          </div>


                      
          </form>
          
        </div>
         
      </body>
    </div>
  );
};

export default Login;